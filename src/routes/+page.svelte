<script lang="ts">
    import RightPanel from "@/components/right-panel.svelte";
    import Timeline from "@/components/timeline.svelte";
    import Button from "@/components/ui/button/button.svelte";
    import { config, diagram } from "@/config.svelte";
    import { state, streaming, workflow } from "@/stores.svelte";
    import { page } from '$app/state';
    import { Loader2Icon } from "@lucide/svelte";
    import { onMount } from "svelte";

    const runSequentially = async (array : any[] ) => {
        for (const step of array) {
            streaming.current_step = step.label; 
            workflow.history.push(step.label);           
            console.log(step.label);
            await new Promise(resolve => setTimeout(resolve, step.execution_time));   
            console.log(step.label, `${step.label} completed in ${step.execution_time / 1000} seconds`);         
        }
    }

    const runWorkflow = async () => {
        workflow.status = "running";
        await runSequentially(workflow.steps);
        console.log("Workflow completed");
        streaming.current_step = "completed";
        workflow.status = "completed";
    }

    const setDiagramConnectors = () => {
        const c1 = document.getElementById("r2c1")?.offsetLeft;
        const c2 = document.getElementById("r2c2")?.offsetLeft;
        const c3 = document.getElementById("r2c3")?.offsetLeft;
        const r1 = document.getElementById("r1c1")?.offsetTop;
        const r2 = document.getElementById("r2c1")?.offsetTop;
        const r3 = document.getElementById("r3c1")?.offsetTop;
        const r4 = document.getElementById("r4c2")?.offsetTop;
        const r5 = document.getElementById("r5c1")?.offsetTop;
        const r6 = document.getElementById("r6")?.offsetTop;
        const r7 = document.getElementById("r7")?.offsetTop;
        console.log(`c1: ${c1}, c2: ${c2}, c3: ${c3}, r1: ${r1}, r2: ${r2}, r3: ${r3}, r4: ${r4}, r5: ${r5}, r6: ${r6}, r7: ${r7}`);

        diagram.columns = { 
            "c1": {
                left: c1 - 32,
                center: c1 - 32 +48/2,
                right: c1 - 32 + 48
            },
            "c2": {
                left: c2 - 32,
                center: c2 - 32 +48/2,
                right: c2 - 32 + 48
            },
            "c3": {
                left: c3 - 32,
                center: c3 - 32 +48/2,
                right: c3 - 32 + 48
            }
        };
        diagram.rows = {
            "r1": {
                top: r1 - 10,
                center: r1 - 10 + 48/2,
                bottom: r1 - 10 + 48
            },
            "r2": {
                top: r2 - 10,
                center: r2 - 10 + 48/2,
                bottom: r2 - 10 + 48
            },
            "r3": {
                top: r3 - 10,
                center: r3 - 10 + 48/2,
                bottom: r3 - 10 + 48
            },
            "r4": {
                top: r4 - 10,
                center: r4 - 10 + 48/2,
                bottom: r4 - 10 + 48
            },
            "r5": {
                top: r5 - 10,
                center: r5 - 10 + 48/2,
                bottom: r5 - 10 + 48
            },
            "r6": {
                top: r6 - 10,
                center: r6 - 10 + 48/2,
                bottom: r6 - 10 + 48
            },
            "r7": {
                top: r7 - 10,
                center: r7 - 10 + 48/2,
                bottom: r7 - 10 + 48
            }
        };
        console.log(diagram);
    };
    
    onMount(() => {
        setInterval(() => {
            if (page.url.pathname === "/") {
                const top = document.getElementById("r2c1")?.offsetTop - 10;
                const left = document.getElementById("r2c1")?.offsetLeft - 32;
                if( diagram.rows.r2.top !== top || diagram.columns.c1.left !== left) {
                    console.log(`recalculating diagram connectors`);
                    setDiagramConnectors();
                } 
            }
        }, 1000);
        setDiagramConnectors();
    });
    $effect(() => {
        console.log(config.company.color);
    });

</script>

<div class="flex h-full w-full gap-4 px-4 pb-4">
    <!-- Main -->
    <div class="flex flex-col grow-2 h-full gap-4 overflow-y-auto w-5/12]">
        <div class="bg-muted/50 rounded-xl p-4 flex flex-col justify-between gap-4 overflow-y-auto h-full grow-0">
            <!--  -->
            <div class="font-semibold text-slate-700">Execution timeline</div>
            <Timeline />
            <Button disabled={workflow.status === "running"} onclick={runWorkflow} class="bg-[{config.company.color}] cursor-pointer z-50 flex gap-2">
                {#if workflow.status === "running"}
                    <Loader2Icon class="animate-spin" />
                    Running...
                {:else}
                    Start workflow
                {/if}
            </Button>
        </div>
    </div>

    <div class="flex flex-col grow-1 h-full gap-4 overflow-y-auto w-7/12">
        <!-- Side - Top-right corner -->
        <div class="bg-muted/50 rounded-xl p-4 flex flex-col gap-4 overflow-y-auto h-full grow-0">
            <RightPanel selected_step={state.app.right_panel} />
        </div>

        <!-- Side - Bottom-right corner -->
        <!-- <div class="bg-muted/50 rounded-xl p-4 flex flex-col gap-4 overflow-y-auto h-1/4 grow-0">
           
        </div> -->
    </div>
</div>