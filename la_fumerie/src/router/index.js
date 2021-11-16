import { createRouter, createWebHistory } from "vue-router";
import CheckAge from "../views/CheckAge";
import Main from "../views/Main";

const routes = [
	{
		path: "/",
		name: "CheckAge",
		component: CheckAge
	},
	{
		path: "/main",
		name: "Main",
		component: Main
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
