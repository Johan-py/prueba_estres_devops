import type { NextApiRequest, NextApiResponse } from "next";

type Data = { result?: number; error?: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { a, b, op } = req.query;
  const numA = parseFloat(a as string);
  const numB = parseFloat(b as string);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  switch (op) {
    case "add":
      return res.status(200).json({ result: numA + numB });
    case "divide":
      if (numB === 0) return res.status(400).json({ error: "Divide by zero" });
      return res.status(200).json({ result: numA / numB });
    default:
      return res.status(400).json({ error: "Invalid operation" });
  }
}