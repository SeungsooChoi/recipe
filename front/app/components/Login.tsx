import Button from "./ui/Button";

export default function Login() {
  return (
    <>
      <h2 className="text-xl font-semibold text-primary dark:text-neutral-light mb-4">
        로그인
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-dark dark:text-neutral-light"
          >
            이메일
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 mt-1 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="이메일을 입력하세요"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-neutral-dark dark:text-neutral-light"
          >
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 mt-1 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="비밀번호를 입력하세요"
            required
          />
        </div>
        <div>
          <Button className="w-full" type="submit">
            로그인
          </Button>
        </div>
      </form>
    </>
  );
}
