"use client";

import { supabase } from "@/lib/supabase.client";
import { Recipe } from "@/types";
import { FormEvent, useState } from "react";

export default function RecipeEditForm({ recipe }: { recipe: Recipe }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    const updatedRecipe = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      cook_time: parseInt(formData.get("cook_time") as string),
      difficulty: formData.get("difficulty") as string,
    };

    try {
      const { error } = await supabase
        .from("recipes")
        .update(updatedRecipe)
        .eq("id", recipe.id);

      if (error) throw error;

      // 성공 후 리다이렉트 또는 성공 메시지 표시
      alert("레시피가 성공적으로 업데이트되었습니다!");
    } catch (error) {
      console.error("업데이트 오류:", error);
      alert("레시피 업데이트 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block font-medium mb-1">제목</label>
        <input
          name="title"
          defaultValue={recipe.title}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">설명</label>
        <textarea
          name="description"
          defaultValue={recipe.description}
          className="w-full p-2 border rounded min-h-32"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">조리 시간 (분)</label>
        <input
          type="number"
          name="cook_time"
          defaultValue={recipe.cook_time}
          min="1"
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block font-medium mb-1">난이도</label>
        <select
          name="difficulty"
          defaultValue={recipe.difficulty}
          className="w-full p-2 border rounded"
          required
        >
          <option value="easy">쉬움</option>
          <option value="medium">보통</option>
          <option value="hard">어려움</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isSubmitting ? "저장 중..." : "저장하기"}
      </button>
    </form>
  );
}
