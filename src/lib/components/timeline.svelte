<script lang="ts">
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    import { state, streaming, workflow } from '$lib/stores.svelte';
    import { 
        File,
        FileCheck,
        FileCheck2,
        FileSearch, 
        Check, 
        X, 
        Database, 
        BrainCircuit, 
        Signature, 
        ShieldAlert, 
        User, 
        IdCard, 
        Shield
    } from '@lucide/svelte';

    import IconBtn from './icon-btn.svelte';
    import ImgBtn from './img-btn.svelte';
    import { config, diagram } from "@/config.svelte";
    import DiagramConnector from "./diagram-connector.svelte";

    $effect(()=>{
        console.log(state.app.right_panel)
        console.log(diagram);
    })

</script>

<div id="timeline" class="grid grid-cols-3 grid-rows-6 gap-x-4 gap-y-12 items-center justify-center align-middle">
    <!-- First row - Documents -->
    <div id="r1c1" class="flex items-center justify-center z-30">
        <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
                <Tooltip.Trigger>
                    <FileCheck2 onclick={()=>state.app.right_panel = `identification_doc`} class="w-12 h-12 bg-muted p-3 border-2 rounded-lg cursor-pointer hover:scale-110 transition-all "/>
                </Tooltip.Trigger>
                <Tooltip.Content>
                    <p>Identification document</p>
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    </div>
    <DiagramConnector l={diagram.columns.c1.center} t={diagram.rows.r1.bottom} r={diagram.columns.c1.center} b={diagram.rows.r2.top} step="identification_doc_ocr" />

    <div id="r1c2" class="flex items-center justify-center z-30">
        <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
                <Tooltip.Trigger>
                    <FileCheck2 onclick={()=>state.app.right_panel = `authorization_doc`} class="w-12 h-12 bg-muted p-3 border-2 rounded-lg cursor-pointer hover:scale-110 transition-all "/>
                </Tooltip.Trigger>
                <Tooltip.Content>
                    <p>Signed authorization document</p>
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    </div>
    <DiagramConnector l={diagram.columns.c2.center} t={diagram.rows.r1.bottom} r={diagram.columns.c2.center} b={diagram.rows.r2.top} step="authorization_doc_ocr" />

    <div id="r1c3" class="flex items-center justify-center z-30">
        <Tooltip.Provider delayDuration={200}>
            <Tooltip.Root>
                <Tooltip.Trigger>
                    <FileCheck2 onclick={()=>state.app.right_panel = `proof_address`} class="w-12 h-12 bg-muted p-3 border-2 rounded-lg cursor-pointer hover:scale-110 transition-all "/>
                </Tooltip.Trigger>
                <Tooltip.Content>
                    <p>Proof of address</p>
                </Tooltip.Content>
            </Tooltip.Root>
        </Tooltip.Provider>
    </div>
    <DiagramConnector l={diagram.columns.c3.center} t={diagram.rows.r1.bottom} r={diagram.columns.c3.center} b={diagram.rows.r2.top} step="proof_address_ocr" />

    <!-- Second row - Mistral -->
    <div id="second-row" class="flex items-center justify-center z-30">
        <ImgBtn id="r2c1" onclick={()=>state.app.right_panel = `identification_doc_results`} logoExecuted={null} step="identification_doc_ocr" logo="/logo.png" tooltip="Analyse and Extract Data - Document AI" />
    </div>
    <DiagramConnector l={diagram.columns.c1.center} t={diagram.rows.r2.bottom} r={diagram.columns.c1.center} b={diagram.rows.r3.top} step="identification_doc_validation" />

    
    <div class="flex items-center justify-center z-30">
        <ImgBtn id="r2c2" onclick={()=>state.app.right_panel = `authorization_doc_results`} logoExecuted={null} step="authorization_doc_ocr" logo="/logo.png" tooltip="Analyse and Extract Data - Document AI" />
    </div>
    <DiagramConnector l={diagram.columns.c2.center} t={diagram.rows.r2.bottom} r={diagram.columns.c2.center} b={diagram.rows.r3.top} step="authorization_doc_validation" />


    <div class="flex items-center justify-center z-30">
        <ImgBtn id="r2c3" onclick={()=>state.app.right_panel = `proof_address_results`} logoExecuted={null} step="proof_address_ocr" logo="/logo.png" tooltip="Analyse and Extract Data - Document AI" />
    </div>
    <DiagramConnector l={diagram.columns.c3.center} t={diagram.rows.r2.bottom} r={diagram.columns.c3.center} b={diagram.rows.r3.top} step="proof_address_validation" />

    <!-- Third row - Attribute checks -->
    <div class="flex items-center justify-center group z-30">
        <IconBtn id="r3c1" onclick={()=>state.app.right_panel = `identification_doc_validation`} Icon={FileSearch} IconExecuted={ShieldAlert} step="identification_doc_validation" classChange="text-amber-500" tooltip="Data validation" />
    </div>
    <DiagramConnector l={diagram.columns.c1.center} t={diagram.rows.r3.bottom} r={diagram.columns.c1.center} b={diagram.rows.r4.center} step="customer_profile" />
    <DiagramConnector l={diagram.columns.c1.center} t={diagram.rows.r4.center} r={diagram.columns.c2.left} b={diagram.rows.r4.center} step="customer_profile" />

    <div class="flex items-center justify-center group z-30">
        <IconBtn id="r3c2" onclick={()=>state.app.right_panel = `authorization_doc_validation`} Icon={FileSearch} IconExecuted={Check} step="authorization_doc_validation" classChange="text-emerald-500" tooltip="Data validation" />
    </div>
    <DiagramConnector l={diagram.columns.c2.center} t={diagram.rows.r3.bottom} r={diagram.columns.c2.center} b={diagram.rows.r4.top} step="customer_profile" />

    <div class="flex items-center justify-center group z-30">
        <IconBtn id="r3c3" onclick={()=>state.app.right_panel = `proof_address_validation`} Icon={FileSearch} IconExecuted={Check} step="proof_address_validation" classChange="text-emerald-500" tooltip="Data validation" />
    </div>
    <DiagramConnector l={diagram.columns.c3.center} t={diagram.rows.r3.bottom} r={diagram.columns.c3.center} b={diagram.rows.r4.center} step="customer_profile" />
    <DiagramConnector l={diagram.columns.c2.right} t={diagram.rows.r4.center} r={diagram.columns.c3.center} b={diagram.rows.r4.center} step="customer_profile" />

    <!-- Fourth row - Customer profile -->
    <div></div>
    <div class="flex items-center justify-center group z-30">
        <IconBtn id="r4c2" onclick={null} Icon={IdCard} IconExecuted={null} step="customer_profile" classChange="" tooltip="Consolidate customer profile" />
    </div>
    <DiagramConnector l={diagram.columns.c2.center} t={diagram.rows.r4.bottom} r={diagram.columns.c2.center} b={diagram.rows.r5.center} step="database_query" />

    <!-- Fifth row - Database -->
    <div></div>
    <div  class="flex items-center justify-center z-30">
        <IconBtn id="r5c1" onclick={null} Icon={Database} IconExecuted={null} step="database_query" classChange="" tooltip="Database query - Pull corresponding customer data" />
    </div>
    <DiagramConnector l={diagram.columns.c1.right} t={diagram.rows.r5.center} r={diagram.columns.c2.left} b={diagram.rows.r5.center} step="comp_with_db" />

    <div  class="flex items-center justify-center z-30">
        <IconBtn id="r5c2" onclick={()=>state.app.right_panel = `comp_with_db`} Icon={BrainCircuit} IconExecuted={null} step="comp_with_db" classChange="" tooltip="Data enrichment & cross-check" />
    </div>
    <DiagramConnector l={diagram.columns.c2.center} t={diagram.rows.r5.bottom} r={diagram.columns.c2.center} b={diagram.rows.r6.top} step="comp_with_db" />
    <div></div>
    <!-- Sixth row - Mistral -->
    <div></div>
    <div class="flex items-center justify-center z-30">
        <ImgBtn id="r6" onclick={()=>state.app.right_panel = `llm`} logoExecuted={null} step="llm" logo="/logo.png" tooltip="Assess risk level - LLM" />
    </div>
    <svg class="absolute w-screen h-screen z-0">
        <line x1={diagram.columns.c2.center} y1={diagram.rows.r6.bottom} x2={diagram.columns.c2.center} y2={diagram.rows.r7.top} class:completed={workflow.status === "completed"} class="stroke-slate-200" stroke-width="6"/>
    </svg>

    <div></div>
    <!-- Seventh row - Report -->
    <div id="r7" class="flex items-center justify-center col-span-3 z-30">
        {#if workflow.status === "completed"}
            <ShieldAlert onclick={()=>state.app.right_panel = `llm_output`} class="relative w-12 h-12 bg-muted p-3 border-2 text-amber-500 rounded-lg cursor-pointer hover:scale-110 transition-all group-hover:text-white group-hover:bg-[#7396c3]/50 group-hover:border-white "/>
        {:else}
            <Shield onclick={()=>state.app.right_panel = `llm_output`} class="relative w-12 h-12 bg-muted p-3 border-2 rounded-lg cursor-pointer hover:scale-110 transition-all group-hover:text-white group-hover:bg-[#7396c3]/50 group-hover:border-white "/>
        {/if}
        
    </div>
</div>

<style >
    .completed {
        stroke: var(--color-slate-400)
    }
</style>