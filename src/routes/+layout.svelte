<script lang="ts">
	import '../app.css';
	// Import UI components
	import AppSidebar from "$lib/components/app-sidebar.svelte";
	import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
	import { Separator } from "$lib/components/ui/separator/index.js";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";

	import { config } from "$lib/config.svelte";
	
	let { children } = $props();
</script>
<svelte:head>
  <link rel="icon" href="/favicon.svg" />
  <title>Mistral | {config.company.name}</title>
</svelte:head>

<Sidebar.Provider open={false}>
	<AppSidebar />
	<Sidebar.Inset>
		<header
			class="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear"
		>
			<div class="flex items-center gap-2 px-4">
				<Sidebar.Trigger class="-ml-1" />
				<Separator orientation="vertical" class="mr-2 data-[orientation=vertical]:h-4" />
				<Breadcrumb.Root>
					<Breadcrumb.List>
						<Breadcrumb.Item>
								<Breadcrumb.Link href="#">{config.company.name} Demo</Breadcrumb.Link>
							</Breadcrumb.Item>
						<Breadcrumb.Separator />
                        {#each config.app.breadcrumbs as breadcrumb, index}
                            {#if index < config.app.breadcrumbs.length - 1}
                                <Breadcrumb.Item>
                                    <Breadcrumb.Link href="#">{breadcrumb}</Breadcrumb.Link>
                                </Breadcrumb.Item>
                                <Breadcrumb.Separator />
                            {:else}
                                <Breadcrumb.Item>
                                    <Breadcrumb.Page>{breadcrumb}</Breadcrumb.Page>
                                </Breadcrumb.Item>
                            {/if}
                        {/each}
					</Breadcrumb.List>
				</Breadcrumb.Root>
			</div>
		</header>
		<main class="h-full overflow-y-auto w-full">
			{@render children()}
		</main>
	</Sidebar.Inset>
</Sidebar.Provider>