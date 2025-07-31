<script lang="ts">
    import { streaming, workflow } from "@/stores.svelte";
      import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
    import DocaiViewer from "./docai-viewer.svelte";
    import ImageViewer from "./image-viewer.svelte";
    import RulesViewer from "./rules-viewer.svelte";
    import CompDatabase from "./comp-database.svelte";
    import LlmOuputViewer from "./llm-ouput-viewer.svelte";
    let { selected_step } = $props();
</script>

<ScrollArea class="h-[calc(100vh-100px)]">
    {#if selected_step === `identification_doc`}
        <ImageViewer filename={workflow.steps[0].data.image} />
    {:else if  selected_step === `authorization_doc`}
        <ImageViewer filename={workflow.steps[1].data.image} />
    {:else if  selected_step === `proof_address`}
        <ImageViewer filename={workflow.steps[2].data.image} />
    {:else if selected_step === `identification_doc_results`}
        <DocaiViewer data={streaming.data.identification_doc_ocr} />
    {:else if  selected_step === `authorization_doc_results`}
        <DocaiViewer data={streaming.data.authorization_doc_ocr} />
    {:else if  selected_step === `proof_address_results`}
        <DocaiViewer data={streaming.data.proof_address_ocr} />
    {:else if selected_step === `identification_doc_validation`}
        <RulesViewer data={streaming.data.identification_doc_validation} />
    {:else if  selected_step === `authorization_doc_validation`}
        <RulesViewer data={streaming.data.authorization_doc_validation} />
    {:else if  selected_step === `proof_address_validation`}
        <RulesViewer data={streaming.data.proof_address_validation} />
    {:else if selected_step === `comp_with_db`}
        <CompDatabase data={streaming.data.comparison_with_db} />
    {:else if selected_step === `llm_output`}
        <LlmOuputViewer data={streaming.data.llm_output} />
    {:else}
        {#if workflow.status === `running`}
            <div class="text-slate-300 text-xl italic w-full h-full flex items-center justify-center animate-pulse">Workflow running. Please wait or select a step to view the result.</div>
        {:else if workflow.status === `completed`}
            <div class="text-slate-300 text-xl italic w-full h-full flex items-center justify-center">Workflow completed. Please select a step to view the results.</div>
        {:else}
            <div class="text-slate-300 text-xl italic w-full h-full flex items-center justify-center">No workflow running. Press button to get started.</div>
        {/if}
    {/if}
</ScrollArea>
