"use client";

import { useFormStatus } from "react-dom";
import { FormState, Recipe } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";

type Props = {
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
  submitText: string;
  recipe?: Recipe;
};

export default function RecipeForm({ action, submitText, recipe }: Props) {
  const [state, formAction] = useActionState(action, null);
  const { pending } = useFormStatus();

  return (
    <form action={formAction}>
      <div className="grid w-full items-center gap-1.5 mb-2">
        <Label htmlFor="title">레시피 제목</Label>
        <Input
          id="title"
          name="title"
          value={recipe?.title}
          placeholder="레시피 제목을 입력하세요."
          required
        />
      </div>

      <div className="grid w-full items-center gap-1.5 mb-2">
        <Label htmlFor="description">설명</Label>
        <Textarea
          id="description"
          name="description"
          value={recipe?.description}
          placeholder="레시피 설명을 입력하세요."
          required
        />
      </div>

      <div className="grid w-full items-center gap-1.5 mb-2">
        <Label htmlFor="image_url">이미지</Label>
        <Input
          id="image_url"
          name="image_url"
          type="file"
          value={recipe?.image_url}
          placeholder="레시피 이미지를 추가하세요."
          required
        />
      </div>

      <div className="grid w-full items-center gap-1.5 mb-2">
        <Label htmlFor="cook_time">요리 시간</Label>
        <Input
          id="cook_time"
          name="cook_time"
          value={recipe?.cook_time}
          placeholder="(분) 입력"
          required
        />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="difficulty">난이도</Label>
        <Select value={recipe?.difficulty} name="difficulty">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="선택하세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easy">쉬움</SelectItem>
            <SelectItem value="medium">중간</SelectItem>
            <SelectItem value="hard">어려움</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
      <Button type="submit" disabled={pending}>
        {pending ? "처리 중..." : submitText}
      </Button>
    </form>
  );
}
