"use client";

import { ReactNode } from "react";

interface ModalProps {
  title: string;
  onClose: () => void; // 모달 닫기 함수
  children: ReactNode; // 모달 내부에 표시할 콘텐츠
}

export default function Modal({ title, onClose, children }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white dark:bg-neutral-dark rounded-lg shadow-lg p-6 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-primary dark:text-neutral-light">
            {title}
          </h2>
          <button
            className="text-2xl text-neutral-dark dark:text-neutral-light"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
