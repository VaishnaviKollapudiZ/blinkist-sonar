import React, { useState, useMemo } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {
	MenuItem,
	Select,
	Typography,
	InputLabel,
	FormControl,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import CustomInput from "../../atoms/Input/CustomInput";
import CustomButton from "../../atoms/Button/CustomButton";
import { makeStyles } from "@material-ui/styles";

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
});

const formCategoryStyles = makeStyles({
	root: {
		width: "93.5%",
		paddingTop: "3%",
		marginLeft: "3%",
	},
	finishButton: {
		width: "90%",
		height: "45px",
		padding: "0px",
		margin: "5%",
		marginTop: "2%",
	},
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
		paddingTop: "0px",
	},
}))(MuiDialogContent);

function AddForm({ variant, formHandle }) {
	const [open, setOpen] = useState(true);
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [readTime, setReadTime] = useState("");
	const [category, setCategory] = useState("");
	const [image, setImage] = useState("");
	const [selected, setSelected] = useState(false);
	// const [showErrors, setShowErrors] = useState(false);
	const classes = formCategoryStyles();
	const handleClose = () => {
		console.log("closed");
		formHandle();
		setOpen(false);
	};

	const handleSubmit = (event) => {
		const newBook = {
			id: 20 + Math.random(20000),
			title,
			author,
			readTime,
			category,
			currentlyReadingStatus: true,
			image,
		};
		addBook(newBook);
		// window.location.reload();
		formHandle();
	};
	const addBook = async (newBook) => {
		await fetch("/books", {
			method: "POST",
			body: JSON.stringify(newBook),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		});
	};
	// const checkTitle = (event) => {
	// 	const { value } = event.target;
	// 	setShowErrors(value.length < 8);
	// 	setTitle(value);
	// };
	// const memoizedErrors = useMemo(() => <Errors active={showErrors} />, [
	// 	showErrors,
	// ]);
	const isEnabled =
		title.length > 0 &&
		author.length > 0 &&
		readTime.length > 0 &&
		image.length > 0 &&
		Number(readTime) > 0 &&
		selected === true;

	return (
		<div>
			<Dialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
			>
				<DialogTitle id="customized-dialog-title" onClose={handleClose}>
					ADD BOOK
				</DialogTitle>
				<DialogContent>
					<CustomInput
						variant={variant}
						label="TITLE"
						placeholder="Enter title"
						type="text"
						value=""
						onChange={(event) => setTitle(event.target.value)}
					/>
					<br></br>
					<CustomInput
						variant={variant}
						label="AUTHOR"
						placeholder="Enter author"
						type="text"
						value=""
						onChange={(event) => setAuthor(event.target.value)}
					/>
					<br></br>
					<CustomInput
						variant={variant}
						label="READ TIME"
						placeholder="Enter time taken to read"
						type="number"
						value=""
						onChange={(event) => setReadTime(event.target.value)}
					/>
					<br></br>
					{/* select category */}
					<CustomInput
						variant={variant}
						label="COVER IMAGE"
						placeholder="Enter image url"
						type="text"
						value=""
						onChange={(event) => setImage(event.target.value)}
					/>

					<FormControl variant="outlined" className={classes.root}>
						<InputLabel id="demo-simple-select-outlined-label">
							Category
						</InputLabel>

						<Select
							defaultValue=""
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							label="Category"
							placeholder="Category"
							onChange={(event) => {
								setCategory(event.target.value);
								setSelected(true);
							}}
						>
							<MenuItem value={"Entrepreneurship"}> Entrepreneurship</MenuItem>
							<MenuItem value={"Politics"}>Politics</MenuItem>
							<MenuItem value={"Science"}>Science</MenuItem>
							<MenuItem value={"Education"}>Education</MenuItem>
							<MenuItem value={"Economics"}>Economics</MenuItem>
							<MenuItem value={"Motivation"}>
								Motivation and inspiration
							</MenuItem>
							<MenuItem value={"Health"}>Health and Nutrition</MenuItem>
						</Select>
					</FormControl>
				</DialogContent>
				<DialogActions>
					<CustomButton
						size="small"
						color="primary"
						variant="contained"
						label="SUBMIT"
						className={classes.finishButton}
						onClick={() => handleSubmit()}
						disabled={!isEnabled}
					/>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default AddForm;
