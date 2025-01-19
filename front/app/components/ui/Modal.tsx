import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean; // 모달 표시 여부
  onClose: () => void; // 모달 닫기 함수
  children: ReactNode; // 모달 내부에 표시할 콘텐츠
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null; // 모달이 열리지 않은 상태에서는 렌더링하지 않음

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white dark:bg-neutral-dark rounded-lg shadow-lg p-6 w-96 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-neutral-dark dark:text-neutral-light"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
