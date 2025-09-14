import { LinkType } from "./linkType";
import { rocket, lectures_svg, maps_svg, qbank_svg } from "@/images/main";

export const links: LinkType[] = [
  { name: "Core Subject 1", path: "/StudyResources/CSE-core/core-subject-1", icon: rocket },
  { name: "Core Subject 2", path: "/StudyResources/CSE-core/core-subject-2", icon: lectures_svg },
  { name: "Core Subject 3", path: "/StudyResources/CSE-core/core-subject-3", icon: maps_svg },
  { name: "Core Subject 4", path: "/StudyResources/CSE-core/core-subject-4", icon: qbank_svg },
];

// Placeholder data structure for notes, question banks, sample papers, video lectures, books
export const coreSubjects = {
  notes: [
    { name: "Core Subject 1 Notes", path: "placeholder" },
    { name: "Core Subject 2 Notes", path: "placeholder" },
  ],
  question_banks: [
    {
      name: "Core Subject 1 Question Bank",
      sets: [{ name: "Set 1", path: "placeholder" }],
    },
  ],
  sample_paper: [
    {
      name: "Core Subject 1 Sample Paper",
      sets: [{ name: "Set 1", path: "placeholder" }],
    },
  ],
  video_lectures: [
    {
      name: "Core Subject 1 Video Lectures",
      options: [
        {
          path: "https://www.youtube.com/watch?v=example",
          thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg",
          channel: "Example Channel",
        },
      ],
    },
  ],
  books: [
    {
      title: "Core Subject 1 Book",
      thumbnail: rocket,
      link: "https://example.com",
    },
  ],
};
