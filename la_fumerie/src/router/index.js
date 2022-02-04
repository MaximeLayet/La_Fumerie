import { createRouter, createWebHistory } from "vue-router";
import Cities from "../views/Cities";
import Montpellier from "../views/Montpellier";
import Grenoble from "../views/Grenoble";

const routes = [
	{
		path: "/",
		name: "Cities",
		component: Cities
	},
	{
		path: "/montpellier",
		name: "Montpellier",
		component: Montpellier
	},
	{
		path: "/grenoble",
		name: "Grenoble",
		component: Grenoble
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
