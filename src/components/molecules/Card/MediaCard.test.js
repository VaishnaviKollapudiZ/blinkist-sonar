import React from "react";
import MediaCard from "./MediaCard";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";

afterEach(cleanup);

test("testing a card", () => {
	const handleClick = jest.fn();
	render(
		<MediaCard
			title="title of the book"
			author="vaishu"
			readTime="20"
			buttonName="Mark as completed"
			category="Science"
			visible={true}
			onClick={handleClick}
		/>
	);
	expect(screen.getByText("title of the book")).toBeInTheDocument();
	expect(screen.getByText("20 minute read")).toBeInTheDocument();
});
