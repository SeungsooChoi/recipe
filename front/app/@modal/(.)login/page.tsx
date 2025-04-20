"use client";

import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();

  const closeModal = () => {
    router.back(); // 모달 닫기
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-[400px]"
        onClick={(e) => e.stopPropagation()} // 모달 바깥 클릭 시 닫힘
      >
        <h2 className="text-xl font-bold mb-4">로그인</h2>
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
        <button
          onClick={closeModal}
          className="mt-4 w-full text-sm text-gray-500 hover:underline"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
