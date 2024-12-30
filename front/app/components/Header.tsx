"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            베이킹 레시피
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/recipes">
              <button>레시피 검색</button>
            </Link>
            <Link href="/recipes/new">
              <button>레시피 등록</button>
            </Link>
            <Link href="/login">
              <button>로그인</button>
            </Link>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* {isMenuOpen ? <X size={24} /> : <Menu size={24} />} */}
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 space-y-2 md:hidden">
            <Link href="/recipes" className="block">
              <button className="w-full">레시피 탐색</button>
            </Link>
            <Link href="/recipes/new" className="block">
              <button className="w-full">레시피 등록</button>
            </Link>
            <Link href="/login" className="block">
              <button className="w-full">로그인</button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
