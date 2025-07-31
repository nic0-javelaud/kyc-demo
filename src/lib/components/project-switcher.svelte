<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { useSidebar } from "$lib/components/ui/sidebar/index.js";
    import { config } from "@/config.svelte";
	import ChevronsUpDownIcon from "@lucide/svelte/icons/chevrons-up-down";
	import PlusIcon from "@lucide/svelte/icons/plus";

	const sidebar = useSidebar();

</script>

<Sidebar.Menu>
	<Sidebar.MenuItem>
		<DropdownMenu.Root >
			<DropdownMenu.Trigger>
				{#snippet child({ props })}
					<Sidebar.MenuButton
						{...props}
						size="lg"
						class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
					>
						<div
							class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg p-0"
						>
							<img src="{config.company.logo}" alt="logo" class="size-8 rounded-lg shrink-0 " />
						</div>
						<div class="grid flex-1 text-left text-sm leading-tight">
							<span class="truncate font-medium">
								{config.company.name}
							</span>
							<span class="truncate text-xs">Agentic workflow demo</span>
						</div>
						<ChevronsUpDownIcon class="ml-auto" />
					</Sidebar.MenuButton>
				{/snippet}
			</DropdownMenu.Trigger>
			<DropdownMenu.Content
				class="w-(--bits-dropdown-menu-anchor-width) min-w-56 rounded-lg"
				align="start"
				side={sidebar.isMobile ? "bottom" : "right"}
				sideOffset={4}
			>
				<DropdownMenu.Label class="text-muted-foreground text-xs">Clients</DropdownMenu.Label>
				
				<DropdownMenu.Separator />
				<DropdownMenu.Item class="gap-2 p-2">
					<div class="flex size-6 items-center justify-center rounded-md border bg-transparent"
					>
						<PlusIcon class="size-4" />
					</div>
					<div class="text-muted-foreground font-medium">Add client</div>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</Sidebar.MenuItem>
</Sidebar.Menu>
