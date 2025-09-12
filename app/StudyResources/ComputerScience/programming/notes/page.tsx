"use client";
import React, { useEffect, useState } from "react";
import BackButton from "@/app/components/backbtn";

interface FileItem {
  filename: string;
  originalName: string;
  url: string;
}

const ComputerScienceProgrammingNotes = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("/api/list-files?grade=ComputerScience&subject=programming&type=notes");
        const data = await response.json();
        setFiles(data.files || []);
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return (
    <main className="p-6 min-h-screen">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 mt-6 text-white text-center">
        Computer Science <span className="text-primary">Programming</span> Notes
      </h1>

      {loading ? (
        <div className="text-center text-white">Loading...</div>
      ) : files.length === 0 ? (
        <div className="text-center text-white">No study materials uploaded yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
          {files.map((file) => (
            <div key={file.filename} className="p-4 bg-white/10 rounded-lg border border-primary/50">
              <h3 className="text-lg font-semibold text-white mb-2">{file.originalName}</h3>
              <a
                href={file.url}
                download={file.originalName}
                className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default ComputerScienceProgrammingNotes;
