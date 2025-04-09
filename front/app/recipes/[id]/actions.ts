'use server';

import { supabase } from "@/lib/supabase.client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteRecipe(formData: FormData) {
  const id = formData.get('id') as string;
  if (!id) return;

  await supabase.from('recipes').delete().eq('id', id);
  revalidatePath('/recipes');
  redirect('/recipes');
}
