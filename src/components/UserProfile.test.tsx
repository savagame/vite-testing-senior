import { render, screen, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { server } from "../setupTests";
import UserProfile from "./UserProfile";

describe("UserProfile", () => {
  it("shows loading initially", () => {
    render(<UserProfile />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders user info on success", async () => {
    render(<UserProfile />);
    const name = await waitFor(() => screen.getByText(/senior ramos/i));
    expect(name).toBeInTheDocument();
    expect(screen.getByText(/role: admin/i)).toBeInTheDocument();
  });

  it("shows error message on failure", async () => {
    server.use(
      http.get("/api/user", () => {
        return HttpResponse.json(null, { status: 500 });
      })
    );

    render(<UserProfile />);

    const error = await waitFor(() => screen.getByText(/error/i));
    expect(error).toBeInTheDocument();
  });
});
