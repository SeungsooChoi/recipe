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
            className="w-full h-48 object-cover transition-transform duration-300 rounded-xl"
            width={300}
            height={300}
          />
        ) : (
          <span>이미지가 없습니다.</span>
        )}
        <CardHeader>
          <CardTitle>{recipe.title}</CardTitle>
          <CardDescription>{recipe.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>⏱ {recipe.cook_time}분</p>
          <p>🌟 {recipe.difficulty}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
