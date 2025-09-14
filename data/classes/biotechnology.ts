import { LinkType } from "./linkType";
import { rocket, lectures_svg, maps_svg, qbank_svg } from "@/images/main";

export const links: LinkType[] = [
  { name: "Genetics", path: "/StudyResources/Biotechnology/genetics", icon: rocket },
  { name: "Biochemistry", path: "/StudyResources/Biotechnology/biochemistry", icon: lectures_svg },
  { name: "Molecular Biology", path: "/StudyResources/Biotechnology/molecular-biology", icon: maps_svg },
  { name: "Microbiology", path: "/StudyResources/Biotechnology/microbiology", icon: qbank_svg },
];

export const genetics = {
  notes: [
    { name: "Mendelian Genetics", path: "placeholder" },
    { name: "Population Genetics", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Mendelian Genetics", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Mendelian Genetics", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Mendelian Genetics", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "An Introduction to Genetic Engineering", thumbnail: rocket, link: "https://example.com" },
  ],
};

export const biochemistry = {
  notes: [
    { name: "Enzymes and Metabolism", path: "placeholder" },
    { name: "Bioenergetics", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Enzymes and Metabolism", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Enzymes and Metabolism", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Enzymes and Metabolism", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Biochemistry", thumbnail: rocket, link: "https://example.com" },
  ],
};

export const molecularBiology = {
  notes: [
    { name: "DNA Replication", path: "placeholder" },
    { name: "Gene Expression", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "DNA Replication", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "DNA Replication", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "DNA Replication", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Molecular Biology of the Gene", thumbnail: rocket, link: "https://example.com" },
  ],
};

export const microbiology = {
  notes: [
    { name: "Bacterial Structure", path: "placeholder" },
    { name: "Viral Replication", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Bacterial Structure", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Bacterial Structure", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Bacterial Structure", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Microbiology: An Introduction", thumbnail: rocket, link: "https://example.com" },
  ],
};
