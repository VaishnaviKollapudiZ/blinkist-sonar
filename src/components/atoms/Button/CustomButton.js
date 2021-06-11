import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
// 	root: {
// 		finishButton: {
// 			finishButton: {
// 				width: "100%",
// 				height: "45px",
// 			},
// 		},
// 	},
// });
function CustomButton({
	variant,
	color,
	label,
	onClick,
	size,
	endIcon,
	className,
	disabled,
}) {
	// const classes = useStyles();
	return (
		<Button
			className={className}
			size={size}
			variant={variant}
			color={color}
			onClick={onClick}
			disabled={disabled}
			data-testid="custom-button-test"
		>
			{label}
			{endIcon}
		</Button>
	);
}

export default CustomButton;
