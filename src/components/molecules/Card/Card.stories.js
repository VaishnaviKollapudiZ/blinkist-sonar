import React from "react";
import MediaCard from "./MediaCard";

export default {
	title: "molecules/Cards",
};

const Template = (args) => <MediaCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	buttonName: "Mark as Completed",
	title: "TITLE",
	author: "author name",
	readTime: "15",
	category: "Mindfulness & Happiness",
	image: "https://statusnew.in/wp-content/uploads/2020/03/smile.jpg",
	visible: true,
};
