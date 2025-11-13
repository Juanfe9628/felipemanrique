import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Create mailto link that will open the user's email client
    const subject = encodeURIComponent(`New Contact Form Message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    const mailtoLink = `mailto:felipemanrique.fma@gmail.com?subject=${subject}&body=${body}`

    // In a real application, you would send an actual email here using a service like:
    // - SendGrid
    // - AWS SES
    // - Resend
    // - Nodemailer

    // For now, we'll just log it and return success
    console.log("[v0] Contact form submission:", { name, email, message })

    return NextResponse.json({
      success: true,
      mailtoLink, // You could use this on the frontend if needed
    })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ success: false, error: "Failed to process message" }, { status: 500 })
  }
}
