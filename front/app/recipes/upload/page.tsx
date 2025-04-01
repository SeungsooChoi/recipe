"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { supabase } from "@/lib/supabase.client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Recipes() {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cookTime, setCookTime] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("easy");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("recipes")
      .insert([{ title, description, cook_time: cookTime, difficulty }]);

    if (error) {
      console.error("Error inserting recipe:", error);
    } else {
      router.push("/recipes");
    }
    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>레시피 등록</CardTitle>
          <CardDescription>
            레시피를 등록하기 위해 모든 정보를 입력하세요.
          </CardDescription>
        </CardHeader>
      </Card>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="레시피 제목"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="설명"
        required
      />
      <input
        type="number"
        value={cookTime}
        onChange={(e) => setCookTime(e.target.value)}
        placeholder="조리 시간 (분)"
        required
      />
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="easy">쉬움</option>
        <option value="medium">중간</option>
        <option value="hard">어려움</option>
      </select>
      <button type="submit" disabled={loading}>
        {loading ? "등록 중..." : "등록하기"}
      </button>
    </form>
  );
}
