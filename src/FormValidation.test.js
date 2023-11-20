import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Form from "./components/Form";
test("It should not allow an email without '@'", async () => {
  render(<Form />);
  const emailInput = screen.getByLabelText(/email/i);

  user.type(emailInput, "sdkwela12dfa123");
  user.tab();
  const form = screen.getByRole("form");
  form.submit();
  expect(screen.getAllByTestId("error-message")[1]).toBeInTheDocument();
});

test("It should not be allow empty name input value", async () => {
  render(<Form />);
  const nameInput = screen.getByLabelText(/name/i);
  user.type(nameInput, "");
  user.tab();
  const form = screen.getByRole("form");
  form.submit();
  expect(screen.getAllByTestId("error-message")[0]).toBeInTheDocument();
});
