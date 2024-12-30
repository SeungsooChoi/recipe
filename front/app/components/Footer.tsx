import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">
              베이킹 레시피 커뮤니티
            </h3>
            <p className="text-sm text-gray-600">
              맛있는 베이킹 레시피를 공유하고 탐색하세요
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">빠른 링크</h4>
            <ul className="text-sm">
              <li className="mb-2">
                <Link
                  href="/recipes"
                  className="text-gray-600 hover:text-gray-900"
                >
                  레시피 탐색
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/recipes/new"
                  className="text-gray-600 hover:text-gray-900"
                >
                  레시피 등록
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  소개
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-md font-semibold mb-2">문의하기</h4>
            <p className="text-sm text-gray-600">이메일</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} 베이킹 레시피 커뮤니티. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
