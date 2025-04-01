"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="bg-white shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* 로고 */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="ml-2 text-xl font-bold text-black">
                bake-it
              </Link>
            </div>
          </div>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden lg:flex space-x-4">
            <input
              type="text"
              placeholder="레시피 검색"
              className="border px-2 py-1 rounded text-sm"
            />
          </nav>

          {/* 데스크톱 액션 버튼 */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/recipes" className="text-gray-600 hover:text-black">
              레시피
            </Link>
            <Link
              href="/recipes/upload"
              className="text-gray-600 hover:text-black"
            >
              레시피 등록
            </Link>
            <button className="bg-black text-white px-3 py-1 rounded text-sm">
              로그인
            </button>
          </div>

          {/* 모바일 메뉴 토글 버튼 */}
          <div className="lg:hidden flex">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-black focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-gray-600 hover:text-black block">
                레시피
              </a>
              <a href="#" className="text-gray-600 hover:text-black block">
                레시피 등록
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
