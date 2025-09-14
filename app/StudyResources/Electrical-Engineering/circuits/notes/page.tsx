"use client";
import React, { useEffect, useState } from "react";
import BackButton from "@/app/components/backbtn";
import UploadModal from "@/app/components/UploadModal";
import { useAuth } from "@/app/context/AuthContext";

interface FileItem {
  filename: string;
  originalName: string;
  url: string;
}

const CircuitsNotes = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  // Assume teacher if logged in, but in real app, check role
  const userType = isLoggedIn ? "teacher" : "student";

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("/api/list-files?grade=Electrical-Engineering&subject=circuits&type=notes");
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

  const handleDelete = async (filename: string) => {
    if (!confirm("Are you sure you want to delete this file?")) return;

    try {
      const response = await fetch("/api/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename,
          grade: "Electrical-Engineering",
          subject: "circuits",
        }),
      });

      if (response.ok) {
        setFiles(files.filter(file => file.filename !== filename));
        alert("File deleted successfully");
      } else {
        alert("Failed to delete file");
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting file");
    }
  };

  const refreshFiles = async () => {
    try {
      const response = await fetch("/api/list-files?grade=Electrical-Engineering&subject=circuits&type=notes");
      const data = await response.json();
      setFiles(data.files || []);
    } catch (error) {
      console.error("Error refreshing files:", error);
    }
  };

  return (
    <main className="p-6 min-h-screen">
      <BackButton />
      <h1 className="text-2xl sm:text-4xl font-bold mb-6 mt-6 text-white text-center">
        Electrical Engineering <span className="text-primary">Circuits</span> Notes
      </h1>

      {userType === "teacher" && (
        <div className="text-center mb-6">
          <button
            onClick={() => setIsUploadModalOpen(true)}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Upload Material
          </button>
        </div>
      )}

      {loading ? (
        <div className="text-center text-white">Loading...</div>
      ) : files.length === 0 ? (
        <div className="text-center text-white">No study materials uploaded yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
          {files.map((file) => (
            <div key={file.filename} className="p-4 bg-white/10 rounded-lg border border-primary/50 flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">{file.originalName}</h3>
              <div className="flex space-x-2">
                <a
                  href={file.url}
                  download={file.originalName}
                  className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-colors"
                >
                  Download
                </a>
                {userType === "teacher" && (
                  <button
                    onClick={() => handleDelete(file.filename)}
                    className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => {
          setIsUploadModalOpen(false);
          refreshFiles();
        }}
        grade="Electrical-Engineering"
        subject="circuits"
        userType={userType}
      />
    </main>
  );
};

export default CircuitsNotes;
