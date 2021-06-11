import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core";
import { ListItem, ListItemText } from "@material-ui/core";
import TimeIcon from "@material-ui/icons/AccessTime";
import CustomButton from "../../atoms/Button/CustomButton";
const useStyles = makeStyles({
	root: {
		maxWidth: 400,
	},
	titleStyle: {
		fontSize: "1rem",
		fontWeight: 700,
		lineHeight: 1.33,
		color: "#03314B",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
	authorStyle: {
		fontsize: " 1rem",
		fontWeight: 500,
		lineHeight: 1.5,
		color: "#6D787E",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
	timeStyle: {
		fontSize: "0.875rem",
		fontWeight: 400,
		lineHeight: 1.57,
		color: "#6D787E",
		display: "flex",
		flexWrap: "wrap",
	},
	finishButton: {
		width: "100%",
		height: "45px",
	},
});
const MediaCard = ({
	title,
	author,
	readTime,
	buttonName,
	onClick,
	image,
	visible,
	category,
}) => {
	const classes = useStyles();
	console.log(title, visible);
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia component="img" alt="Image" image={image} title="" />
				<CardContent>
					<Typography className={classes.titleStyle} gutterBottom noWrap>
						{title}
					</Typography>
					<Typography className={classes.authorStyle} gutterBottom>
						{author}
					</Typography>

					<ListItem>
						<TimeIcon />

						<ListItemText className={classes.timeStyle}>
							{readTime} minute read
						</ListItemText>
					</ListItem>
				</CardContent>
			</CardActionArea>
			{visible && (
				<CardActions>
					<CustomButton
						className={classes.finishButton}
						size="small"
						color="primary"
						variant="contained"
						label={buttonName}
						onClick={onClick}
					/>
				</CardActions>
			)}
		</Card>
	);
};

export default MediaCard;
