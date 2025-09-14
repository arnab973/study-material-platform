import { LinkType } from "./linkType";
import { rocket, lectures_svg, maps_svg, qbank_svg } from "@/images/main";

export const links: LinkType[] = [
  { name: "Crop Science", path: "/StudyResources/Agriculture/crop-science", icon: rocket },
  { name: "Soil Science", path: "/StudyResources/Agriculture/soil-science", icon: lectures_svg },
  { name: "Agricultural Engineering", path: "/StudyResources/Agriculture/agricultural-engineering", icon: maps_svg },
  { name: "Plant Pathology", path: "/StudyResources/Agriculture/plant-pathology", icon: qbank_svg },
];

export const cropScience = {
  notes: [
    { name: "Crop Production", path: "placeholder" },
    { name: "Crop Improvement", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Crop Production", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Crop Production", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Crop Production", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Principles of Crop Production", thumbnail: rocket, link: "https://example.com" },
  ],
};

export const soilScience = {
  notes: [
    { name: "Soil Formation", path: "placeholder" },
    { name: "Soil Fertility", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Soil Formation", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Soil Formation", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Soil Formation", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Soil Science and Management", thumbnail: rocket, link: "https://example.com" },
  ],
};

export const agriculturalEngineering = {
  notes: [
    { name: "Farm Machinery", path: "placeholder" },
    { name: "Irrigation Systems", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Farm Machinery", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Farm Machinery", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Farm Machinery", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Agricultural Engineering", thumbnail: rocket, link: "https://example.com" },
  ],
};

export const plantPathology = {
  notes: [
    { name: "Plant Diseases", path: "placeholder" },
    { name: "Disease Management", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Plant Diseases", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Plant Diseases", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Plant Diseases", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Plant Pathology", thumbnail: rocket, link: "https://example.com" },
  ],
};
