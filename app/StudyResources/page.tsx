import React from "react";
import Image from "next/image";
import { school } from "@/images/main"; // Replace with actual image imports
import Btn from "../components/btn";
import BackButton from "../components/backbtn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Resources",
  description:
    "Explore curated study resources for students of all grades. Get access to notes, video lectures, question banks, and more!",
};

// List of classes to select from
const classes = [
  {
    grade: "CSE Core",
    description: "Explore core computer science engineering topics.",
    path: "/StudyResources/CSE-core",
    image: school,
  },
  {
    grade: "CSE AI-ML",
    description: "Dive into Artificial Intelligence and Machine Learning.",
    path: "/StudyResources/CSE-AI-ML",
    image: school,
  },
  {
    grade: "CSE DS",
    description: "Master Data Science concepts and tools.",
    path: "/StudyResources/CSE-DS",
    image: school,
  },
  {
    grade: "CSE CS",
    description: "Learn advanced computer science subjects.",
    path: "/StudyResources/CSE-CS",
    image: school,
  },
  {
    grade: "Electrical Engineering",
    description: "Study electrical engineering fundamentals.",
    path: "/StudyResources/Electrical-Engineering",
    image: school,
  },
  {
    grade: "Biotechnology",
    description: "Explore biotechnology and life sciences.",
    path: "/StudyResources/Biotechnology",
    image: school,
  },
  {
    grade: "Agriculture",
    description: "Learn about agricultural sciences and practices.",
    path: "/StudyResources/Agriculture",
    image: school,
  },
  // Add more classes if needed
];

const ClassSelector = () => {
  return (
    <section className="min-h-screen p-6 text-white">
      <BackButton />
      <h1 className="text-4xl font-bold mb-12 mt-8 text-center">
        Select Your Field <span className="text-primary">to Study!</span>
      </h1>
      <div className="grid gap-6 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {classes.map((item) => (
          <div
            key={item.grade}
            className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white/10 hover:shadow-xl border border-primary/40"
          >
            <div className="w-full rounded-t-2xl overflow-hidden relative h-40">
              {/* Image with blur and opacity */}
              <Image
                src={item.image}
                alt={item.grade}
                className="w-full h-40 object-cover group-hover:scale-95 group-hover:rounded-xl transform transition duration-150 blur-[1px]"
              />
              {/* Black overlay effect */}
              <div className="absolute inset-0 group-hover:scale-95 duration-150 group-hover:rounded-xl bg-black opacity-40"></div>

              {/* Centered Text */}
              <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
                {item.grade}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 pb-20 text-center">
              <p className="text-sm text-gray-300 mt-2">{item.description}</p>
            </div>

            {/* Button - Positioned at Bottom */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-center">
              <Btn displayText="Start Learning" url={item.path} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassSelector;
