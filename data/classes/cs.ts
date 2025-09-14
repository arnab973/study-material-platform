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
      path: "/StudyResources/ComputerScience/programming/notes/introduction-to-programming",
    },
    {
      name: "Variables and Data Types",
      path: "/StudyResources/ComputerScience/programming/notes/variables-and-data-types",
    },
    {
      name: "Control Structures",
      path: "/StudyResources/ComputerScience/programming/notes/control-structures",
    },
  ],
  pyqp: [
    {
      name: "Session 2024-2025",
      path: "/StudyResources/ComputerScience/programming/pyqp/session-2024-2025",
    },
  ],
  question_banks: [
    {
      name: "Introduction to Programming",
      sets: [
        { name: "Set 1", path: "/StudyResources/ComputerScience/programming/question-banks/set-1" },
        { name: "Set 2", path: "/StudyResources/ComputerScience/programming/question-banks/set-2" },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Introduction to Programming",
      sets: [
        { name: "Set 1", path: "/StudyResources/ComputerScience/programming/sample-paper/set-1" },
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
      path: "/StudyResources/ComputerScience/datastructures/notes/arrays-and-lists",
    },
    {
      name: "Stacks and Queues",
      path: "/StudyResources/ComputerScience/datastructures/notes/stacks-and-queues",
    },
  ],
  pyqp: [
    {
      name: "Session 2024-2025",
      path: "/StudyResources/ComputerScience/datastructures/pyqp/session-2024-2025",
    },
  ],
  question_banks: [
    {
      name: "Arrays and Lists",
      sets: [
        { name: "Set 1", path: "/StudyResources/ComputerScience/datastructures/question-banks/set-1" },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Arrays and Lists",
      sets: [
        { name: "Set 1", path: "/StudyResources/ComputerScience/datastructures/sample-paper/set-1" },
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
      path: "/StudyResources/ComputerScience/algorithms/notes/sorting-algorithms",
    },
    {
      name: "Searching Algorithms",
      path: "/StudyResources/ComputerScience/algorithms/notes/searching-algorithms",
    },
  ],
  pyqp: [
    {
      name: "Session 2024-2025",
      path: "/StudyResources/ComputerScience/algorithms/pyqp/session-2024-2025",
    },
  ],
  question_banks: [
    {
      name: "Sorting Algorithms",
      sets: [
        { name: "Set 1", path: "/StudyResources/ComputerScience/algorithms/question-banks/set-1" },
      ],
    },
  ],
  sample_paper: [
    {
      name: "Sorting Algorithms",
      sets: [
        { name: "Set 1", path: "/StudyResources/ComputerScience/algorithms/sample-paper/set-1" },
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
      path: "/StudyResources/ComputerScience/databases/notes/sql-basics",
    },
    {
      name: "Database Design",
      path: "/StudyResources/ComputerScience/databases/notes/database-design",
    },
  ],
  pyqp: [
    {
      name: "Session 2024-2025",
      path: "/StudyResources/ComputerScience/databases/pyqp/session-2024-2025",
    },
  ],
  question_banks: [
    {
      name: "SQL Basics",
      sets: [
        { name: "Set 1", path: "/StudyResources/ComputerScience/databases/question-banks/set-1" },
      ],
    },
  ],
  sample_paper: [
    {
      name: "SQL Basics",
      sets: [
        { name: "Set 1", path: "/StudyResources/ComputerScience/databases/sample-paper/set-1" },
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
