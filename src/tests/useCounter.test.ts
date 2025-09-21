import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../hooks/useCounter";

describe("useCounter", () => {
  it("starts with initial value", () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  it("increments correctly", () => {
    const { result } = renderHook(() => useCounter(0));
    act(() => result.current.inc());
    expect(result.current.count).toBe(1);
  });

  it("decrements correctly", () => {
    const { result } = renderHook(() => useCounter(3));
    act(() => result.current.dec());
    expect(result.current.count).toBe(2);
  });

  it("resets correctly", () => {
    const { result } = renderHook(() => useCounter(3));
    act(() => result.current.inc());
    act(() => result.current.inc());
    expect(result.current.count).toBe(5);

    act(() => result.current.reset());
    expect(result.current.count).toBe(3);
  });
});
