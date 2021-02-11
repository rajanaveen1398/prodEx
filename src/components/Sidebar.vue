<template>
	<div class="sidebar-container">
		<ul>
			<li v-for="route in routes" :key="route.name">
				<router-link :to="`${route.path}`">
					<div
						class="d-flex my-2"
						:style="
							currentRoute == route.name
								? 'color:#007bff; border-right: 4px solid'
								: ''
						"
						@click="currentRoute = route.name"
					>
						<div class="mr-3"><i :class="`${route.icon}`" /></div>
						<div>{{ route.name }}</div>
					</div>
				</router-link>
			</li>
		</ul>
		<!-- <router-link to="/">Dashboard</router-link>
		<router-link to="/">Home</router-link>
		<router-link to="/">Home</router-link>
		<router-link to="/">Home</router-link>
		<router-link to="/">Home</router-link>
		<router-link to="/">Home</router-link>
		<router-link to="/track-and-trace">About</router-link> -->
	</div>
</template>

<script>
	export default {
		name: "SideBar",
		data() {
			return {
				routes: [
					{ name: "Dashboard", path: "/dashboard", icon: "fa fa-border-all" },
					{
						name: "Track & Trace",
						path: "/track-and-trace",
						icon: "far fa-list-alt",
					},
					{
						name: "Import Assets",
						path: "/import-assets",
						icon: "fa fa-download",
					},
					{ name: "Reports", path: "/reports", icon: "fa fa-poll" },
					{
						name: "Alerts & Rules",
						path: "/alerts-and-rules",
						icon: "far fa-envelope",
					},
					{ name: "Settings", path: "/settings", icon: "fa fa-cog" },
					{
						name: "Audit Logs",
						path: "/audit-logs",
						icon: "fa fa-clipboard-check",
					},
				],
				currentRoute: "",
			};
		},
		watch: {
			$route(to) {
				this.currentRoute = to.name;
			},
		},
	};
</script>

<style scoped>
	.sidebar-container {
		background-color: white;
		width: 20%;
		padding-top: 64px;
	}
	ul {
		list-style-type: none;
		padding: 0 0 0 12px;
		margin: 0;
	}
	li a {
		text-decoration: none;
		color: black;
	}
	a:hover {
		color: #007bff;
	}
	.icon {
		background-color: lightpink;
	}
</style>
