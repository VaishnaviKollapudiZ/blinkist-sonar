import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import "@fontsource/raleway";

const defaultTheme = createMuiTheme();

const baseTheme = createMuiTheme({
	typography: {
		fontSize: 10,
		fontFamily: "Raleway",
		h4: {
			padding: "3.125rem 0 2.5rem",
			fontSize: "2.2rem",
			color: "#03314B",
			fontWeight: 600,
		},
	},
	spacing: 10,
	container: {
		primary: {
			borderRadius: defaultTheme.spacing(1),
			padding: defaultTheme.spacing(2),
		},
		secondary: {
			borderRadius: defaultTheme.spacing(1),
			padding: defaultTheme.spacing(2),
		},
	},
	palette: {
		//type: "dark",
		primary: {
			main: "#22c870",
		},
	},
	overrides: {
		MuiTypography: {
			root: {
				fontFamily: "Raleway",
				color: "#044366",
			},
		},
		MuiContainer: {
			root: {
				width: 944,
			},
		},
		MuiAppBar: {
			root: {
				width: 700,
				backgroundColor: "#FFFFFF",
			},
			colorPrimary: {
				backgroundColor: "#FFFFFF",
			},
		},
		MuiToolbar: {
			gutters: {
				padding: 0,
				paddingLeft: "0px",
				paddingRight: 0,
			},
			root: {
				textTransform: "capitalize",
			},
			regular: {
				"@media (min-width: 600px)": {
					paddingLeft: "0px",
				},
			},
		},
		MuiList: {
			root: {
				backgroundColor: "#F1F6F4",
			},
		},
		MuiCardMedia: {
			media: {
				height: "50%",
				width: "100%",
			},
		},
		MuiButtonBase: {
			root: {
				borderRadius: "0px",
			},
		},
		// MuiIconButton: {
		// 	root: { paddingTop: "1%" },
		// },

		MuiButton: {
			root: {
				textTransform: "capitalize",
				disableElevation: true,
				fontSize: "0.7rem",
				fontWeight: 700,
				lineHeight: 1,
				color: "#03314b",
				"&:hover": {
					textDecoration: "underline #22c870",
					textDecorationThickness: "2px",
				},
			},
			containedPrimary: {
				borderRadius: "0px",

				backgroundColor: "#FFFFFF",
				color: "#0365F2",
				"&:hover": {
					textDecoration: "none",
					textDecorationThickness: "2px",
					color: "#FFFFFF",
					backgroundColor: " #0365F2",
				},
			},
			containedSizeSmall: {
				padding: "11px 10px",
				fontWeight: "bold",
			},
		},
		MuiCardActions: {
			root: {
				border: "1px solid #BAC8CE",
				borderRadius: "0px",
				padding: 0,
			},
		},
		MuiDialog: {
			paper: {
				width: "400px",
			},
		},
		MuiDialogTitle: {
			root: {
				display: "inline-flex",
				justifyContent: "space-between",
			},
		},
		MuiDialogActions: {
			root: { margin: 0, padding: 0, display: "inline" },
		},
		MuiTab: {
			root: {
				fontSize: "0.7rem",
				padding: "14px",
			},
			textColorPrimary: {
				textTransform: "none",

				"@media (min-width: 700px)": {
					minWidth: "32%",
				},

				"@media (max-width: 700px)": {
					minWidth: "50%",
				},

				"&$selected": {
					color: "#68DF81",
				},
				"&:hover": {
					borderColor: "#6d787e",
				},
				borderBottom: ".125rem solid #6d787e",
			},
			wrapper: {
				alignItems: "baseline",
				fontWeight: "bold",
				paddingBottom: "0.5rem",
			},
		},
		MuiGrid: {
			root: {
				width: "100%",
			},
		},
		MuiCardContent: {
			root: {
				border: "1px solid #BAC8CE",
			},
		},
	},
});

const responsiveFontTheme = responsiveFontSizes(baseTheme);

export default responsiveFontTheme;
