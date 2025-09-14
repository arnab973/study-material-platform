// pages/StudySection.tsx
"use client";
import React, { useState } from "react";
import ResourceCard from "@/app/components/ResourceCard";
import Sidebar from "@/app/components/sidebar";
import { resources } from "@/data/resource";
import { links } from "@/data/classes/cse-ds";
import { useAuth } from "@/app/context/AuthContext";

const StudySection: React.FC = () => {
  const [selected, setSelected] = useState(links[0].path);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const { userType } = useAuth();

  const getCurrentSubject = () => {
    const currentLink = links.find(link => link.path === selected);
    return currentLink ? currentLink.name.toLowerCase().replace(/\s+/g, '-') : "general";
  };

  return (
    <section className="flex bg-gradient-to-r from-[#333333] via-[#2e4640] to-[#333333]">
      <Sidebar links={links} selected={selected} setSelected={setSelected} isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible} />
      <div className={`${isSidebarVisible ? "lg:ml-72" : "ml-0"} py-8 flex-grow px-6 min-h-screen flex flex-col items-center space-y-14`}>
        {links.map((link) => selected === link.path && (
          <h2 key={link.name} className="text-3xl font-bold mb-12 text-white mt-10">
            CSE DS Study <span className="text-primary">{link.name} !</span>
          </h2>
        ))}
        <div className="mb-8">
          <div className="flex items-center space-x-4 bg-white/10 rounded-lg p-4">
            <span className="text-white font-medium">I am a:</span>
            <label className="flex items-center">
              <input type="radio" name="userType" value="student" checked={userType === "student"} readOnly className="mr-2" />
              <span className="text-white">Student</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="userType" value="teacher" checked={userType === "teacher"} readOnly className="mr-2" />
              <span className="text-white">Teacher</span>
            </label>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-16">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} title={resource.title} description={resource.description} icon={resource.icon} url={`${selected}/${resource.linkName}`} grade="CSE-DS" subject={getCurrentSubject()} userType={userType as "student" | "teacher"} showUpload={userType === "teacher"} showDownload={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudySection;
