import React from "react";
import CustomInput from "./CustomInput";
import { cleanup, render, fireEvent, screen } from "@testing-library/react";

afterEach(cleanup);

test("display the correct input given", () => {
	// const utils = render(<CustomInput />);
	// const input = utils.getByLabelText("input-text");
	// fireEvent.change(input, { target: { value: "vaishnavi" } });
	// expect(input.value).toBe("vaishnavi");

	const handleChange = jest.fn();
	render(<CustomInput onChange={handleChange} value={""} />);
	const input = screen.getByTestId("change-input-test").querySelector("input");
	fireEvent.change(input, { target: { value: "value" } });
	expect(handleChange).toHaveBeenCalledTimes(1);
});
