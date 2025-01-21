"use client";

import Login from "@/app/_components/login";
import Modal from "@/app/_components/modal";
import { useRouter } from "next/navigation";

export default function LoginModal() {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };

  return (
    <Modal title="로그인" onClose={onClose}>
      <Login />
    </Modal>
  );
}
