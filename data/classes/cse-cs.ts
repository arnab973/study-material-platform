import { LinkType } from "./linkType";
import { rocket, lectures_svg, maps_svg, qbank_svg } from "@/images/main";

export const links: LinkType[] = [
  { name: "Computer Networks", path: "/StudyResources/CSE-CS/computer-networks", icon: rocket },
  { name: "Operating Systems", path: "/StudyResources/CSE-CS/operating-systems", icon: lectures_svg },
  { name: "Software Engineering", path: "/StudyResources/CSE-CS/software-engineering", icon: maps_svg },
  { name: "System Design", path: "/StudyResources/CSE-CS/system-design", icon: qbank_svg },
];

export const computerNetworks = {
  notes: [
    { name: "Introduction to Networks", path: "placeholder" },
    { name: "OSI Model", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Introduction to Networks", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Introduction to Networks", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Introduction to Networks", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Computer Networking: A Top-Down Approach", thumbnail: rocket, link: "https://example.com" },
  ],
};

export const operatingSystems = {
  notes: [
    { name: "Process Management", path: "placeholder" },
    { name: "Memory Management", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Process Management", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Process Management", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Process Management", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Operating System Concepts", thumbnail: rocket, link: "https://example.com" },
  ],
};

export const softwareEngineering = {
  notes: [
    { name: "Software Development Life Cycle", path: "placeholder" },
    { name: "Agile Methodology", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Software Development Life Cycle", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Software Development Life Cycle", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Software Development Life Cycle", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Software Engineering", thumbnail: rocket, link: "https://example.com" },
  ],
};

export const systemDesign = {
  notes: [
    { name: "System Architecture", path: "placeholder" },
    { name: "Scalability", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "System Architecture", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "System Architecture", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "System Architecture", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Designing Data-Intensive Applications", thumbnail: rocket, link: "https://example.com" },
  ],
};
