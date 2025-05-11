import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MyPage() {
  // 実際のアプリケーションでは、ここでユーザー情報や鑑定履歴を取得します
  const mockUser = {
    name: "山田 太郎",
    email: "yamada@example.com",
  }

  const mockReadings = [
    {
      id: "r1",
      type: "comprehensive",
      typeName: "総合鑑定",
      date: "2023-04-15",
      time: "14:30",
      pdfUrl: "/reports/comprehensive-sample.pdf",
    },
  ]

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
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">マイページ</h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">ユーザー情報</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">お名前</p>
                <p className="text-lg font-medium">{mockUser.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">メールアドレス</p>
                <p className="text-lg font-medium">{mockUser.email}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">鑑定履歴</h2>

            {mockReadings.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        鑑定名
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        鑑定日時
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        レポート
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockReadings.map((reading) => (
                      <tr key={reading.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{reading.typeName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{reading.date}</div>
                          <div className="text-sm text-gray-500">{reading.time}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <Button variant="outline" className="text-indigo-600 hover:text-indigo-700" asChild>
                            <a href={reading.pdfUrl} target="_blank" rel="noopener noreferrer">
                              PDFをダウンロード
                            </a>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">鑑定履歴がまだありません</p>
                <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                  <Link href="/services">鑑定メニューを見る</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="mt-8 bg-indigo-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">ご利用可能な鑑定メニュー</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-4 border border-indigo-100">
                <h3 className="text-lg font-medium text-indigo-700 mb-2">3年間予測鑑定</h3>
                <p className="text-gray-600 text-sm mb-4">
                  現在から3年間の運勢を月ごとに詳細に予測します。キャリア、人間関係、健康などの分野におけるチャンスと課題が明らかになります。
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-900">¥3,000</span>
                  <Button className="bg-gray-400 cursor-not-allowed" disabled>
                    準備中
                  </Button>
                </div>
              </div>
            </div>
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
