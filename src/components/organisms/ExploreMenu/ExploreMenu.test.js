import React from "react";
import ExploreMenu from "./ExploreMenu";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";

afterEach(cleanup);

test("renders Explore component", () => {
	const onChange = jest.fn;
	render(<ExploreMenu handleExploreMenu={onChange} />);
	const exploreButton = screen.getByText("Explore");
	fireEvent.click(exploreButton);
	expect(screen.getByText("Politics")).toBeInTheDocument();
	fireEvent.click(screen.getByText("Politics"));
	fireEvent.click(screen.getByText("Entrepreneurship"));
	fireEvent.click(screen.getByText("Science"));
	fireEvent.click(screen.getByText("Education"));
	fireEvent.click(screen.getByText("Economics"));
	fireEvent.click(screen.getByText("Motivation"));
	fireEvent.click(screen.getByText("Health"));
});
