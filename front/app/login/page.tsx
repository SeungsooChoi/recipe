export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[400px] border rounded-lg p-6 shadow">
        <h2 className="text-xl font-bold mb-4">로그인</h2>
        {/* 로그인 폼 */}
        <form>
          <input
            type="email"
            placeholder="이메일"
            className="w-full mb-2 p-2 border rounded"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full mb-2 p-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
