import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ClassSelector from "@/app/StudyResources/page";
import ComputerSciencePage from "@/app/StudyResources/ComputerScience/page";

describe("Study Resources - Computer Science Section", () => {
  test("renders Computer Science in class selector", () => {
    render(<ClassSelector />);
    const csGrade = screen.getByText(/Computer Science/i);
    expect(csGrade).toBeInTheDocument();
  });

  test("renders Computer Science page with subjects and upload button for teacher", () => {
    render(<ComputerSciencePage />);
    const programmingSubject = screen.getByText(/Programming/i);
    expect(programmingSubject).toBeInTheDocument();

    const uploadButton = screen.getByRole("button", { name: /upload/i });
    expect(uploadButton).toBeInTheDocument();
  });

  test("upload modal opens and closes", () => {
    render(<ComputerSciencePage />);
    const uploadButton = screen.getByRole("button", { name: /upload/i });
    fireEvent.click(uploadButton);
    const modalTitle = screen.getByText(/Upload Study Material/i);
    expect(modalTitle).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(closeButton);
    expect(modalTitle).not.toBeInTheDocument();
  });
});
