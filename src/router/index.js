import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "../components/HelloWorld";
import Dashboard from "../pages/Dashboard";
import TrackAndTrace from "../pages/TrackAndTrace";
import ImportAssets from "../pages/ImportAssets";
import Reports from "../pages/Reports";
import AlertsAndRules from "../pages/AlertsAndRules";
import Settings from "../pages/Settings";
import AuditLogs from "../pages/AuditLogs";

const routes = [
	{
		path: "/",
		redirect: "/dashboard",
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: Dashboard,
	},
	{
		path: "/track-and-trace",
		name: "Track & Trace",
		component: TrackAndTrace,
	},
	{
		path: "/import-assets",
		name: "Import Assets",
		component: ImportAssets,
	},
	{
		path: "/reports",
		name: "Reports",
		component: Reports,
	},
	{
		path: "/alerts-and-rules",
		name: "Alerts & Rules",
		component: AlertsAndRules,
	},
	{
		path: "/settings",
		name: "Settings",
		component: Settings,
	},
	{
		path: "/audit-logs",
		name: "Audit Logs",
		component: AuditLogs,
	},
	{
		path: "/hello-world",
		name: "HelloWorld",
		component: HelloWorld,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
