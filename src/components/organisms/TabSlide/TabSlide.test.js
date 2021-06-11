import React from "react";
import {
	fireEvent,
	render,
	cleanup,
	screen,
	waitFor,
	act,
} from "@testing-library/react";
import TabSlide from "./TabSlide";

afterEach(cleanup);

global.fetch = jest.fn(() => Promise.resolve());
describe("Tab Slide Tests", () => {
	test("renders App component", () => {
		render(<TabSlide exploreStatus={false} />);
		expect(screen.getByText("Currently reading")).toBeInTheDocument();
	});

	test("renders Finished component", () => {
		render(<TabSlide exploreStatus={false} />);
		expect(screen.getByText("Finished")).toBeInTheDocument();
	});

	test("Finished Click component", () => {
		render(<TabSlide exploreStatus={false} />);
		const element = screen.getByText("Finished");
		fireEvent.click(element);
	});
	// test("Add To Library click", () => {
	// 	render(<TabSlide exploreStatus={true} />);
	// 	expect(screen.getByText("+ Add To Library")).toBeTruthy();
	// });
	test("testing click - books in library", async () => {
		render(<TabSlide exploreStatus={false} />);
		fireEvent.click(screen.getAllByText("Mark as completed")[0]);
		fireEvent.click(screen.getByText("Finished"));
		fireEvent.click(screen.getAllByText("Read Once Again"));
	});
});
