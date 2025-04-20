"use server";

import { supabase } from "@/lib/supabase.client";
import { FormState } from "@/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createRecipe(prevState:FormState, formData:FormData):Promise<FormState>{
  const title = formData.get('title');
  const description = formData.get('description');
  const image_url = formData.get('image_url');
  const cook_time = Number(formData.get('cook_time'));
  const difficulty = formData.get('difficulty');

   // Validate inputs
   if (!title || !description || !image_url || !cook_time || !difficulty) {
    return { error: '모든 필드를 입력해주세요.' };
  }

  console.log(image_url)

  const {error} = await supabase.from("recipes").insert({
    title,
    description,
    image_url,
    cook_time,
    difficulty
  });

  if(error){
    console.log(error)
    return {error:'레시피 추가 중 오류가 발생했습니다.'}
  }
  
  revalidatePath('/recipes');
  redirect('/recipes');
}