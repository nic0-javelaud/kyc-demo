<script lang="ts">
    import { workflow, streaming } from '$lib/stores.svelte';
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    let { Icon, IconExecuted, onclick, step, classChange, tooltip, id } = $props();
</script>


<Tooltip.Provider delayDuration={200}>
    <Tooltip.Root>
        <Tooltip.Trigger>
            <div {id} class="flex items-center justify-center z-30">
                {#if (IconExecuted && workflow.history.includes(step))}
                    <IconExecuted {onclick} class="{classChange ? classChange : ""} relative w-12 h-12 bg-muted p-3 border-2 rounded-lg cursor-pointer hover:scale-110 transition-all "/>
                {:else}
                    <Icon {onclick} class="z-30 relative w-12 h-12 bg-muted p-3 border-2 rounded-lg cursor-pointer hover:scale-110 transition-all "/>
                        
                {/if}
                {#if streaming.current_step === step}
                    <Icon class="z-20 absolute w-12 h-12 bg-muted p-3 border-2 rounded-lg cursor-pointer hover:scale-110 transition-all  opacity-70 animate-ping"/>
                {/if}
            </div>
        </Tooltip.Trigger>
        <Tooltip.Content>
            <p>{tooltip}</p>
        </Tooltip.Content>
    </Tooltip.Root>
</Tooltip.Provider>
    

