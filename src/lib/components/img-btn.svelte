<script lang="ts">
    import { workflow, streaming } from '$lib/stores.svelte';
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    import { Button } from "$lib/components/ui/button/index.js";
    let { logo, logoExecuted, onclick, step, tooltip, id = "placeholder" } = $props();
</script>


<Tooltip.Provider delayDuration={200}>
    <Tooltip.Root>
        <Tooltip.Trigger>
            <div {id} class="flex items-center justify-center z-30 cursor-pointer">
                {#if logoExecuted && workflow.history.includes(step)}
                    <img {onclick} src={logoExecuted} alt="logoExecuted" class="relative w-12 h-12 p-3 bg-[#111111] border-2 rounded-lg cursor-pointer hover:scale-110 transition-all z-30">
                {:else}
                    <img {onclick} src={logo} alt="logo" class="relative w-12 h-12 p-3 bg-[#111111] border-2 rounded-lg cursor-pointer hover:scale-110 transition-all z-30 ">
                {/if}
                {#if streaming.current_step === step}
                    <img src={logo} alt="logoAnimation" class="absolute w-12 h-12 bg-[#111111] p-3 border-2 rounded-lg cursor-pointer z-20  opacity-70 animate-ping"/>
                {/if} 
            </div>
        </Tooltip.Trigger>
        <Tooltip.Content>
            <p>{tooltip}</p>
        </Tooltip.Content>
    </Tooltip.Root>
</Tooltip.Provider>
    

