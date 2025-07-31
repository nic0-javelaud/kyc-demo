<script lang="ts">
	import NavMain from "./nav-main.svelte";
	import NavUser from "./nav-user.svelte";
	import ProjectSwitcher from "./project-switcher.svelte";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { ComponentProps } from "svelte";
    import { config } from "@/config.svelte";

	let {
		ref = $bindable(null),
		collapsible = "icon",
		...restProps
	}: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {collapsible} {...restProps} >
	<Sidebar.Header >
		<ProjectSwitcher />
	</Sidebar.Header>
	<Sidebar.Content>
		<NavMain items={config.nav} />
	</Sidebar.Content>
	<Sidebar.Footer>
		<NavUser />
	</Sidebar.Footer>
	<Sidebar.Rail />
</Sidebar.Root>
