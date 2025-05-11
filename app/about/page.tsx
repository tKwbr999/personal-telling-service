import Link from "next/link"

export default function About() {
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
            <Link href="/about" className="text-gray-600 hover:text-indigo-700 font-medium">
              サービスについて
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">サービスについて</h1>

          <section className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">占術鑑定サービスとは</h2>
            <div className="prose prose-indigo max-w-none">
              <p className="text-gray-700 mb-4">
                占術鑑定サービスは、古来より伝わる占術と現代の科学的アプローチを融合させた鑑定サービスです。
                お客様の氏名、生年月日、生まれた時間、性別などの情報から、生まれ持った資質や才能、人生のパターンを読み解きます。
              </p>
              <p className="text-gray-700 mb-4">
                当サービスの鑑定は、単なる占いではなく、お客様の人生における選択の指針となる情報を提供することを目的としています。
                運命は完全に決まったものではなく、自らの選択によって道が開かれていくものです。
                私たちは、お客様がより良い選択をするための参考情報を提供します。
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">鑑定の特徴</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">総合鑑定</h3>
                <p className="text-gray-700 mb-3">
                  お客様の氏名、生年月日、生まれた時間、性別から導き出される先天的な資質や運命のパターンを読み解きます。
                  この鑑定は人生で一度だけ受けることができます。
                </p>
                <p className="text-gray-700">※ 総合鑑定は他の鑑定メニューの基礎となる重要な鑑定です。</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3年間予測鑑定</h3>
                <p className="text-gray-700 mb-3">
                  現在から3年間の運勢を月ごとに詳細に予測します。キャリア、人間関係、健康などの分野における
                  チャンスと課題が明らかになります。
                </p>
                <p className="text-gray-700">※ このメニューは総合鑑定を受けた方のみご利用いただけます。</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8 mb-10">
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">鑑定プロセス</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center text-indigo-800 font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">ユーザー登録</h3>
                  <p className="text-gray-700">
                    Google認証を使用して、安全かつ簡単にアカウントを作成します。個人情報は厳重に保護されます。
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center text-indigo-800 font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">鑑定申し込み</h3>
                  <p className="text-gray-700">
                    総合鑑定を申し込み、必要な情報（氏名、生年月日、生まれた時間、性別、氏名ローマ字）を入力します。
                    Stripeによる安全な決済システムで支払いを完了させます。
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center text-indigo-800 font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">鑑定結果の受け取り</h3>
                  <p className="text-gray-700">
                    通常1〜2営業日以内に、鑑定結果のPDFがマイページにアップロードされます。
                    マイページにログインすることで、いつでも鑑定結果を確認できます。
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center text-indigo-800 font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">追加鑑定（オプション）</h3>
                  <p className="text-gray-700">
                    総合鑑定を受けた後、より詳細な鑑定メニュー（3年間予測鑑定など）をご利用いただけます。
                    これらの追加鑑定も、マイページから申し込みと結果の確認が可能です。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">よくある質問</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Q: 鑑定結果はどのように届きますか？</h3>
                <p className="text-gray-700">
                  A: 鑑定結果はPDFファイルとして、マイページからいつでもダウンロードいただけます。
                  鑑定結果がアップロードされた際には、登録メールアドレスに通知が送られます。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Q: 総合鑑定を受けられるのは一度だけですか？
                </h3>
                <p className="text-gray-700">
                  A:
                  はい、総合鑑定は人生で一度だけ受けることができます。これは、総合鑑定が先天的な資質や運命のパターンを扱うためです。
                  これらは生涯を通じて変わらないものであるため、一度の鑑定で十分な情報が得られます。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Q: 鑑定結果に納得できない場合はどうすればよいですか？
                </h3>
                <p className="text-gray-700">
                  A: 鑑定結果に関するご質問やご不明点がある場合は、お問い合わせフォームからご連絡ください。
                  専門の鑑定士が丁寧に回答いたします。ただし、鑑定結果自体の変更や返金はできかねますので、ご了承ください。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Q: 個人情報は安全に保護されますか？</h3>
                <p className="text-gray-700">
                  A: はい、お客様の個人情報は厳重に保護されます。当サービスでは、最新のセキュリティ技術を導入し、
                  個人情報の漏洩や不正アクセスを防止しています。また、お預かりした個人情報は鑑定目的以外には使用いたしません。
                </p>
              </div>
            </div>
          </section>
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
