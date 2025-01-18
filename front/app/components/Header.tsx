"use client";

import { useState } from "react";
import Modal from "./ui/Modal";
import Login from "./Login";
import Link from "next/link";
import Button from "./ui/Button";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            베이킹북
          </Link>
          <div>{/* 검색 */}</div>
          <Button onClick={() => setIsModalOpen(true)}>로그인</Button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <Login />
          </Modal>
        </div>
      </nav>
    </header>
  );
}
