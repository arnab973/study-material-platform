import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ElectricalEngineeringPage from "@/app/StudyResources/Electrical-Engineering/page";

jest.mock('react-tilt', () => ({ Tilt: ({ children }: { children: React.ReactNode }) => children }));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    back: jest.fn(),
    push: jest.fn(),
  }),
}));

describe("Study Resources - Electrical Engineering Section", () => {
  test("renders Electrical Engineering in sidebar links", () => {
    render(<ElectricalEngineeringPage />);
    const circuitsText = screen.getAllByText(/Circuits/i);
    expect(circuitsText.length).toBeGreaterThan(0);
  });

  test("renders Electrical Engineering page with subjects and upload button for teacher", () => {
    render(<ElectricalEngineeringPage />);
    const heading = screen.getByRole("heading", {
      name: (content) =>
        content.includes("Electrical Engineering Study") && content.length > 0,
    });
    expect(heading).toBeInTheDocument();

    const teacherRadio = screen.getByRole("radio", { name: /teacher/i });
    fireEvent.click(teacherRadio);

    const uploadButtons = screen.getAllByRole("button", { name: /upload material/i });
    expect(uploadButtons.length).toBeGreaterThan(0);

    const deleteButtons = screen.getAllByRole("button", { name: /delete material/i });
    expect(deleteButtons.length).toBeGreaterThan(0);
  });

  test("upload modal opens and closes", () => {
    render(<ElectricalEngineeringPage />);
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
