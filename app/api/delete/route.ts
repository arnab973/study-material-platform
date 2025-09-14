import { NextRequest, NextResponse } from "next/server";
import { unlink } from "fs/promises";
import path from "path";

export async function DELETE(request: NextRequest) {
  try {
    const { filename, grade, subject } = await request.json();

    if (!filename || !grade || !subject) {
      return NextResponse.json(
        { error: "Filename, grade, and subject are required" },
        { status: 400 }
      );
    }

    // Construct the file path
    const uploadDir = path.join(process.cwd(), "public", "uploads", grade, subject);
    const filepath = path.join(uploadDir, filename);

    // Check if file exists and delete it
    try {
      await unlink(filepath);
    } catch (error) {
      console.error("Error deleting file:", error);
      return NextResponse.json(
        { error: "File not found or could not be deleted" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "File deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
