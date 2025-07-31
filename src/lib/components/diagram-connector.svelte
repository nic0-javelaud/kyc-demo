<script lang="ts">
    import { workflow } from "@/stores.svelte";
    
    let { l, r, t, b, step } = $props();

</script>

<svg class="absolute w-screen h-screen z-0">
    <line x1={l} y1={t} x2={r} y2={b } class:completed={workflow.history.includes(step)} class="stroke-slate-200" stroke-width="6"/>
</svg>

<style >
    .completed {
        stroke: var(--color-slate-400)
    }
</style>