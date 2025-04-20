import { supabase } from "@/lib/supabase.client";
import RecipeCard from "../components/RecipeCard";

export default async function Recipes() {
  const { data, error } = await supabase
    .from("recipes")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="mx-auto p-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </ul>
    </div>
  );
}
