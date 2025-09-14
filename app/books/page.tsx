import React from "react";
import Image from "next/image";
import Btn from "../components/btn";
import {
  astronomy,
  chemistry,
  cs,
  engineering_physics,
  maths,
  physics,
  ds,
} from "@/images/main";
import BackButton from "../components/backbtn";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Book Categories | EduViti",
};

// List of book categories with images
const categories = [
  { label: "CSE Core", path: "/books/CSE-core", image: cs },
  { label: "CSE AI-ML", path: "/books/CSE-AI-ML", image: ds },
  { label: "CSE DS", path: "/books/CSE-DS", image: ds },
  { label: "CSE CS", path: "/books/CSE-CS", image: cs },
  {
    label: "Electrical Engineering",
    path: "/books/ElectricalEngineering",
    image: engineering_physics,
  },
  {
    label: "Biotechnology",
    path: "/books/Biotechnology",
    image: chemistry,
  },
  {
    label: "Agriculture",
    path: "/books/Agriculture",
    image: physics,
  },
  { label: "Computer Science", path: "/books/ComputerScience", image: cs },
];

const BookCategorySelector = () => {
  return (
    <section className="min-h-screen p-6 text-white">
      <BackButton />
      <h1 className="text-4xl font-bold mb-12 mt-8 text-center">
        Explore Book <span className="text-primary">Categories</span>
      </h1>
      <div className="grid gap-6 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.path}
            className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white/10 hover:shadow-xl border border-primary/40"
          >
            <div className="w-full rounded-t-2xl overflow-hidden relative h-40">
              {/* Image with blur and opacity */}
              <Image
                src={category.image}
                alt={category.label}
                className="w-full h-40 object-cover group-hover:scale-95 group-hover:rounded-xl transform transition duration-150 blur-[1px]"
              />

              {/* Black overlay effect */}
              <div className="absolute inset-0 group-hover:scale-95 duration-150 group-hover:rounded-xl bg-black opacity-50"></div>
              {/* Centered Text */}
              <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-center text-white">
                {category.label}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 pb-20 text-center">
              <p className="text-sm text-gray-300 mt-2">
                Explore a collection of books under {category.label}.
              </p>
            </div>

            {/* Button - Positioned at Bottom */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-center">
              <Btn displayText="Explore Books" url={category.path} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookCategorySelector;
