import { Recipe } from "./recipe";

export type FormState = {
  error?: string;
  success?: boolean;
  data?: Recipe;
} | null;
