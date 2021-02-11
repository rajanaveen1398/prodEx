<template>
	<div class="track-header">
		<div class="d-flex justify-content-end align-items-center">
			<span>Add new</span>
			<i
				class="fa fa-plus-circle fa-lg mr-2 ml-3 pointer"
				style="color: blue"
			/>
			<div style="border-left:1px solid #000;height:28px" />
			<i class="fa fa-search fa-lg ml-3 pointer" />
			<i class="far fa-bell fa-lg ml-3 pointer" />
			<i class="far fa-envelope fa-lg ml-3 pointer" />
			<i class="far fa-question-circle fa-lg ml-3 pointer" />
			<i class="far fa-user-circle fa-lg ml-3 pointer" />
		</div>
		<hr class="mb-2" />
		<div class="track-container">
			<div style="font-size: 20px; font-weight: 700">
				Track & Trace
			</div>
			<hr class="my-1" />
			<div class="d-flex px-2">
				<button
					type="button"
					:class="currentTab == 1 ? 'btn tab-active' : 'btn tab'"
					@click="currentTab = 1"
				>
					Search
				</button>
				<button
					type="button"
					:class="currentTab == 2 ? 'btn tab-active' : 'btn tab'"
					@click="currentTab = 2"
				>
					Picked List
				</button>
				<button
					type="button"
					:class="currentTab == 3 ? 'btn tab-active' : 'btn tab'"
					@click="currentTab = 3"
				>
					Saved Search
				</button>
			</div>
			<hr class="m-0" />
			<div v-if="currentTab == 1">
				<SearchTab />
			</div>
			<div v-if="currentTab == 2">
				<PickedListTab />
			</div>
			<div v-if="currentTab == 3">
				<SavedSearchTab />
			</div>
		</div>
	</div>
</template>

<script>
	import SearchTab from "../components/TrackAndTrace/SearchTab";
	import PickedListTab from "../components/TrackAndTrace/PickedListTab";
	import SavedSearchTab from "../components/TrackAndTrace/SavedSearchTab";

	export default {
		name: "TrackAndTrace",
		components: {
			SearchTab,
			PickedListTab,
			SavedSearchTab,
		},
		data() {
			return {
				currentTab: 1,
			};
		},
	};
</script>

<style lang="scss" scoped>
	.track-header {
		background-color: rgb(247, 248, 253);
		padding: 16px 0;
	}
	.track-container {
		padding: 0 8px;
	}
	.btn-primary {
		background-color: rgb(203, 217, 254);
		border-color: rgb(203, 217, 254);
		color: rgb(50, 64, 93);
	}
	.tab {
		width: 150px;
		background: none;
		border-radius: 0;
	}
	.tab-active {
		@extend .tab;
		border-bottom: 2px solid blue;
		color: blue;
	}
	.btn:focus {
		outline: 0;
		box-shadow: none;
	}
</style>
