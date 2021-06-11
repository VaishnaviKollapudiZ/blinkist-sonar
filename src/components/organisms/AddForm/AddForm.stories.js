import React from "react";
import AddForm from "./AddForm";

export default {
	title: "organisms/AddForm",
	argTypes: {
		variant: {
			control: {
				type: "radio",
				options: ["filled", "standard", "outlined"],
			},
		},
	},
};
const Template = (args) => <AddForm {...args} />;
export const DefaultForm = Template.bind({});

DefaultForm.args = {
	variant: "outlined",
};
