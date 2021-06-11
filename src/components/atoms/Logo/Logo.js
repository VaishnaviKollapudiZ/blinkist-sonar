import { makeStyles } from "@material-ui/core";
import React from "react";
import logoImage from "../Logo/Blinklist.png";
//when you click on the logo, it takes you back to your library

const styles = makeStyles({
	root: {
		width: "160px",
		height: "100px",
	},
});
function Logo(props) {
	const classes = styles();
	return (
		<img
			className={classes.root}
			src={logoImage}
			alt="Blinkist App"
			onClick={props.handleClick}
		/>
	);
}

export default Logo;
