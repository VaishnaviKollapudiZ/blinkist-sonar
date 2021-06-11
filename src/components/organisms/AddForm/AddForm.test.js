import React from "react";
import {
	cleanup,
	screen,
	render,
	fireEvent,
	getByPlaceholderText,
} from "@testing-library/react";
import AddForm from "./AddForm";

afterEach(cleanup);

test("checking add book title", () => {
	render(<AddForm />);
	const formComponent = screen.getByText("ADD BOOK");
	expect(formComponent).toBeInTheDocument();
});

test("check submit alert", () => {
	const handleClick = jest.fn();
	render(<AddForm formHandle={handleClick} />);
	expect(screen.getByText("TITLE")).toBeInTheDocument();
	expect(screen.getByText("AUTHOR")).toBeInTheDocument();
	expect(screen.getByText("READ TIME")).toBeInTheDocument();
	fireEvent.change(screen.getByPlaceholderText("Enter title"), {
		target: { value: "title-value" },
	});
	fireEvent.change(screen.getByPlaceholderText("Enter author"), {
		target: { value: "vaishnavi" },
	});
	fireEvent.change(screen.getByPlaceholderText("Enter time taken to read"), {
		target: { value: 15 },
	});
	fireEvent.change(screen.getByPlaceholderText("Enter image url"), {
		target: {
			value:
				"https://images.blinkist.com/images/books/609155fc6cee070007ccb3ad/1_1/470.jpg",
		},
	});
	fireEvent.change(screen.getByPlaceholderText("Category"), {
		target: { value: "Education" },
	});
	fireEvent.click(screen.getByText("SUBMIT"));
});
