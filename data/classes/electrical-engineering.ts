import { LinkType } from "./linkType";
import { rocket, lectures_svg, maps_svg, qbank_svg } from "@/images/main";

export const links: LinkType[] = [
  { name: "Circuits", path: "/StudyResources/Electrical-Engineering/circuits", icon: rocket },
  { name: "Power Systems", path: "/StudyResources/Electrical-Engineering/power-systems", icon: lectures_svg },
  { name: "Control Systems", path: "/StudyResources/Electrical-Engineering/control-systems", icon: maps_svg },
  { name: "Electronics", path: "/StudyResources/Electrical-Engineering/electronics", icon: qbank_svg },
];

export const circuits = {
  notes: [
    { name: "Basic Circuit Analysis", path: "placeholder" },
    { name: "AC Circuits", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Basic Circuit Analysis", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Basic Circuit Analysis", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Basic Circuit Analysis", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Fundamentals of Electric Circuits", thumbnail: rocket, link: "https://example.com" },
  ],
};

export const powerSystems = {
  notes: [
    { name: "Power Generation", path: "placeholder" },
    { name: "Transmission Lines", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Power Generation", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Power Generation", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Power Generation", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Power System Analysis", thumbnail: rocket, link: "https://example.com" },
  ],
};

export const controlSystems = {
  notes: [
    { name: "Feedback Control", path: "placeholder" },
    { name: "Stability Analysis", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Feedback Control", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Feedback Control", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Feedback Control", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Control Systems Engineering", thumbnail: rocket, link: "https://example.com" },
  ],
};

export const electronics = {
  notes: [
    { name: "Semiconductor Devices", path: "placeholder" },
    { name: "Digital Electronics", path: "placeholder" },
  ],
  pyqp: [{ name: "Session 2024-2025", path: "placeholder" }],
  question_banks: [
    { name: "Semiconductor Devices", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  sample_paper: [
    { name: "Semiconductor Devices", sets: [{ name: "Set 1", path: "placeholder" }] },
  ],
  video_lectures: [
    { name: "Semiconductor Devices", options: [{ path: "https://www.youtube.com/watch?v=example", thumbnail: "https://img.youtube.com/vi/example/hqdefault.jpg", channel: "Example Channel" }] },
  ],
  books: [
    { title: "Microelectronic Circuits", thumbnail: rocket, link: "https://example.com" },
  ],
};
