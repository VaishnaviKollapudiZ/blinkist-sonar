import { AppBar, Toolbar, Container, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import TabButton from "../../atoms/Button/TabButton";
import CustomInput from "../../atoms/Input/CustomInput";
import Logo from "../../atoms/Logo/Logo";
import SearchTab from "../../atoms/SearchTab/SearchTab";
import AddForm from "../AddForm/AddForm";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import Account from "../Account/Account";

import TabSlide from "../TabSlide/TabSlide";
import { useAuth0 } from "@auth0/auth0-react";

const styles = makeStyles({
	root: {
		backgroundColor: "white",
		color: "black",
		display: "inline-flex",
	},
	accountStyle: {
		float: "right",
		marginTop: "3.5%",
		marginRight: "3%",
	},
});
function Header() {
	const classes = styles();
	const [searchValue, setSearchValue] = useState("");
	const [exploreStatus, setExploreStatus] = useState(false);
	const [value, setValue] = useState(0);

	//0-no form, 1-shows add form 2-opens the search button

	const openLibrary = () => {
		setValue(0);
		setSearchValue("");
		setExploreStatus(false);
	};
	const toggle = (val) => {
		if (val === 2) {
			setValue(0);
			// setSearchValue("");
			openLibrary();
		} else {
			setValue(2);
		}
	};

	const searchBar = (val) => {
		setExploreStatus(true);
		setSearchValue(val);
	};

	const searchExploreCategory = (val) => {
		setExploreStatus(true);
		setSearchValue(val);
	};

	const { isAuthenticated } = useAuth0();
	return (
		<div>
			<AppBar position="static" elevation={0} className={classes.root}>
				<Toolbar>
					<Logo handleClick={openLibrary} />

					<SearchTab title="searchTab" onClick={() => toggle(value)} />
					{/* explore,my library,addbook */}
					{(value === 0 || value === 1) && (
						<ExploreMenu
							handleExploreMenu={(val) => {
								searchExploreCategory(val);
							}}
						/>
					)}
					{isAuthenticated && (value === 0 || value === 1) && (
						<div>
							<TabButton name="My Library" onClick={openLibrary} />
							{isAuthenticated && (
								<TabButton
									name="Add Book"
									onClick={() => {
										setValue(1);
									}}
								/>
							)}
						</div>
					)}
					{value === 2 && (
						<CustomInput
							variant="standard"
							placeholder="Search for titles and authors"
							type="text"
							value=""
							onChange={(event) => {
								searchBar(event.target.value);
								console.log(event.target.value);
							}}
						/>
					)}
				</Toolbar>
			</AppBar>
			<div className={classes.accountStyle}>
				<Account />
			</div>

			<Container maxWidth="md">
				<div>
					<TabSlide
						searchValue={searchValue}
						exploreStatus={exploreStatus}
					></TabSlide>

					{value === 1 && (
						<AddForm
							variant="outlined"
							formHandle={() => {
								setValue(0);
							}}
						/>
					)}
				</div>
			</Container>
		</div>
	);
}

export default Header;
