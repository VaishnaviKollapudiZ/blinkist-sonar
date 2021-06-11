import React from "react";
import CustomButton from "./CustomButton";

import { render, fireEvent, screen, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("should render a custom button", () => {
	render(<CustomButton label="click to test" />);
	const customButtonElement = screen.getByTestId("custom-button-test");
	expect(customButtonElement).toBeInTheDocument();
});

test("checking correct button name", () => {
	render(<CustomButton label="click to test" />);
	const customButtonElement = screen.getByTestId("custom-button-test");
	expect(customButtonElement.textContent).toBe("click to test");
	//expect(customButtonElement).toHaveTextContext("click to test")
});

test("check button click by mocking a function", () => {
	const handleClick = jest.fn();
	render(<CustomButton onClick={handleClick} />);
	const customButtonElement = screen.getByTestId("custom-button-test");
	expect(customButtonElement).toBeTruthy();
});

test("check button click with fireEvent", () => {
	const handleClick = jest.fn();
	render(<CustomButton label="Mark as completed" onClick={handleClick} />);
	fireEvent.click(screen.getByText("Mark as completed"));
	expect(handleClick).toHaveBeenCalled();
});
