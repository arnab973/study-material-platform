import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;
    const subject = data.get("subject") as string;
    const grade = data.get("grade") as string;
    const userType = data.get("userType") as string;

    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create directory structure: uploads/grade/subject/
    const uploadDir = join(process.cwd(), "uploads", grade, subject);
    await mkdir(uploadDir, { recursive: true });

    // Generate unique filename
    const timestamp = Date.now();
    const filename = `${timestamp}_${file.name}`;
    const filepath = join(uploadDir, filename);

    // Save file
    await writeFile(filepath, buffer);

    // Store file metadata (you might want to use a database here)
    const fileData = {
      filename,
      originalName: file.name,
      subject,
      grade,
      userType,
      uploadDate: new Date().toISOString(),
      filePath: filepath,
      fileSize: file.size,
      mimeType: file.type,
    };

    // For now, we'll just return success. In a real app, you'd save this to a database
    console.log("File uploaded:", fileData);

    return NextResponse.json({
      message: "File uploaded successfully",
      fileId: timestamp,
      filename: file.name,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
