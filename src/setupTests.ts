import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

type BodyProps = {
  username: string;
  password: string;
};
export const server = setupServer(
  http.get("/api/user", () => {
    return HttpResponse.json({ id: 1, name: "senior ramos", role: "admin" });
  }),
  http.post("/api/login", async ({ request }) => {
    const body = (await request.json()) as BodyProps;
    if (body.username == "roberto" && body.password === "1234") {
      return HttpResponse.json({ token: "fake-jwt" });
    }
    return HttpResponse.json({ error: "Invalid credentials" }, { status: 401 });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
