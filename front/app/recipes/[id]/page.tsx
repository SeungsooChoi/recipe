import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase.client";
import Link from "next/link";
import { deleteRecipe } from "./actions";
import RecipeDeleteForm from "@/app/components/RecipeDeleteForm";

export default async function RecipeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: recipe, error } = await supabase
    .from("recipes")
    .select("*")
    .eq("id", id)
    .single(); // 단일 레시피 가져오기

  if (error || !recipe) {
    return <div>레시피를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
      <p className="text-muted-foreground mb-2">{recipe.description}</p>
      <p className="text-sm text-muted-foreground mb-4">
        난이도: {recipe.difficulty} / 요리 시간: {recipe.cook_time}분
      </p>

      <div className="flex gap-2">
        <Link href={`/recipes/${recipe.id}/edit`}>
          <Button variant="outline">수정</Button>
        </Link>
        <RecipeDeleteForm id={recipe.id} action={deleteRecipe} />
      </div>
    </div>
  );
}
