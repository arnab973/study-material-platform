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

  const handleDownload = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    // Redirect to the resource page for all grades
    window.location.href = url || "#";
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
        <div className="flex flex-col space-y-4">
          {showUpload && (
            <Button
              onClick={() => setIsUploadModalOpen(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Upload Material
            </Button>
          )}
          {showUpload && (
            <Button
              onClick={() => window.location.href = url || "#"}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors"
            >
              Delete Material
            </Button>
          )}
          <div className="flex flex-col space-y-3">
            {showDownload && (
              <Button
                onClick={handleDownload}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
              >
                View Materials
              </Button>
            )}
            {url && (
              <a
                href={url}
                onClick={(event) => event.stopPropagation()}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition-colors inline-block text-center relative z-10"
              >
                View Resources
              </a>
            )}
          </div>
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
