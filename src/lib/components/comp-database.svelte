<script lang="ts">
    import { Database } from "@lucide/svelte";
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    let { data } = $props();    
</script>

<div class="flex flex-col gap-4 p-4">
    <div class="font-bold text-lg">Cross-validation - Consolidated profile | Database</div>
    {#each data.results as check}
            <div>
                <div class="flex gap-2">
                    {#if check.warning}
                        <div class="text-amber-500">⚠️</div>
                    {:else}
                        <div class="text-green-500">✓</div>
                    {/if}
                    <div>
                        <span class="font-semibold text-slate-700" >
                            {check.label}:
                        </span> {check.value}
                    </div>
                    {#if check.external}
                        <Tooltip.Provider>
                            <Tooltip.Root>
                                <Tooltip.Trigger>
                                    <Database class="text-slate-500 place-self-center" size="16"/>
                                </Tooltip.Trigger>
                                <Tooltip.Content>
                                    <p>Added from external source</p>
                                </Tooltip.Content>
                            </Tooltip.Root>
                        </Tooltip.Provider>
                    {/if}
                </div>
                {#if check.warning}
                    <div class="ml-8 text-sm text-slate-500">
                        {check.warning}
                    </div>
                {/if}
            </div>
    {/each}
</div>