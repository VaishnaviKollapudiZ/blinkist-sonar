import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MediaCard from "../../molecules/Card/MediaCard";
import { useAuth0 } from "@auth0/auth0-react";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
}));

export default function MyLibrary({
	buttonName,
	books,
	status,
	onClick,
	libraryBooks,
}) {
	const classes = useStyles();

	const findByBookId = (id) => {
		if (libraryBooks) {
			let i = 0;
			while (i < libraryBooks.length) {
				if (libraryBooks[i].id === id) {
					return true;
				}
				i++;
			}
		}
	};
	const { isAuthenticated } = useAuth0();
	let visible = true;

	// eslint-disable-next-line array-callback-return
	const bookList = books.map((item) => {
		if (findByBookId(item.id) || !isAuthenticated) {
			visible = false;
		} else {
			visible = true;
		}
		if (item.currentlyReadingStatus === status) {
			return (
				<Grid item xs={12} md={4} sm={6} key={item.id}>
					<MediaCard
						buttonName={buttonName}
						title={item.title}
						author={item.author}
						category={item.category}
						image={item.image}
						readTime={item.readTime}
						onClick={() => onClick(item.id, status)}
						visible={visible}
					/>
				</Grid>
			);
		}
	});
	return (
		<Grid container className={classes.root} spacing={2}>
			{bookList}
		</Grid>
	);
}
