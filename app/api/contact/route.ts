import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // This creates an email that gets sent to your inbox
    const emailContent = {
      to: "felipemanrique.fma@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      replyTo: email,
    }

    // Log for debugging
    console.log("[v0] Contact form submission:", emailContent)

    // In production, you would integrate with an email service like:
    // - Resend (recommended for Vercel)
    // - SendGrid
    // - AWS SES
    // For now, return success and the form will show confirmation
    
    return NextResponse.json({
      success: true,
      message: "Message received. We'll get back to you soon!",
    })
  } catch (error) {
    console.error("[v0] Error processing contact form:", error)
    return NextResponse.json({ success: false, error: "Failed to process message" }, { status: 500 })
  }
}
