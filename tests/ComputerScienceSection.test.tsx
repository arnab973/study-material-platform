import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ClassSelector from "@/app/StudyResources/page";
import ComputerSciencePage from "@/app/StudyResources/ComputerScience/page";

jest.mock('react-tilt', () => ({ Tilt: ({ children }: { children: React.ReactNode }) => children }));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    back: jest.fn(),
    push: jest.fn(),
  }),
}));

describe("Study Resources - Computer Science Section", () => {
  test("renders Computer Science in class selector", () => {
    render(<ClassSelector />);
    const csGrade = screen.getByText(/CSE CS/i);
    expect(csGrade).toBeInTheDocument();
  });

  test("renders Computer Science page with subjects and upload button for teacher", () => {
    render(<ComputerSciencePage />);
    const programmingTitle = screen.getByRole("heading", {
      name: (content) =>
        content.includes("Computer Science Study") && content.includes("Programming"),
    });
    expect(programmingTitle).toBeInTheDocument();

    const teacherRadio = screen.getByRole("radio", { name: /teacher/i });
    fireEvent.click(teacherRadio);

    const uploadButtons = screen.getAllByRole("button", { name: /upload material/i });
    expect(uploadButtons.length).toBeGreaterThan(0);

    const deleteButtons = screen.getAllByRole("button", { name: /delete material/i });
    expect(deleteButtons.length).toBeGreaterThan(0);
  });

  test("upload modal opens and closes", () => {
    render(<ComputerSciencePage />);
    const teacherRadio = screen.getByRole("radio", { name: /teacher/i });
    fireEvent.click(teacherRadio);

    const uploadButtons = screen.getAllByRole("button", { name: /upload material/i });
    fireEvent.click(uploadButtons[0]);
    const modalTitle = screen.getByText(/Upload Study Material/i);
    expect(modalTitle).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(closeButton);
    expect(modalTitle).not.toBeInTheDocument();
  });
});
