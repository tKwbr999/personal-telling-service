import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PaymentSuccess() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full py-6 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-indigo-700">
            占術鑑定サービス
          </Link>
        </div>
      </header>

      <main className="container mx-auto flex-grow px-4 py-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
          <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-4">決済が完了しました</h1>

          <p className="text-gray-600 mb-8">
            ありがとうございます。鑑定申し込みを受け付けました。鑑定結果は通常1〜2営業日以内にマイページにアップロードされます。
          </p>

          <div className="space-y-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 w-full" asChild>
              <Link href="/mypage">マイページへ</Link>
            </Button>

            <Button variant="outline" className="w-full" asChild>
              <Link href="/">トップページへ</Link>
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              ご不明な点がございましたら、
              <Link href="/contact" className="text-indigo-600 hover:text-indigo-700">
                お問い合わせ
              </Link>
              からご連絡ください。
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
