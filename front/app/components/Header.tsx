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
            베이킹북
          </Link>
          <div>{/* 검색색 */}</div>
          <Link href="/login">
            <button>로그인</button>
          </Link>
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
            <Link href="/login" className="block">
              <button className="w-full">로그인</button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
