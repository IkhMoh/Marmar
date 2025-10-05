import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src/data/posts.json");
    const rawData = fs.readFileSync(filePath, "utf-8");
    const posts = JSON.parse(rawData);

    return NextResponse.json(posts);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to read local posts", details: error.message },
      { status: 500 }
    );
  }
}
