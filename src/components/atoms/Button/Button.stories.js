import React from "react";
import CustomButton from "./CustomButton";

export default {
	title: "atoms/CustomButton",
	component: CustomButton,
	argTypes: {
		color: {
			control: {
				type: "radio",
				options: ["primary", "secondary"],
			},
		},
	},
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	color: "primary",
	variant: "outlined",
	label: "click me",
};
