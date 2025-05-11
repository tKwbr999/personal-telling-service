import { NextResponse } from "next/server"
import PDFDocument from "pdfkit"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, nameRomaji, birthdate, birthtime, gender, readingType } = body

    // Validate the required fields
    if (!name || !nameRomaji || !birthdate || !birthtime || !gender || !readingType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create a new PDF document
    const doc = new PDFDocument({
      size: "A4",
      info: {
        Title: `${readingType === "comprehensive" ? "総合鑑定" : "3年間予測鑑定"} - ${name}様`,
        Author: "占術鑑定サービス",
      },
      margin: 50,
    })

    // Set up response
    const chunks: Uint8Array[] = []

    // Collect PDF data chunks
    doc.on("data", (chunk: Uint8Array) => {
      chunks.push(chunk)
    })

    // In a real application, you would create a PDF with real fortune-telling content
    // This is just a placeholder

    // Add content to the PDF
    doc
      .font("Helvetica-Bold")
      .fontSize(24)
      .text(`${readingType === "comprehensive" ? "総合鑑定" : "3年間予測鑑定"} レポート`, {
        align: "center",
      })
      .moveDown(1)

    doc
      .font("Helvetica")
      .fontSize(14)
      .text(`お名前: ${name}`, { continued: true })
      .text(`(${nameRomaji})`, { align: "right" })
      .moveDown(0.5)

    doc.text(`生年月日: ${new Date(birthdate).toLocaleDateString("ja-JP")}`).moveDown(0.5)

    doc.text(`生まれた時間: ${birthtime}`).moveDown(0.5)

    doc.text(`性別: ${gender === "male" ? "男性" : gender === "female" ? "女性" : "その他"}`).moveDown(2)

    // Add a divider
    doc
      .moveTo(50, doc.y)
      .lineTo(doc.page.width - 50, doc.y)
      .stroke()
      .moveDown(1)

    // Add fortune content (placeholder)
    doc.font("Helvetica-Bold").fontSize(18).text("鑑定結果", { align: "center" }).moveDown(1)

    doc
      .font("Helvetica")
      .fontSize(12)
      .text(
        "このレポートは、あなたの氏名、生年月日、生まれた時間、性別から導き出される運命のパターンを分析したものです。",
        {
          align: "justify",
        },
      )
      .moveDown(0.5)

    // Add more content based on the reading type
    if (readingType === "comprehensive") {
      doc
        .text(
          "総合鑑定は、あなたの先天的な資質や才能、性格の特徴を明らかにします。この鑑定結果は、一生涯変わることのない本質的な部分を表しています。",
          {
            align: "justify",
          },
        )
        .moveDown(1)

      // Sections of the report
      const sections = [
        { title: "基本的な性格", content: "..." },
        { title: "先天的な才能と資質", content: "..." },
        { title: "人間関係における傾向", content: "..." },
        { title: "キャリアと適性", content: "..." },
        { title: "人生における課題と成長", content: "..." },
      ]

      sections.forEach((section) => {
        doc.font("Helvetica-Bold").fontSize(14).text(section.title).moveDown(0.5)

        doc
          .font("Helvetica")
          .fontSize(12)
          .text("この部分には実際の鑑定内容が入ります。この例はダミーテキストです。", {
            align: "justify",
          })
          .moveDown(1)
      })
    } else {
      doc
        .text(
          "3年間予測鑑定は、これからの3年間の運勢を月ごとに予測したものです。この内容を参考に、チャンスを活かし、課題に備えることができます。",
          {
            align: "justify",
          },
        )
        .moveDown(1)

      // Add prediction for each year and month
      const years = [1, 2, 3]

      years.forEach((year) => {
        doc.font("Helvetica-Bold").fontSize(16).text(`${year}年目の運勢`).moveDown(0.5)

        for (let month = 1; month <= 12; month++) {
          doc.font("Helvetica-Bold").fontSize(14).text(`${month}月`)

          doc
            .font("Helvetica")
            .fontSize(12)
            .text("この部分には実際の鑑定内容が入ります。この例はダミーテキストです。", {
              align: "justify",
            })
            .moveDown(0.5)
        }

        doc.moveDown(1)
      })
    }

    // Add footer
    const pageCount = doc.bufferedPageRange().count
    for (let i = 0; i < pageCount; i++) {
      doc.switchToPage(i)

      // Add page number
      doc
        .font("Helvetica")
        .fontSize(10)
        .text(`${i + 1}/${pageCount}`, doc.page.width - 100, doc.page.height - 50, { align: "right" })

      // Add copyright text
      doc
        .font("Helvetica")
        .fontSize(10)
        .text(`© ${new Date().getFullYear()} 占術鑑定サービス All rights reserved.`, 50, doc.page.height - 50)
    }

    // End the document
    doc.end()

    // Wait for the PDF to be fully generated
    return new Promise<NextResponse>((resolve) => {
      doc.on("end", () => {
        const pdfBuffer = Buffer.concat(chunks)
        const pdfBase64 = pdfBuffer.toString("base64")

        resolve(NextResponse.json({ pdf: pdfBase64 }))
      })
    })
  } catch (error) {
    console.error("PDF generation error:", error)
    return NextResponse.json({ error: "An error occurred generating the PDF" }, { status: 500 })
  }
}
