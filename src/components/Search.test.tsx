import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Search from "./Search";

// realtimer + waitfor

// describe("Search with useDebounce", () => {
//   it("debounces input value", async () => {
//     const user = userEvent.setup();
//     render(<Search />);

//     const input = screen.getByRole("textbox", { name: /search/i });
//     await user.type(input, "abc");
//     expect(screen.getByTestId("debounced")).toHaveTextContent(/^Debounced:/i);
//     await waitFor(
//       () => expect(screen.getByTestId("debounced")).toHaveTextContent("abc"),
//       { timeout: 3000 }
//     );
//   });
// });

describe("Search with useDebounce (fake timers)", () => {
  it("debounces input value (fake timers, no user-event)", async () => {
    // const user = userEvent.setup();

    render(<Search />);
    const input = screen.getByRole("textbox", { name: /search/i });
    await userEvent.type(input, "abc");
    expect(screen.getByText(/debounced:/i)).toHaveTextContent(/^Debounced/i);
    await waitFor(() =>
      expect(screen.getByText(/debounced:/i)).toHaveTextContent("abc")
    );
  });
});
