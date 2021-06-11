import React from "react";
import TabButton from "./TabButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default {
	title: "atoms/TabButton",
};

const Template = (args) => <TabButton {...args} />;

//export const Primary = () => <TabButton name="Currently Reading"/>
export const Primary = Template.bind({});
Primary.args = {
	name: "Currently Reading",
};

export const DropDown = Template.bind({});
DropDown.args = {
	name: "Explore",
	endIcon: <ExpandMoreIcon />,
};
