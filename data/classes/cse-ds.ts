import { LinkType } from "./linkType";
import { rocket, lectures_svg, maps_svg, qbank_svg } from "@/images/main";

export const links: LinkType[] = [
  { name: "Statistics", path: "/StudyResources/CSE-DS/statistics", icon: rocket },
  { name: "Big Data", path: "/StudyResources/CSE-DS/big-data", icon: lectures_svg },
  { name: "Data Visualization", path: "/StudyResources/CSE-DS/data-visualization", icon: maps_svg },
  { name: "Data Mining", path: "/StudyResources/CSE-DS/data-mining", icon: qbank_svg },
];

export const dsSubjects = {
  notes: [{ name: "Statistics Notes", path: "placeholder" }],
  question_banks: [{ name: "Statistics Question Bank", sets: [{ name: "Set 1", path: "placeholder" }] }],
  sample_paper: [{ name: "Statistics Sample Paper", sets: [{ name: "Set 1", path: "placeholder" }] }],
  video_lectures: [{ name: "Statistics Video Lectures", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] }],
  books: [{ title: "Statistics Book", thumbnail: rocket, link: "https://example.com" }],
};
