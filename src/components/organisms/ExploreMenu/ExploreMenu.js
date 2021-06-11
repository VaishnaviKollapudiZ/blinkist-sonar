import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TabButton from "../../atoms/Button/TabButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { ListItem, ListItemIcon, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faRocket,
	faLandmark,
	faFlask,
	faGraduationCap,
	faLightbulb,
	faHeartbeat,
	faGlobeAsia,
} from "@fortawesome/free-solid-svg-icons";

const StyledMenu = withStyles({
	paper: {
		border: "1px solid #d3d4d5",
		width: "100%",
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		"&:focus": {
			backgroundColor: theme.palette.primary.main,
			"& .MuiListItemIcon-root, & .MuiListItemText-primary": {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);

export default function ExploreMenu({ handleExploreMenu }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [expand, setExpand] = useState(false);

	const toggle = () => {
		if (expand === false) {
			setExpand(true);
		} else {
			setExpand(false);
		}
	};
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		toggle();
	};

	const handleClose = () => {
		setAnchorEl(null);
		toggle();
	};

	const search = (value) => {
		console.log("Inside the Explore Menu, you clicked on ==>" + value);
		handleExploreMenu(value); //send the category name that has been clicked
	};
	return (
		<div>
			{/* Grid of categories */}
			<TabButton
				name="Explore"
				onClick={handleClick}
				endIcon={
					(expand === false && <ExpandMoreIcon />) ||
					(expand === true && <ExpandLessIcon />)
				}
			/>
			<StyledMenu
				id="customized-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<Grid container direction={"row"}>
					<Grid item xs={12} sm={6} md={4}>
						<StyledMenuItem onClick={handleClose}>
							<ListItem>
								<ListItemIcon>
									<FontAwesomeIcon icon={faRocket} />
								</ListItemIcon>
								<TabButton
									name="Entrepreneurship"
									onClick={() => search("Entrepreneurship")}
								/>
							</ListItem>
						</StyledMenuItem>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<StyledMenuItem onClick={handleClose}>
							<ListItem>
								<ListItemIcon>
									<FontAwesomeIcon icon={faLandmark} />
								</ListItemIcon>
								<TabButton name="Politics" onClick={() => search("Politics")} />
							</ListItem>
						</StyledMenuItem>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<StyledMenuItem onClick={handleClose}>
							<ListItem>
								<ListItemIcon>
									<FontAwesomeIcon icon={faFlask} />
								</ListItemIcon>
								<TabButton name="Science" onClick={() => search("Science")} />
							</ListItem>
						</StyledMenuItem>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<StyledMenuItem onClick={handleClose}>
							<ListItem>
								<ListItemIcon>
									<FontAwesomeIcon icon={faGraduationCap} />
								</ListItemIcon>
								<TabButton
									name="Education"
									onClick={() => search("Education")}
								/>
							</ListItem>
						</StyledMenuItem>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<StyledMenuItem onClick={handleClose}>
							<ListItem>
								<ListItemIcon>
									<FontAwesomeIcon icon={faGlobeAsia} />
								</ListItemIcon>
								<TabButton
									name="Economics"
									onClick={() => search("Economics")}
								/>
							</ListItem>
						</StyledMenuItem>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<StyledMenuItem onClick={handleClose}>
							<ListItem>
								<ListItemIcon>
									<FontAwesomeIcon icon={faLightbulb} />
								</ListItemIcon>
								<TabButton
									name="Motivation"
									onClick={() => search("Motivation")}
								/>
							</ListItem>
						</StyledMenuItem>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<StyledMenuItem onClick={handleClose}>
							<ListItem>
								<ListItemIcon>
									<FontAwesomeIcon icon={faHeartbeat} />
								</ListItemIcon>
								<TabButton name="Health" onClick={() => search("Health")} />
							</ListItem>
						</StyledMenuItem>
					</Grid>
				</Grid>
			</StyledMenu>
		</div>
	);
}
