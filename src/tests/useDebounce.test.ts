import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "../hooks/useDebounce";
import { vi } from "vitest";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  it("handles null values", () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 300),
      {
        initialProps: { value: null as string | null },
      }
    );

    expect(result.current).toBeNull();
    rerender({ value: "next" });
    expect(result.current).toBeNull();
    act(() => {
      vi.advanceTimersByTime(300);
    });
    expect(result.current).toBe("next");
  });
});
