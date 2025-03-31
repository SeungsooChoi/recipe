import { supabase } from "@/lib/supabase.client";
import RecipeCard from "../components/RecipeCard";

export default async function Recipes() {
  const { data, error } = await supabase.from("recipes").select("*");

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <ul>
        {data.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </ul>
    </div>
  );
}
