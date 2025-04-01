import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent } from "react";

type FormFieldProps = {
  id?: string;
  label: string;
  type?: "text" | "textarea" | "file" | "number" | "select";
  value?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectChange?: (value: string) => void;
  options?: { value: string; label: string }[]; // select 옵션 리스트
};
export default function FormField({
  id,
  label,
  type = "text",
  value,
  placeholder,
  required,
  onChange,
  onSelectChange,
  options,
}: FormFieldProps) {
  return (
    <div className="grid w-full items-center gap-1.5 mb-2">
      <Label htmlFor={id}>{label}</Label>
      {type === "textarea" ? (
        <Textarea
          id={id}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      ) : type === "file" ? (
        <Input
          id={id}
          type="file"
          accept="image/*"
          required={required}
          onChange={onChange as (e: ChangeEvent<HTMLInputElement>) => void}
        />
      ) : type === "select" ? (
        <Select
          value={value}
          required={required}
          onValueChange={onSelectChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Input
          id={id}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      )}
    </div>
  );
}
