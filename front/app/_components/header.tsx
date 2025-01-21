import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            베이킹북
          </Link>
          <div>{/* 검색 */}</div>

          <Link href="/login" scroll={false}>
            로그인
          </Link>
          {/* <Button onClick={openLoginModal}>로그인</Button> */}
        </div>
      </nav>
    </header>
  );
}
