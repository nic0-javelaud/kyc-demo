<script lang="ts">
    import { state, workflow } from '$lib/stores.svelte';

    import IconBtn from './icon-btn.svelte';
    import ImgBtn from './img-btn.svelte';
    import { diagram, widgets } from "@/config.svelte";
    import DiagramConnector from "./diagram-connector.svelte";

    // $effect(()=>{
    //     console.log(state.app.right_panel)
    //     console.log(diagram);
    // })

</script>

<div id="timeline" class="grid grid-cols-3 grid-rows-6 gap-x-4 gap-y-12 items-center justify-center align-middle">
    <!-- First row - Documents -->
    <!-- <div id="r1c1" class="flex items-center justify-center z-30"> -->
    <!-- Widgets -->
    {#each Object.entries(widgets) as [key, widget]}
        {#if widget.type == "IconBtn"}
            <IconBtn id={key} onclick={()=>state.app.right_panel = widget.associatedPanel} Icon={widget.icon} IconExecuted={widget.iconExecuted} step={widget.step} classChange={widget.classChange} tooltip={widget.tooltip} animation={widget.hasAnimation} onWorkflowStatus={widget.onWorkflowStatus} />
        {:else if widget.type == "ImgBtn"}
            <ImgBtn id={key} onclick={()=>state.app.right_panel = widget.associatedPanel} logoExecuted={widget.logoExecuted} step={widget.step} logo={widget.logo} tooltip={widget.tooltip} />
        {:else if widget.type == "empty"}
            <div id={key} ></div>
        {/if}
    {/each}
        <!-- <IconBtn id="r1c1" onclick={()=>state.app.right_panel = `identification_doc`} Icon={FileCheck2} IconExecuted={null} step="identification_doc" classChange="" tooltip="Identification document" animation={false} /> -->
    <!-- </div> -->
    
    <!-- Connectors -->
    <!-- First row - Documents -->
    <DiagramConnector l={diagram.columns.c1.center} t={diagram.rows.r1.bottom} r={diagram.columns.c1.center} b={diagram.rows.r2.top} step="identification_doc_ocr" />
    <DiagramConnector l={diagram.columns.c2.center} t={diagram.rows.r1.bottom} r={diagram.columns.c2.center} b={diagram.rows.r2.top} step="authorization_doc_ocr" />
    <DiagramConnector l={diagram.columns.c3.center} t={diagram.rows.r1.bottom} r={diagram.columns.c3.center} b={diagram.rows.r2.top} step="proof_address_ocr" />
    <!-- Second row - Mistral -->
    <DiagramConnector l={diagram.columns.c1.center} t={diagram.rows.r2.bottom} r={diagram.columns.c1.center} b={diagram.rows.r3.top} step="identification_doc_validation" />
    <DiagramConnector l={diagram.columns.c2.center} t={diagram.rows.r2.bottom} r={diagram.columns.c2.center} b={diagram.rows.r3.top} step="authorization_doc_validation" />
    <DiagramConnector l={diagram.columns.c3.center} t={diagram.rows.r2.bottom} r={diagram.columns.c3.center} b={diagram.rows.r3.top} step="proof_address_validation" />
    <!-- Third row - Attribute checks -->
    <DiagramConnector l={diagram.columns.c1.center} t={diagram.rows.r3.bottom} r={diagram.columns.c1.center} b={diagram.rows.r4.center} step="customer_profile" />
    <DiagramConnector l={diagram.columns.c1.center} t={diagram.rows.r4.center} r={diagram.columns.c2.left} b={diagram.rows.r4.center} step="customer_profile" />
        <!--  -->
    <DiagramConnector l={diagram.columns.c2.center} t={diagram.rows.r3.bottom} r={diagram.columns.c2.center} b={diagram.rows.r4.top} step="customer_profile" />
        <!--  -->
    <DiagramConnector l={diagram.columns.c3.center} t={diagram.rows.r3.bottom} r={diagram.columns.c3.center} b={diagram.rows.r4.center} step="customer_profile" />
    <DiagramConnector l={diagram.columns.c2.right} t={diagram.rows.r4.center} r={diagram.columns.c3.center} b={diagram.rows.r4.center} step="customer_profile" />
    <!-- Fourth row - Customer profile -->
    <DiagramConnector l={diagram.columns.c2.center} t={diagram.rows.r4.bottom} r={diagram.columns.c2.center} b={diagram.rows.r5.center} step="database_query" />
    <!-- Fifth row - Database -->
    <DiagramConnector l={diagram.columns.c1.right} t={diagram.rows.r5.center} r={diagram.columns.c2.left} b={diagram.rows.r5.center} step="comp_with_db" />
    <DiagramConnector l={diagram.columns.c2.center} t={diagram.rows.r5.bottom} r={diagram.columns.c2.center} b={diagram.rows.r6.top} step="comp_with_db" />
    <!-- Sixth row - Mistral -->
    <svg class="absolute w-screen h-screen z-0">
        <line x1={diagram.columns.c2.center} y1={diagram.rows.r6.bottom} x2={diagram.columns.c2.center} y2={diagram.rows.r7.top} class:completed={workflow.status === "completed"} class="stroke-slate-200" stroke-width="6"/>
    </svg>    
</div>

<style >
    .completed {
        stroke: var(--color-slate-400)
    }
</style>