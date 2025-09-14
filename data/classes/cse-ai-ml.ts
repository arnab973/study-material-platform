import { LinkType } from "./linkType";
import { rocket, lectures_svg, maps_svg, qbank_svg } from "@/images/main";

export const links: LinkType[] = [
  { name: "Machine Learning", path: "/StudyResources/CSE-AI-ML/machine-learning", icon: rocket },
  { name: "Deep Learning", path: "/StudyResources/CSE-AI-ML/deep-learning", icon: lectures_svg },
  { name: "AI Fundamentals", path: "/StudyResources/CSE-AI-ML/ai-fundamentals", icon: maps_svg },
  { name: "Natural Language Processing", path: "/StudyResources/CSE-AI-ML/nlp", icon: qbank_svg },
];

// Placeholder data structure
export const aiMlSubjects = {
  notes: [
    { name: "Machine Learning Notes", path: "placeholder" },
  ],
  question_banks: [
    {
      name: "Machine Learning Question Bank",
      sets: [{ name: "Set 1", path: "placeholder" }],
    },
  ],
  sample_paper: [
    {
      name: "Machine Learning Sample Paper",
      sets: [{ name: "Set 1", path: "placeholder" }],
    },
  ],
  video_lectures: [
    {
      name: "Machine Learning Video Lectures",
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
      title: "Machine Learning Book",
      thumbnail: rocket,
      link: "https://example.com",
    },
  ],
};
