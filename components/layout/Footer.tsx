import Link from "next/link"

export default function Footer() {
  return (
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
  )
}
