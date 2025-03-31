export type Recipe = {
  id: string;
  title: string;
  description: string;
  cook_time: number;
  difficulty: "easy" | "medium" | "hard";
  image_url: string;
};
