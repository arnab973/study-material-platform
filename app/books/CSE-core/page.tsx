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

const CSECoreBooksList = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const { userType: authUserType } = useAuth();
  const userType = authUserType || "student";

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fetch("/api/list-files?grade=CSE-core&subject=books&type=books");
        const data = await response.json();
        setFiles(data.files || []);
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [isUploadModalOpen]);

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
          grade: "CSE-core",
          subject: "books",
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
      const response = await fetch("/api/list-files?grade=CSE-core&subject=books&type=books");
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
        CSE Core <span className="text-primary">Books</span>
      </h1>

      {(userType === "teacher" || userType === "student") && (
        <div className="text-center mb-6">
          {userType === "teacher" && (
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
            >
              Upload Book
            </button>
          )}
        </div>
      )}

      {loading ? (
        <div className="text-center text-white">Loading...</div>
      ) : files.length === 0 ? (
        <div className="text-center text-white">No books uploaded yet.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-16 mt-14">
          {files.map((file) => (
            <div key={file.filename} className="p-6 rounded-xl bg-white/15 shadow-xl transition-transform transform hover:scale-105 border border-primary/50 text-center relative flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-white">{file.originalName}</h3>
              <div className="flex flex-col space-y-2">
                <a
                  href={file.url}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors inline-block text-center"
                >
                  View Resources
                </a>
                <a
                  href={file.url}
                  download={file.originalName}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors inline-block text-center"
                >
                  Download Materials
                </a>
                {userType === "teacher" && (
                  <button
                    onClick={() => handleDelete(file.filename)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors"
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
        grade="CSE-core"
        subject="books"
        userType={userType}
      />
    </main>
  );
};

export default CSECoreBooksList;
