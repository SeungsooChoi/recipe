import Image from "next/image";
import { Recipe } from "./types";

// const fetchRecipes = async () => {
//   try {
//     const response = await fetch("http://localhost:5000/api/recipes", {
//       cache: "no-store",
//     });
//     return await response.json();
//   } catch (error) {
//     console.error(error);
//   }
// };

export default async function Home() {
  // const response = await fetchRecipes();
  // const recipes: Recipe[] = response.data.recipes;
  const recipes: Recipe[] = [];

  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="">
            <div>
              {recipe.imageUrl ? (
                <Image
                  src={recipe.imageUrl}
                  alt="썸네일"
                  width={200}
                  height={200}
                  className="shadow-xl rounded-md"
                />
              ) : null}
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-md font-medium">{recipe.title}</p>
              <p className="font-normal text-zinc-500">{recipe.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
