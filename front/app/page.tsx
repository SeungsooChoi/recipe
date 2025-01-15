import * as Avatar from "@radix-ui/react-avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// 임시 데이터
const recipes = [
  {
    id: 1,
    title: "초코칩 쿠키",
    imageUrl: "https://picsum.photos/300/300",
    difficulty: "초급",
    cookTime: "30분",
  },
  {
    id: 2,
    title: "바나나 브레드",
    imageUrl: "https://picsum.photos/300/300",
    difficulty: "중급",
    cookTime: "60분",
  },
  {
    id: 3,
    title: "티라미수",
    imageUrl: "https://picsum.photos/300/300",
    difficulty: "고급",
    cookTime: "120분",
  },
];

export default function Home() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">레시피 목록</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-video relative overflow-hidden">
              <Avatar.Root className="w-full h-full">
                <Avatar.Image
                  src={recipe.imageUrl}
                  className="w-full h-full object-cover"
                />
                <Avatar.Fallback className="w-full h-full bg-gray-100" />
              </Avatar.Root>
            </div>
            <CardHeader>
              <h3 className="text-lg font-semibold">{recipe.title}</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  난이도: {recipe.difficulty}
                </p>
                <p className="text-sm text-gray-600">
                  조리 시간: {recipe.cookTime}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
