import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import MyLibrary from "./MyLibrary";

let books = [
	{
		id: 1,
		title: "Steve Jobs",
		author: "Walter Isaacson",
		readTime: "20",
		category: "Entrepreneurship",
		image:
			"https://images.blinkist.com/images/books/608a9c296cee070007228a21/1_1/470.jpg",
		currentlyReadingStatus: true,
	},
	{
		id: 3,
		title: "The Bully Pulpit",
		author: "Goodwin",
		readTime: "19",
		category: "Politics",
		image:
			"https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/250.jpg",
		currentlyReadingStatus: false,
	},
	{
		id: 7,
		title: "The Pegan Diet",
		author: "Dr. Mark Hyman",
		readTime: "15",
		category: "Health",
		image:
			"https://images.blinkist.com/images/books/607d9d2c6cee070007991263/1_1/470.jpg",
		currentlyReadingStatus: true,
	},
];
let libraryBooks = [
	{
		id: 7,
		title: "The Pegan Diet",
		author: "Dr. Mark Hyman",
		readTime: 15,
		category: "Health",
		image:
			"https://images.blinkist.com/images/books/607d9d2c6cee070007991263/1_1/470.jpg",
		currentlyReadingStatus: true,
	},
];
afterEach(cleanup);

describe("Library Testing", () => {
	const handleClick = jest.fn();

	it("checking the function call", () => {
		render(
			<MyLibrary
				books={books}
				libraryBooks={libraryBooks}
				buttonName="Mark as Completed"
				status={true}
				onClick={handleClick}
			/>
		);
		expect(screen.getByText("The Pegan Diet")).toBeInTheDocument();
		expect(screen.queryByText("The Bully Pulpit")).toBeNull();
	});
});
