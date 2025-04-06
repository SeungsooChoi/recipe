import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent } from "react";

type TextareaFieldProps = {
  id?: string;
  label: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};
export default function TextareaField({
  id,
  label,
  value,
  placeholder,
  required,
  onChange,
}: TextareaFieldProps) {
  return (
    <div className="grid w-full items-center gap-1.5 mb-2">
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        id={id}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
}
