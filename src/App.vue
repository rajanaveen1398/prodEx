<template>
	<div class="app-container">
		<SideBar />
		<div class="w-100"><router-view /></div>
	</div>
</template>

<script>
	import SideBar from "./components/Sidebar";

	export default {
		name: "App",
		components: {
			SideBar,
		},
	};
</script>

<style>
	.app-container {
		padding: 0 10%;
		background-color: rgb(247, 248, 253);
		display: flex;
		font-size: 14px;
		height: 100%;
	}
	.pointer {
		cursor: pointer;
	}
	button:disabled {
		cursor: not-allowed;
	}
	#app,
	html,
	body {
		height: 100%;
		width: 100%;
	}
</style>
