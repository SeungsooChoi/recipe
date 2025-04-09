import RecipeForm from "@/app/components/RecipeForm";
import { createRecipe } from "./actions";

export default function UploadPage() {
  return <RecipeForm action={createRecipe} submitText="레시피 추가" />;
}
