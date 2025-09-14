import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ClassSelector from "@/app/StudyResources/page";
import BiotechnologyPage from "@/app/StudyResources/Biotechnology/page";
import { AuthProvider } from "@/app/context/AuthContext";

jest.mock('react-tilt', () => ({ Tilt: ({ children }: { children: React.ReactNode }) => children }));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    back: jest.fn(),
    push: jest.fn(),
  }),
}));

// Mock fetch globally for tests
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ files: [] }),
  })
) as jest.Mock;

describe("Study Resources - Biotechnology Section", () => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <AuthProvider>{children}</AuthProvider>
  );

  test("renders Biotechnology in class selector", () => {
    render(<ClassSelector />, { wrapper: Wrapper });
    const biotechGrades = screen.getAllByText(/Biotechnology/i);
    expect(biotechGrades.length).toBeGreaterThan(0);
  });

  test("renders Biotechnology page without teacher controls for student", () => {
    render(<BiotechnologyPage />, { wrapper: Wrapper });
    const heading = screen.getByRole("heading", { name: /Biotechnology Books/i });
    expect(heading).toBeInTheDocument();

    const teacherRadio = screen.queryByRole("radio", { name: /teacher/i });
    expect(teacherRadio).toBeNull();

    const uploadButtons = screen.queryAllByRole("button", { name: /upload material/i });
    expect(uploadButtons.length).toBe(0);

    const deleteButtons = screen.queryAllByRole("button", { name: /delete material/i });
    expect(deleteButtons.length).toBe(0);
  });

  test("upload modal does not open for student", () => {
    render(<BiotechnologyPage />, { wrapper: Wrapper });

    const teacherRadio = screen.queryByRole("radio", { name: /teacher/i });
    expect(teacherRadio).toBeNull();

    const uploadButtons = screen.queryAllByRole("button", { name: /upload material/i });
    expect(uploadButtons.length).toBe(0);

    const modalTitle = screen.queryByText(/Upload Study Material/i);
    expect(modalTitle).toBeNull();
  });
});
