import React from "react";
import SearchTab from "./SearchTab";

import { cleanup, screen, fireEvent, render } from "@testing-library/react";

afterEach(cleanup);

test("testing search bar ", () => {
	const handleClick = jest.fn();
	render(<SearchTab onClick={handleClick} />);
	const searchElement = screen.getByTestId("search-tab-test");
	fireEvent.click(searchElement);
	expect(handleClick).toHaveBeenCalled();
});
