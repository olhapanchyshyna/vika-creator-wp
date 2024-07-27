import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const sendToTelegram = async (message: string) => {
  const response = await fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to send message to Telegram: ${response.statusText}`);
  }

  return response.json();
};

export async function POST(req: NextRequest) {
  try {
    const { phone, email, telegram } = await req.json();

    if (!phone && !email && !telegram) {
      return NextResponse.json({ message: "At least one field (phone, email, or telegram) must be filled" }, { status: 400 });
    }

    const message = `Данні з форми "ЯК ЕКСПЕРТУ ЗНАЙТИ СВІЙ НАПРЯМОК":\nТелефон: ${phone}\nEmail: ${email} \nТелеграм акаунт: ${telegram} `;

    await sendToTelegram(message);
    return NextResponse.json({ message: "Data sent to Telegram successfully" });
  } catch (error) {
    console.error("Failed to send data to Telegram:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
