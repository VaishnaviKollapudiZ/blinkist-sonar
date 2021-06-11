import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	paper: {
		marginRight: theme.spacing(2),
	},
}));

export default function Account() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
	return (
		<div className={classes.root}>
			<div>
				{!isAuthenticated && (
					<Button
						ref={anchorRef}
						aria-controls={open ? "menu-list-grow" : undefined}
						aria-haspopup="true"
						onClick={handleToggle}
					>
						Account
					</Button>
				)}
				{isAuthenticated && (
					<Tooltip title={user.name} arrow>
						<Button
							ref={anchorRef}
							aria-controls={open ? "menu-list-grow" : undefined}
							aria-haspopup="true"
							onClick={handleToggle}
						>
							<Avatar alt={user.name} src={user.picture} />
						</Button>
					</Tooltip>
				)}
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					transition
					disablePortal
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === "bottom" ? "center top" : "center bottom",
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id="menu-list-grow"
										onKeyDown={handleListKeyDown}
									>
										{!isAuthenticated && (
											<MenuItem onClick={() => loginWithRedirect()}>
												Login
											</MenuItem>
										)}

										{isAuthenticated && (
											<MenuItem onClick={() => logout()}>Logout</MenuItem>
										)}
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</div>
	);
}
