import React from "react";
import CustomInput from "./CustomInput";

export default {
	title: "atoms/CustomInput",
	component: CustomInput,
	argTypes: {
		variant: {
			control: {
				type: "radio",
				options: ["filled", "standard", "outlined"],
			},
		},
	},
};

const Template = (args) => <CustomInput {...args} />;

export const Default = Template.bind({});

Default.args = {
	variant: "outlined",
	type: "text",
	placeholder: "Enter input",
};
