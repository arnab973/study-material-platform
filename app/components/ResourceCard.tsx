// components/ResourceCard.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import UploadModal from "./UploadModal";

interface ResourceCardProps {
  title: string;
  description?: string;
  icon: string;
  url?: string;
  grade?: string;
  subject?: string;
  userType?: "student" | "teacher";
  showUpload?: boolean;
  showDownload?: boolean;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  icon,
  url,
  grade = "Grade-10",
  subject = "general",
  userType = "student",
  showUpload = false,
  showDownload = false,
}) => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const handleDownload = () => {
    // For demo purposes, we'll download a sample file
    // In a real app, this would call the download API with specific file parameters
    const link = document.createElement("a");
    link.href = "/api/download?filename=sample.txt&grade=" + grade + "&subject=" + subject;
    link.download = "sample.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className={`p-6 rounded-xl bg-white/15 shadow-xl transition-transform transform hover:scale-105 border border-primary/50 text-center relative`}>
        <div className="flex justify-center mb-4">
          <Image
            src={icon}
            width={16}
            height={16}
            alt={`${title} icon`}
            className="h-12 w-12"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-2">
          {showUpload && (
            <Button
              onClick={() => setIsUploadModalOpen(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Upload Material
            </Button>
          )}
          {showDownload && (
            <Button
              onClick={handleDownload}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Download Materials
            </Button>
          )}
          {url && (
            <a
              href={url}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors inline-block text-center"
            >
              View Resources
            </a>
          )}
        </div>
      </div>

      {/* Upload Modal */}
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        grade={grade}
        subject={subject}
        userType={userType}
      />
    </>
  );
};

export default ResourceCard;
