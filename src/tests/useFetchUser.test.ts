import { renderHook, waitFor } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { server } from "../setupTests";
import { useFetchUser } from "../hooks/useFetchUser";

describe("useFetchUser", () => {
  it("fetches user successfully", async () => {
    const { result } = renderHook(() => useFetchUser());

    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.user?.name).toBe("senior ramos");
    expect(result.current.error).toBeNull();
  });
});

it("handles server error", async () => {
  server.use(
    http.get("/api/user", () => {
      return HttpResponse.json(null, { status: 500 });
    })
  );

  const { result } = renderHook(() => useFetchUser());

  await waitFor(() => expect(result.current.loading).toBe(false));

  expect(result.current.user).toBeNull();
  expect(result.current.error).toBe("Network error");
});
