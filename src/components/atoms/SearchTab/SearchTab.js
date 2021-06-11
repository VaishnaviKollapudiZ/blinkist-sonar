import React from "react";
import { IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/SearchSharp";

function SearchTab({ onClick, title }) {
	return (
		<div>
			<IconButton
				onClick={onClick}
				role="icon"
				title={title}
				data-testid="search-tab-test"
			>
				<Search />
			</IconButton>
		</div>
	);
}

export default SearchTab;
