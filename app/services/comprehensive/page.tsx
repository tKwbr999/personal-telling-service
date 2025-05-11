import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ComprehensiveReading() {
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

      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 my-8">
          <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">総合鑑定フォーム</h1>

          <div className="bg-indigo-50 p-4 rounded-md mb-8 text-indigo-800">
            <p className="font-medium">
              総合鑑定は、お客様の氏名、生年月日、生まれた時間、性別から導き出される先天的な資質や運命のパターンを読み解く鑑定サービスです。
              この鑑定は人生で一度だけ受けることができます。
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  氏名（漢字）
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="例：山田 太郎"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="nameRomaji" className="block text-sm font-medium text-gray-700">
                  氏名（ローマ字）
                </label>
                <input
                  type="text"
                  id="nameRomaji"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="例：YAMADA TARO"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
                  生年月日
                </label>
                <input
                  type="date"
                  id="birthdate"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="birthtime" className="block text-sm font-medium text-gray-700">
                  生まれた時間
                </label>
                <input
                  type="time"
                  id="birthtime"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                  性別
                </label>
                <select
                  id="gender"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">選択してください</option>
                  <option value="male">男性</option>
                  <option value="female">女性</option>
                  <option value="other">その他</option>
                </select>
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md">
                鑑定を申し込む（¥5,000）
              </Button>
              <p className="text-sm text-gray-500 mt-2 text-center">※ 申し込み後、決済画面に移動します</p>
            </div>
          </form>
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
