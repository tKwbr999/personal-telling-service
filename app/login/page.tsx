import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full py-6 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-700">
            占術鑑定サービス
          </Link>
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
        </div>
      </header>

      <main className="container mx-auto flex-grow px-4 py-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">ログイン</h1>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 border-2 border-gray-300 py-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Googleでログイン
            </Button>
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              アカウントをお持ちでない方は、
              <Link href="/register" className="text-indigo-600 hover:text-indigo-700 font-medium">
                新規登録
              </Link>
              からご登録ください。
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              ログインすることで、
              <Link href="/terms" className="text-indigo-600 hover:text-indigo-700">
                利用規約
              </Link>
              および
              <Link href="/privacy" className="text-indigo-600 hover:text-indigo-700">
                プライバシーポリシー
              </Link>
              に同意したものとみなされます。
            </p>
          </div>
        </div>
      </main>

      <footer className="w-full bg-gray-50 border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-indigo-700">占術鑑定サービス</h2>
              <p className="text-sm text-gray-600 mt-1">あなたの人生を読み解く鑑定サービス</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link href="/terms" className="text-sm text-gray-600 hover:text-indigo-700">
                利用規約
              </Link>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-indigo-700">
                プライバシーポリシー
              </Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-indigo-700">
                お問い合わせ
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} 占術鑑定サービス All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
