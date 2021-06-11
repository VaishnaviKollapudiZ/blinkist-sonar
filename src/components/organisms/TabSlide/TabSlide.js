import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
	Box,
	Typography,
	Paper,
	Tab,
	Tabs,
	Grid,
	makeStyles,
} from "@material-ui/core";
import MyLibrary from "../Library/MyLibrary";
import { useAuth0 } from "@auth0/auth0-react";

const styles = makeStyles({
	librarySpace: {
		paddingTop: "1.5%",
		paddingBottom: "10%",
		fontSize: "1.5rem",
		fontWeight: 900,
	},
});
function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

export default function TabSlide({ searchValue, exploreStatus }) {
	const [value, setValue] = useState(0);

	const [books, setBooks] = useState([]);
	const [libraryBooks, setLibraryBooks] = useState([]);
	const classes = styles();
	const { isAuthenticated } = useAuth0();

	//Fetch all the books in the app
	const fetchAllTheBooks = async () => {
		await fetch("/books")
			.then((response) => {
				return response.json();
			})
			.then((data) => setBooks(data));
	};

	useEffect(() => {
		fetchAllTheBooks();
	}, []);

	//fetch all the books in my library

	const fetchAllLibraryBooks = async () => {
		await fetch("/library")
			.then((response) => {
				return response.json();
			})
			.then((data) => setLibraryBooks(data));
	};

	useEffect(() => {
		fetchAllLibraryBooks();
	}, []);

	const findBookById = (id, bookList) => {
		let i = 0;
		while (i < bookList.length) {
			if (bookList[i].id === id) {
				return i;
			}
			i++;
		}
		return -1;
	};
	//toggles when clicked on "mark as completed" to "read once again" and vice-versa
	const handleClick = async (id, currentlyReadingStatus) => {
		const position = findBookById(id, libraryBooks);
		console.log(position);
		libraryBooks[position].currentlyReadingStatus = !currentlyReadingStatus;

		await fetch("/library/" + id, {
			method: "PUT",
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
			body: JSON.stringify(libraryBooks[position]),
		});
		fetchAllLibraryBooks();
		fetchAllTheBooks();
	};

	//Add a book to library
	const addToLibrary = async (id) => {
		const position = findBookById(id, libraryBooks);

		console.log(position);
		//that means you can add this book to your library
		if (position === -1) {
			const newPosition = findBookById(id, books);

			await fetch("/library", {
				method: "POST",
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
				body: JSON.stringify(books[newPosition]),
			});
		}

		fetchAllLibraryBooks();
		fetchAllTheBooks();
	};

	let categoryBasedBooks = [];
	const searchForBooksByCategory = (allBooks) => {
		let i = 0;

		while (i < allBooks.length) {
			if (
				allBooks[i].category.toLowerCase().indexOf(searchValue.toLowerCase()) >
					-1 ||
				allBooks[i].title.toLowerCase().indexOf(searchValue.toLowerCase()) >
					-1 ||
				allBooks[i].author.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
			) {
				categoryBasedBooks.push(allBooks[i]);
			}

			i++;
		}
	};

	const searchBooks = (booksData) => {
		if (booksData) {
			if (searchValue !== "" && searchValue) {
				searchForBooksByCategory(booksData);
			} else {
				categoryBasedBooks = [...booksData];
			}
		}
		return categoryBasedBooks;
	};
	let exploredBooks;
	//when we click on a category, it should show the list of books belonging to that category

	if (exploreStatus === true) {
		exploredBooks = searchBooks(books);
	} else {
		exploredBooks = searchBooks(libraryBooks);
	}

	return (
		<div>
			{exploreStatus === false && (
				<Paper square elevation={0}>
					{isAuthenticated && (
						<div>
							<Typography className={classes.librarySpace}>
								My Library
							</Typography>
						</div>
					)}

					<Tabs
						value={value}
						indicatorColor="primary"
						textColor="primary"
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
						aria-label="disabled tabs example"
					>
						<Tab label="Currently reading" />
						<Tab label="Finished" />
					</Tabs>

					<TabPanel value={value} index={0}>
						<Grid>
							<MyLibrary
								buttonName="Mark as completed"
								books={exploredBooks}
								status={true}
								onClick={(id, currentlyReadingStatus) =>
									handleClick(id, currentlyReadingStatus)
								}
							/>
						</Grid>
					</TabPanel>

					<TabPanel value={value} index={1}>
						<Grid>
							{libraryBooks && (
								<MyLibrary
									buttonName="Read Once Again"
									books={exploredBooks}
									status={false}
									onClick={(id, currentlyReadingStatus) =>
										handleClick(id, currentlyReadingStatus)
									}
								/>
							)}
						</Grid>
					</TabPanel>
				</Paper>
			)}
			{/* Add a book to library (+to library) */}
			{exploreStatus === true && (
				<div>
					<Grid container spacing={2}>
						<MyLibrary
							buttonName="+ Add To Library"
							books={exploredBooks}
							status={true}
							onClick={(id) => addToLibrary(id)}
							libraryBooks={libraryBooks}
						/>
					</Grid>
				</div>
			)}
		</div>
	);
}
