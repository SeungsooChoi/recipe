import RecipeEditForm from "@/app/components/RecipeEditForm";
import { supabase } from "@/lib/supabase.client";

export default async function RecipeEdit({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .eq("id", id)
    .single(); // 단일 레시피 가져오기

  if (error || !data) {
    return <>레시피를 찾을 수 없습니다.</>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">레시피 수정</h1>
      <RecipeEditForm recipe={data} />
    </div>
  );
}
