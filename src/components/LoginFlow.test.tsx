import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { http, HttpResponse } from "msw";
import { server } from "../setupTests";
import LoginFlow from "./LoginFlow";

function renderWithRouter(ui: React.ReactNode, initialPath = "/") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/" element={ui} />
        <Route path="/dashboard" element={<h1>Dashboard</h1>} />
      </Routes>
    </MemoryRouter>
  );
}

describe("LoginFlow with redirect", () => {
  it("redirects to /dashboard on success", async () => {
    renderWithRouter(<LoginFlow />);
    fireEvent.click(screen.getByRole("button", { name: /login/i }));
    await waitFor(() => screen.getByText(/dashboard/i));
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });

  it("shows error on invalid credentials", async () => {
    server.use(
      http.post("/api/login", () => {
        return HttpResponse.json(
          { error: "Invalid credentials" },
          { status: 401 }
        );
      })
    );

    renderWithRouter(<LoginFlow />);
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    const error = await waitFor(() => screen.getByText(/error/i));
    expect(error).toBeInTheDocument();
  });
});
