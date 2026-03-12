import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const a = parseFloat(searchParams.get("a") || "");
  const b = parseFloat(searchParams.get("b") || "");
  const op = searchParams.get("op");

  if (isNaN(a) || isNaN(b)) {
    return NextResponse.json({ error: "Invalid numbers" }, { status: 400 });
  }

  switch (op) {
    case "add":
      return NextResponse.json({ result: a + b });
    case "divide":
      if (b === 0) return NextResponse.json({ error: "Divide by zero" }, { status: 400 });
      return NextResponse.json({ result: a / b });
    default:
      return NextResponse.json({ error: "Invalid operation" }, { status: 400 });
  }
}