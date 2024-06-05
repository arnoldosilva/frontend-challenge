import { render, screen } from "@testing-library/react";
import Main from "./index";
describe("Main", () => {
  it("should render the heading", () => {
    const renderedComponent = render(<Main />);
    expect(screen.getByRole("heading", { name: "Main" })).toBeInTheDocument();
  });
});
