import { NextRequest, NextResponse } from "next/server";
import { readdir } from "fs/promises";
import { join } from "path";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const grade = searchParams.get("grade");
    const subject = searchParams.get("subject");
    const type = searchParams.get("type") || "notes"; // notes, qbanks, etc.

    if (!grade || !subject) {
      return NextResponse.json({ error: "Grade and subject are required" }, { status: 400 });
    }

    const uploadDir = join(process.cwd(), "public", "uploads", grade, subject);

    try {
      const files = await readdir(uploadDir);
      // Filter files based on type if needed, but for now return all
      const fileList = files.map(file => {
        const [timestamp, ...nameParts] = file.split('_');
        const originalName = nameParts.join('_');
        return {
          filename: file,
          originalName,
          url: `/api/download?filename=${file}&grade=${grade}&subject=${subject}`
        };
      });

      return NextResponse.json({ files: fileList });
    } catch (error) {
      // Directory doesn't exist or no files
      return NextResponse.json({ files: [] });
    }
  } catch (error) {
    console.error("List files error:", error);
    return NextResponse.json({ error: "Failed to list files" }, { status: 500 });
  }
}
