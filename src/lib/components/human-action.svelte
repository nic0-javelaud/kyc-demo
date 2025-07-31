<script lang="ts">
    // Import UI components
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import * as ToggleGroup from "$lib/components/ui/toggle-group/index.js";
    // Import icons
	import Check from "@lucide/svelte/icons/check";
    import X from "@lucide/svelte/icons/x";
    // Import global stores
    import { workflow, signal_sent } from "$lib/stores.svelte.js";
    // Import abraxas functions
    import { startWorkflow, sendWorkflowSignal  } from "$lib/abraxas.js";

    // Define props
    let { currentStep, fa_cases } = $props();

    // Define local reactive stores
    let file_report = $state() as FileList; // To store the uploaded file

    const uploadFileMistral = async (file: File) => {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${import.meta.env.VITE_MISTRAL_API_KEY}`);
        const body = new FormData();
        body.append("purpose", "ocr");
        body.append("file", file, file.name);
        const response = await fetch("https://api.mistral.ai/v1/files", {
            method: "POST",
            headers,
            body,
            redirect: "follow"
        });
        const data = await response.json();
        console.log(`Uploaded file to Mistral`, data);
        return data;
    };

    const getSignedURL = async (id: string) => {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${import.meta.env.VITE_MISTRAL_API_KEY}`);
        const response = await fetch(`https://api.mistral.ai/v1/files/${id}/url?expiry=24`, {
            method: "GET",
            headers,
            redirect: "follow"
        });
        const data = await response.json();
        console.log(`Received signed URL from Mistral`, data);
        return data;
    };

    const handleFileUpload = async () => {
        if (file_report[0] && !localStorage.getItem('signedURL')) {
            const uploadedFile = await uploadFileMistral(file_report[0]);
            if (uploadedFile.id) {
                const signedURL = await getSignedURL(uploadedFile.id);
                localStorage.setItem('signedURL', signedURL.url);
            }
        }
    };

    const handleSendSignalSelectCauses = async () => {
        console.log(`Sending signal to workflow`, workflow.data.execution_id);
        await sendWorkflowSignal(workflow.data.execution_id, `set_is_hitl_approved`, {"is_hitl_approved":true});
        signal_sent.selection = true;
    };

    const handleSendSignalTestValidation = async () => {
        console.log(`Sending signal to workflow`, workflow.data.execution_id);
        sendWorkflowSignal(workflow.data.execution_id, `set_is_assumption_approved`, {"is_assumption_approved":true})
        signal_sent.validation = true;
        
    };
</script>

<div class="bg-muted/50 rounded-xl col-span-2 row-span-2 p-4 shrink-0 flex flex-col gap-4">
    <!-- Step 1 File Upload if fiele_report is empty -->
    {#if !file_report}
        <div class="font-semibold text-slate-700">Action required</div>
        <div class="grid w-full items-center gap-1.5">
            <Label for="picture">Upload report to get started</Label>
            <Input id="picture" bind:files={file_report} onchange={handleFileUpload} type="file" />
        </div>
    {:else if !currentStep}
        <div class="font-semibold text-slate-700">Action required</div>
        <Button variant="outline" onclick={()=>startWorkflow(`nico-j-sandbox`, { "user_id": 1 , "document_url": localStorage.getItem('signedURL')})}>Start workflow</Button>
    {:else if currentStep == "docai"}
        <div class="text-slate-300 text-xl italic w-full h-full flex items-center justify-center animate-pulse">Workflow running. Please wait.</div>
    {:else if currentStep == "fa_cases"}
        <div class="text-slate-300 text-xl italic w-full h-full flex items-center justify-center animate-pulse">Workflow running. Please wait.</div>
    {:else if currentStep == "select_causes"}
        <div class="font-semibold text-slate-700">Action required</div>
        {#if fa_cases}
            <div class="flex gap-4">
                <div class="text-slate-500 text-sm place-self-center">Select potential root causes to include in test plan</div>
                <ToggleGroup.Root type="multiple">
                    {#each fa_cases as fa_case}
                        <ToggleGroup.Item class="w-36" value={fa_case.id}>{fa_case.root_cause_identified}</ToggleGroup.Item>
                        <!-- <Badge variant="secondary" class="bg-slate-100 text-slate-700 cursor-pointer">{fa_case.root_cause_identified}</Badge> -->
                    {/each}
                </ToggleGroup.Root>
            </div>
        {/if}
        <Button variant="outline" onclick={handleSendSignalSelectCauses}>Create test plan</Button>
    {:else if currentStep == "generate_test_plan"}
        <div class="text-slate-300 text-xl italic w-full h-full flex items-center justify-center animate-pulse">Workflow running. Please wait.</div>
    {:else if currentStep == "validate_assumptions" && signal_sent.validation == false}
        <div class="font-semibold text-slate-700">Notes from testing</div>
        <div class="flex gap-4 items-center">
            <Input type="textarea" placeholder="" class="h-24 w-full line-clamp-3 text-wrap" />
            <Button variant="secondary" class="bg-slate-500 text-white hover:bg-slate-600 hover:text-white cursor-pointer hover:scale-105">
                <X class="" />
            </Button>
            <Button variant="secondary" class="bg-slate-500 text-white hover:bg-slate-600 hover:text-white cursor-pointer hover:scale-105" onclick={handleSendSignalTestValidation}>
                <Check class="" />
            </Button>
        </div>
    {:else if workflow.data.status === "COMPLETED"}
        <div class="text-slate-300 text-xl italic w-full h-full flex items-center justify-center">Workflow completed. Finalize report below.</div>
    {:else}
        <div class="text-slate-300 text-xl italic w-full h-full flex items-center justify-center">Workflow running. Please wait.</div>
    {/if}
</div>