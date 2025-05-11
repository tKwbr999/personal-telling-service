import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <header className="w-full py-6 px-4 bg-white border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-700">占術鑑定サービス</h1>
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
          <div className="flex gap-4">
            <Button variant="outline" className="hidden md:inline-flex" asChild>
              <Link href="/login">ログイン</Link>
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link href="/register">新規登録</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex-grow px-4 py-8">
        <section className="flex flex-col md:flex-row items-center my-12 gap-8">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              あなたの人生を読み解く<span className="text-indigo-600">総合鑑定</span>
            </h1>
            <p className="text-xl text-gray-600">
              生年月日、生まれた時間、氏名から導き出される運命のパターンを紐解き、
              あなただけの人生の可能性を明らかにします。
            </p>
            <div className="pt-4">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
                <Link href="/services/comprehensive">総合鑑定を受ける</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 bg-gray-100 rounded-lg p-8 shadow-inner">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">総合鑑定について</h3>
              <p className="text-gray-600 mb-4">
                総合鑑定は、お客様の氏名、生年月日、生まれた時間、性別から導き出される先天的な資質や運命のパターンを読み解く鑑定サービスです。
              </p>
              <p className="text-gray-600 mb-4">
                この鑑定は人生で一度だけ受けることができます。なぜなら、受け取るステータスは先天的なもので変えられないからです。
              </p>
              <div className="text-sm text-gray-500 p-3 bg-gray-50 rounded-md">
                <p>※ 総合鑑定を受けた後に、より詳細な未来予測などの追加メニューをご利用いただけます。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">鑑定サービスの特徴</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">先天的な資質を明らかに</h3>
              <p className="text-gray-600">
                生まれ持った才能や性格の特徴を読み解き、あなたの強みや課題を明確にします。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">詳細なPDFレポート</h3>
              <p className="text-gray-600">
                鑑定結果は詳細なPDFレポートとして提供され、いつでもマイページからダウンロードできます。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-indigo-600 mb-3">安全なログイン</h3>
              <p className="text-gray-600">
                Google認証による安全なログインと、Stripeを使用した安全な決済システムを採用しています。
              </p>
            </div>
          </div>
        </section>
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
