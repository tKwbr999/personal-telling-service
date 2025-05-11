import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  // In a real application, you would check if user is logged in here
  const isLoggedIn = false

  return (
    <header className="w-full py-4 px-4 bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="占術鑑定サービス" width={40} height={40} className="mr-2" />
          <span className="text-xl font-bold text-indigo-700">占術鑑定サービス</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-indigo-700">
            ホーム
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-indigo-700">
            鑑定メニュー
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-indigo-700">
            サービスについて
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex gap-4">
          {isLoggedIn ? (
            <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link href="/mypage">マイページ</Link>
            </Button>
          ) : (
            <>
              <Button variant="outline" className="hidden md:inline-flex" asChild>
                <Link href="/login">ログイン</Link>
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/register">新規登録</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button - in a real app, you would implement a mobile menu */}
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
