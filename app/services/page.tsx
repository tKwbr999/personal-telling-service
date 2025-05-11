import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Services() {
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
            <Link href="/services" className="text-gray-600 hover:text-indigo-700 font-medium">
              鑑定メニュー
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-indigo-700">
              サービスについて
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-grow px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">鑑定メニュー</h1>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-indigo-700 mb-3">総合鑑定</h2>
              <p className="text-gray-600 mb-4">
                氏名、生年月日、生まれた時間、性別から導き出される先天的な資質や運命のパターンを読み解きます。
                この鑑定は人生で一度だけ受けることができます。
              </p>
              <div className="bg-indigo-50 p-3 rounded-md mb-4">
                <p className="text-sm text-indigo-800">
                  ※ 総合鑑定は他の鑑定メニューの基礎となる重要な鑑定です。他のメニューをご利用になる場合は、
                  まず総合鑑定をお受けください。
                </p>
              </div>
              <div className="flex justify-between items-end mt-4">
                <span className="text-2xl font-bold text-gray-900">¥5,000</span>
                <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                  <Link href="/services/comprehensive">鑑定を受ける</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-500 mb-3">3年間予測鑑定</h2>
              <p className="text-gray-600 mb-4">
                現在から3年間の運勢を月ごとに詳細に予測します。キャリア、人間関係、健康などの分野における
                チャンスと課題が明らかになります。
              </p>
              <div className="bg-gray-200 p-3 rounded-md mb-4">
                <p className="text-sm text-gray-700">※ このメニューは総合鑑定を受けた方のみご利用いただけます。</p>
              </div>
              <div className="flex justify-between items-end mt-4">
                <span className="text-2xl font-bold text-gray-500">¥3,000</span>
                <Button className="bg-gray-400 cursor-not-allowed" disabled>
                  準備中
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-white rounded-lg p-6 shadow-md border border-gray-200 mt-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">ご利用の流れ</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <div className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>総合鑑定を申し込む</strong> - お客様の情報を入力し、決済を完了させます。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>鑑定結果の受け取り</strong> -
                    通常1〜2営業日以内に、鑑定結果のPDFがマイページにアップロードされます。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>追加の鑑定メニュー</strong> -
                    総合鑑定後、より詳細な鑑定メニューをご利用いただけるようになります。
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </main>

      <footer className="w-full bg-gray-50 border-t border-gray-200 py-8 mt-12">
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
