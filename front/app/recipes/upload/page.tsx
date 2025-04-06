"use client";

import InputField from "@/app/components/InputField";
import SelectField from "@/app/components/SelectField";
import TextareaField from "@/app/components/TextareaField";
import FormField from "@/app/components/TextareaField";
import {
  Card,
  CardAction,
  CardContent,
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

      <Card className="mt-2">
        <CardContent>
          <FormField
            id={title}
            label="레시피 제목"
            value={title}
            placeholder="레시피 제목을 입력하세요."
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextareaField
            id={description}
            label="설명"
            value={description}
            placeholder="설명을 입력하세요."
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          <InputField
            id={cookTime}
            label="조리 시간"
            value={cookTime}
            placeholder="(분) 입력"
            required
            onChange={(e) => setCookTime(e.target.value)}
          />
          <SelectField
            id={difficulty}
            label="조리 시간"
            value={difficulty}
            options={[
              { value: "easy", label: "쉬움" },
              { value: "medium", label: "중간" },
              { value: "hard", label: "어려움" },
            ]}
            onChange={setDifficulty}
          />
          <CardAction>
            <button type="submit" disabled={loading}>
              {loading ? "등록 중..." : "등록하기"}
            </button>
          </CardAction>
        </CardContent>
      </Card>
    </form>
  );
}
