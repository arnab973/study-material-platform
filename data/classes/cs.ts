import {
  lectures_svg,
  maps_svg,
  qbank_svg,
  rocket,
} from "@/images/main";
import { LinkType } from "./linkType";

export const links: LinkType[] = [
  { name: "Programming", path: "/StudyResources/ComputerScience/programming", icon: rocket },
  {
    name: "Data Structures",
    path: "/StudyResources/ComputerScience/datastructures",
    icon: lectures_svg,
  },
  {
    name: "Algorithms",
    path: "/StudyResources/ComputerScience/algorithms",
    icon: maps_svg,
  },
  {
    name: "Databases",
    path: "/StudyResources/ComputerScience/databases",
    icon: qbank_svg,
  },
];

export const programming = {
  notes: [
    {
      name: "Introduction to Programming",
      path: "placeholder",
    },
    {
      name: "Variables and Data Types",
      path: "placeholder",
    },
    {
      name: "Control Structures",
      path: "placeholder",
    },
  ],
  pyqp: [
    {
      name: "Session 2024-2025",
      path: "placeholder",
    },
  ],
  question_banks: [
    {
      name: "Introduction to Programming",
      sets: [
        { name: "Set 1", path: "placeholder" },
        { name: "Set 2", path: "placeholder" },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Introduction to Programming",
      sets: [
        { name: "Set 1", path: "placeholder" },
      ],
    },
  ],
  video_lectures: [
    {
      name: "Introduction to Programming",
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
      title: "Introduction to Algorithms",
      thumbnail: rocket,
      link: "https://example.com",
    },
  ],
};

export const datastructures = {
  notes: [
    {
      name: "Arrays and Lists",
      path: "placeholder",
    },
    {
      name: "Stacks and Queues",
      path: "placeholder",
    },
  ],
  pyqp: [
    {
      name: "Session 2024-2025",
      path: "placeholder",
    },
  ],
  question_banks: [
    {
      name: "Arrays and Lists",
      sets: [
        { name: "Set 1", path: "placeholder" },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Arrays and Lists",
      sets: [
        { name: "Set 1", path: "placeholder" },
      ],
    },
  ],
  video_lectures: [
    {
      name: "Arrays and Lists",
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
      title: "Data Structures and Algorithms",
      thumbnail: rocket,
      link: "https://example.com",
    },
  ],
};

export const algorithms = {
  notes: [
    {
      name: "Sorting Algorithms",
      path: "placeholder",
    },
    {
      name: "Searching Algorithms",
      path: "placeholder",
    },
  ],
  pyqp: [
    {
      name: "Session 2024-2025",
      path: "placeholder",
    },
  ],
  question_banks: [
    {
      name: "Sorting Algorithms",
      sets: [
        { name: "Set 1", path: "placeholder" },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Sorting Algorithms",
      sets: [
        { name: "Set 1", path: "placeholder" },
      ],
    },
  ],
  video_lectures: [
    {
      name: "Sorting Algorithms",
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
      title: "Algorithms Unlocked",
      thumbnail: rocket,
      link: "https://example.com",
    },
  ],
};

export const databases = {
  notes: [
    {
      name: "SQL Basics",
      path: "placeholder",
    },
    {
      name: "Database Design",
      path: "placeholder",
    },
  ],
  pyqp: [
    {
      name: "Session 2024-2025",
      path: "placeholder",
    },
  ],
  question_banks: [
    {
      name: "SQL Basics",
      sets: [
        { name: "Set 1", path: "placeholder" },
      ],
    },
  ],
  sample_paper: [
    {
      name: "SQL Basics",
      sets: [
        { name: "Set 1", path: "placeholder" },
      ],
    },
  ],
  video_lectures: [
    {
      name: "SQL Basics",
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
      title: "Database System Concepts",
      thumbnail: rocket,
      link: "https://example.com",
    },
  ],
};
