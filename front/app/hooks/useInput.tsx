import { useState, useCallback, ChangeEvent } from "react";

type UseInputReturn<T> = [
  value: T,
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
];

function useInput<T>(initialValue: T): UseInputReturn<T> {
  const [value, setValue] = useState<T>(initialValue);
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setValue(e.target.value as T);
    },
    []
  );

  return [value, onChange];
}

export default useInput;
