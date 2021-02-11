<template>
	<div>
		<div class="d-flex justify-content-between align-items-center my-2">
			<div class="d-flex justify-content-between">
				<div class="form-check mr-4">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">Inventory</label>
				</div>
				<div class="form-check mr-4">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">Missing</label>
				</div>
				<div class="form-check mr-4">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">Unassigned</label>
				</div>
				<div class="form-check mr-4">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">Deleted</label>
				</div>
			</div>
			<button
				type="button"
				class="btn btn-primary mr-1 p-0"
				style="font-size: 12px; height: 30px; width: 88px"
			>
				Search Filter
			</button>
		</div>
		<div class="card">
			<div class="card-body p-0" style="padding: 10px 0 !important">
				<div
					class="d-flex justify-content-between"
					style="padding:0 10px !important"
				>
					<div class="d-flex align-items-center">
						<div>
							<i
								class="fa fa-search fa position-absolute"
								style="padding: 9px; color: grey;"
							/>
							<input
								id="search"
								placeholder="SEARCH"
								@change="search(val)"
								v-model="searchKey"
							/>
						</div>
						<button
							type="button"
							class="btn btn-secondary btn-icon mx-1"
							style="background-color: white; border-color: gray; color:black"
						>
							<i class="fa fa-file-excel fa-sm" />
						</button>
						<button
							type="button"
							class="btn btn-primary mr-1 p-0"
							style="font-size: 12px; height: 30px; width: 36px"
						>
							GO
						</button>
						<div class="form-check">
							<input
								type="checkbox"
								class="form-check-input"
								id="exampleCheck1"
							/>
							<label class="form-check-label" for="exampleCheck1"
								>Include attribute</label
							>
						</div>
					</div>
					<div class="d-flex align-items-center">
						<strong>Actions</strong>
						<div class="dropdown ml-1">
							<button
								class="btn btn-secondary dropdown-toggle py-0 px-2"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
								style="height: 30px !important; font-size: 14px"
							>
								Update Attribute
							</button>
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a class="dropdown-item" href="#">Action</a>
								<a class="dropdown-item" href="#">Another action</a>
								<a class="dropdown-item" href="#">Something else here</a>
							</div>
						</div>
						<button type="button" class="btn btn-secondary btn-icon ml-1">
							<i class="fa fa-list-ul fa-sm" />
						</button>
						<button type="button" class="btn btn-secondary btn-icon ml-1">
							<i class="fa fa-save  fa-sm" />
						</button>
						<button type="button" class="btn btn-secondary btn-icon ml-1">
							<i class="fa fa-download fa-sm" />
						</button>
						<button type="button" class="btn btn-secondary btn-icon ml-1">
							<i class="fa fa-clipboard-check fa-sm" />
						</button>
						<button type="button" class="btn btn-secondary btn-icon ml-1">
							<i class="fa fa-cog fa-sm" />
						</button>
					</div>
				</div>
				<div
					class="d-flex justify-content-between align-items-center my-2"
					style="padding:0 10px !important"
				>
					<div class="d-flex align-items-center">
						<span>Showing</span>
						<button
							type="button"
							class="btn btn-secondary btn-direction mx-1"
							@click="filterData('left')"
							:disabled="currentPage == 1"
						>
							<i class="fa fa-chevron-left fa-xs" />
						</button>
						<div class="p-1" style="border: 1px solid grey; border-radius: 4px">
							{{ currentPage }} of {{ Math.ceil(paginationLength / 10) }}
						</div>
						<button
							type="button"
							class="btn btn-secondary btn-direction ml-1"
							@click="filterData('right')"
							:disabled="currentPage == Math.ceil(paginationLength / 10)"
						>
							<i class="fa fa-chevron-right fa-xs" />
						</button>
					</div>
					<div class="d-flex">
						<span class="mr-3">Total {{ assetsTotal.length }} Assets</span>|
						<span class="ml-3">Selected(1)</span>
					</div>
				</div>
				<div v-for="(asset, index) in filteredAssets" :key="index">
					<div
						id="assetComp"
						:key="index"
						class="d-flex justify-content-between align-items-center py-2"
						:style="
							index == selectedKey ? 'background-color:rgb(247, 248, 253)' : ''
						"
					>
						<div class="d-flex justify-content-center align-items-center">
							<div
								class="d-flex justify-content-center align-items-center"
								style="height:40px; width: 40px"
							>
								<input type="checkbox" :id="`checkbox${index}`" />
							</div>
							<div>
								<img src="../../assets/image.jpg" height="40" width="40" />
							</div>
							<div
								class="d-flex flex-column ml-4 pointer"
								@click="selectItem(index)"
							>
								<span style="font-size: 10px; color: grey">Asset name</span>
								<span style="font-size: 12px"
									>{{ asset.name
									}}{{ (currentPage - 1) * 10 + index + 1 }}</span
								>
							</div>
						</div>
						<div class="d-flex flex-column">
							<span style="font-size: 10px; color: grey">Asset type</span>
							<span style="font-size: 12px">{{ asset.type }}</span>
						</div>
						<div class="d-flex flex-column">
							<span style="font-size: 10px; color: grey">Location</span>
							<span style="font-size: 12px">{{ asset.location }}</span>
						</div>
						<div class="d-flex flex-column">
							<span style="font-size: 10px; color: grey">Last seen</span>
							<span style="font-size: 12px">{{ asset.lastSeen }}</span>
						</div>
						<div id="actionGroup" style="margin-right: 10px">
							<i class="fa fa-chevron-down fa-sm mr-2" />
							<button
								type="button"
								class="btn btn-secondary btn-icon ml-1 action-icon"
								style="background-color: rgb(45, 206, 190); border-color: rgb(45, 206, 190);"
							>
								<i class="fa fa-eye fa-sm" />
							</button>
							<button
								type="button"
								class="btn btn-secondary btn-icon ml-1 action-icon"
								style="background-color: rgb(250, 143, 63); border-color: rgb(250, 143, 63);"
							>
								<i class="fa fa-edit fa-sm" />
							</button>
							<button
								type="button"
								class="btn btn-secondary btn-icon ml-1 action-icon"
								style="background-color: rgb(113, 103, 228); border-color: rgb(113, 103, 228);"
							>
								<i class="fa fa-trash-alt fa-sm" />
							</button>
						</div>
					</div>
					<hr v-if="index != filteredAssets.length - 1" class="m-0" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import json from "../../mock/index.json";
	export default {
		name: "SearchTab",
		components: {},
		data() {
			return {
				assetsTotal: json,
				currentPage: 1,
				currentTab: 1,
				selectedKey: null,
				searchKey: "",
			};
		},
		methods: {
			selectItem(key) {
				this.selectedKey = key;
				document.getElementById(`checkbox${key}`).checked = true;
			},
			filterData(direction) {
				if (direction == "left") {
					this.currentPage -= 1;
				} else {
					this.currentPage += 1;
				}
			},
		},
		computed: {
			filteredAssets() {
				if (this.searchKey) {
					return (
						this.assetsTotal
							?.filter((item) =>
								item.name.includes(this.searchKey.toLowerCase())
							)
							.slice((this.currentPage - 1) * 10, this.currentPage * 10) || []
					);
				} else {
					return (
						this.assetsTotal.slice(
							(this.currentPage - 1) * 10,
							this.currentPage * 10
						) || []
					);
				}
			},
			paginationLength() {
				if (this.searchKey) {
					return this.assetsTotal?.filter((item) =>
						item.name.includes(this.searchKey.toLowerCase())
					).length;
				} else {
					return this.assetsTotal.length || [];
				}
			},
		},
	};
</script>

<style lang="scss" scoped>
	.card {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 0.3s;
	}
	#search {
		border: 1px solid grey;
		border-radius: 15px;
		height: 30px;
		padding: 0 12px 0 30px;
		width: 130px;
		font-size: 12px;
		&:focus {
			outline: 0px;
		}
	}
	input::-webkit-input-placeholder {
		color: grey !important;
	}
	input:-moz-placeholder {
		color: grey !important;
	}
	input::-moz-placeholder {
		color: grey !important;
	}
	input:-ms-input-placeholder {
		color: grey !important;
	}
	.btn-icon {
		height: 30px;
		width: 30px;
		padding: 0;
	}
	.btn-primary {
		background-color: rgb(203, 217, 254);
		border-color: rgb(203, 217, 254);
		color: rgb(50, 64, 93);
	}
	.btn-secondary {
		background-color: rgb(227, 227, 227);
		border-color: rgb(227, 227, 227);
		color: black;
	}
	.btn-direction {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 20px;
		width: 20px;
		padding: 0px;
	}
	#assetComp:hover {
		background-color: rgb(247, 248, 253);
	}
	.action-icon {
		color: white;
		&:hover {
			color: black;
		}
	}
</style>
