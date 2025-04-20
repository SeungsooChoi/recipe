"use client";

import { useFormStatus } from "react-dom";
import { FormState, Recipe } from "@/types";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  ChangeEvent,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import { supabase } from "@/lib/supabase.client";
import Image from "next/image";

type Props = {
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
  submitText: string;
  recipe?: Recipe;
};

export default function RecipeForm({ action, submitText, recipe }: Props) {
  const [state, formAction] = useActionState(action, null);
  const [imageUrl, setImageUrl] = useState<string | null>(
    recipe?.image_url || null
  );
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { pending } = useFormStatus();
  const imageUrlInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploadedFile(file);
  };

  // 파일 변경시 업로드
  useEffect(() => {
    const uploadFile = async () => {
      if (!uploadedFile) return;

      setLoading(true);
      try {
        // 파일명에서 확장자 추출
        const fileExtension = uploadedFile.name.split(".").pop();

        // 고유한 파일명 생성 (한글 파일명 대신 타임스탬프 사용)
        const fileName = `uploads/${Date.now()}.${fileExtension}`;

        // supabase storage 업로드
        const { data, error } = await supabase.storage
          .from("images")
          .upload(fileName, uploadedFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) {
          console.error("이미지 업로드 실패:", error);
          return;
        }

        // Get the public URL for the uploaded file
        const uploadedImageUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${data.path}`;
        setImageUrl(uploadedImageUrl);

        // Set the value of the hidden input
        if (imageUrlInputRef.current) {
          imageUrlInputRef.current.value = uploadedImageUrl;
        }
      } catch (error) {
        console.error("파일 업로드 중 오류:", error);
      } finally {
        setLoading(false);
      }
    };

    uploadFile();
  }, [uploadedFile]);

  return (
    <form action={formAction}>
      <div className="grid w-full items-center gap-1.5 mb-2">
        <Label htmlFor="title">레시피 제목</Label>
        <Input
          id="title"
          name="title"
          value={recipe?.title}
          placeholder="레시피 제목을 입력하세요."
          required
        />
      </div>

      <div className="grid w-full items-center gap-1.5 mb-2">
        <Label htmlFor="description">설명</Label>
        <Textarea
          id="description"
          name="description"
          value={recipe?.description}
          placeholder="레시피 설명을 입력하세요."
          required
        />
      </div>

      <div className="grid w-full items-center gap-1.5 mb-2">
        <Label htmlFor="imageFile">이미지</Label>
        <Input
          id="imageFile"
          type="file"
          value={recipe?.image_url}
          placeholder="레시피 이미지를 추가하세요."
          onChange={handleFileChange}
          required
        />
        {/* 이미지 url 올리기 위한 input 숨김 */}
        <input
          type="hidden"
          name="image_url"
          ref={imageUrlInputRef}
          defaultValue={imageUrl || ""}
        />
        {loading && <p>이미지 업로드 중...</p>}
        {imageUrl && !loading && (
          <Image
            src={imageUrl}
            alt="Uploaded Image"
            width={300}
            height={200}
            className="rounded-md object-cover"
          />
        )}
      </div>

      <div className="grid w-full items-center gap-1.5 mb-2">
        <Label htmlFor="cook_time">요리 시간</Label>
        <Input
          id="cook_time"
          name="cook_time"
          value={recipe?.cook_time}
          placeholder="(분) 입력"
          required
        />
      </div>

      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="difficulty">난이도</Label>
        <Select value={recipe?.difficulty} name="difficulty">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="선택하세요" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easy">쉬움</SelectItem>
            <SelectItem value="medium">중간</SelectItem>
            <SelectItem value="hard">어려움</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
      <Button type="submit" disabled={pending}>
        {pending ? "처리 중..." : submitText}
      </Button>
    </form>
  );
}
