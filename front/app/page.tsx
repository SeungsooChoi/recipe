// 임시 데이터
const recipes = [
  { id: 1, title: "초코칩 쿠키", difficulty: "초급", cookTime: "30분" },
  { id: 2, title: "바나나 브레드", difficulty: "중급", cookTime: "60분" },
  { id: 3, title: "티라미수", difficulty: "고급", cookTime: "120분" },
];

export default function Home() {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">레시피 목록</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
            <p>난이도: {recipe.difficulty}</p>
            <p>조리 시간: {recipe.cookTime}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
