import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
          <>
            <Card key={recipe.id} className="w-[350px]">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">ss</div>
                    <div className="flex flex-col space-y-1.5">dd</div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">dd</CardFooter>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
}
