import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

export const server = setupServer(
  http.get("/api/user", () => {
    return HttpResponse.json({ name: "Senior" });
  }),
  http.post("/api/login", async ({ request }) => {
    type LoginBody = {
      username: string;
      password: string;
    };
    const { username, password } = (await request.json()) as LoginBody;

    if (username == "roberto" && password === "1234") {
      return HttpResponse.json({ token: "fake-jwt-token" });
    }

    return HttpResponse.json({ error: "Invalid credentials" }, { status: 401 });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
