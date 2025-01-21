import { useCallback } from "react";
import Button from "./button";
import useInput from "../_lib/hooks/useInput";

export default function Login() {
  const [email, onChangeEmail] = useInput<string>("");
  const [password, onChangePassword] = useInput<string>("");

  const onSubmitForm = useCallback(() => {
    // dispatch
  }, [email, password]);

  return (
    <>
      <form>
        <div className="mb-4">
          <label
            htmlFor="user-email"
            className="block text-sm font-medium text-neutral-dark dark:text-neutral-light"
          >
            이메일
          </label>
          <input
            name="user-email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            className="w-full px-4 py-2 mt-1 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="이메일을 입력하세요"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="user-password"
            className="block text-sm font-medium text-neutral-dark dark:text-neutral-light"
          >
            비밀번호
          </label>
          <input
            name="user-password"
            type="password"
            value={password}
            onChange={onChangePassword}
            className="w-full px-4 py-2 mt-1 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
        <div>
          <Button className="w-full" type="submit" onClick={onSubmitForm}>
            로그인
          </Button>
        </div>
      </form>
    </>
  );
}
