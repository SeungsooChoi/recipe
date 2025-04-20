import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Recipe } from "@/types";
import Image from "next/image";
import Link from "next/link";
import noImages from "../../public/assets/no_image.png";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/recipes/${recipe.id}`} className="group">
      <Card className="py-0 mb-2">
        {recipe.image_url ? (
          <Image
            src={recipe.image_url}
            alt={recipe.title}
            className="w-full h-52 transition-transform duration-300 rounded-t-xl object-fill"
            width={300}
            height={200}
          />
        ) : (
          <Image
            src={noImages}
            alt={recipe.title}
            className="w-full h-52 transition-transform duration-300 rounded-t-xl object-fill"
            width={300}
            height={200}
          />
        )}
        <CardHeader>
          <CardTitle>{recipe.title}</CardTitle>
          <CardDescription>{recipe.description}</CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <p>⏱ {recipe.cook_time}분</p>
          <p>🌟 {recipe.difficulty}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
