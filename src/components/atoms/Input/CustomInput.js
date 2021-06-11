import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const styles = makeStyles({
	root: {
		margin: "3%",
		"& input::placeholder": {
			fontSize: "20px",
		},
		width: "93%",
	},
});
function CustomInput({ variant, label, placeholder, type, onChange }) {
	const classes = styles();
	return (
		<TextField
			data-testid="change-input-test"
			className={classes.root}
			variant={variant}
			label={label}
			type={type}
			placeholder={placeholder}
			onChange={onChange}
		/>
	);
}

export default CustomInput;
