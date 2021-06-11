import React from "react";

import { Button } from "@material-ui/core";

function TabButton({ variant, color, name, onClick, endIcon }) {
	return (
		<Button onClick={onClick} endIcon={endIcon} color={color} variant={variant}>
			{name}
		</Button>
	);
}

export default TabButton;
