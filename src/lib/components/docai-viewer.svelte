<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    import Checkbox from "./ui/checkbox/checkbox.svelte";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { marked } from "marked";

    let { data } = $props();
</script>

<div class="flex flex-col gap-4 p-4">
    <div class="font-bold text-lg">Data extracted from document provided</div>
    <Accordion.Root type="single" value="structured">
        <Accordion.Item value="markdown">
            <Accordion.Trigger>Markdown</Accordion.Trigger>
            <Accordion.Content>
                <div class="flex flex-col gap-6">
                    {#if data}
                        {#each data.pages as page, index}
                        <fieldset class="grid gap-6 rounded-lg border p-4">
                            <legend class="-ml-1 px-1 text-sm font-medium capitalize"> Page {index + 1} / {data.pages.length} </legend>
                            <div>{@html marked.parse(page.markdown)}</div>
                        </fieldset>
                        {/each}
                    {/if}
                </div>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="structured">
            <Accordion.Trigger>Structured data</Accordion.Trigger>
            <Accordion.Content>
                <div class="flex flex-col gap-6">
                    {#if data}
                    {#each Object.entries(JSON.parse(data.document_annotation)) as [field, value]}
                        <!-- The field is a string - Show value in text input -->
                        {#if typeof value === "string"}
                            <div class="grid gap-3">
                            <Label for="top-p"><span class="capitalize">{field}</span></Label>
                            <Input id="top-p" value={value} type="text" placeholder="" />
                        </div>
                        <!-- The field is a boolean - Show value as checkbox -->
                        {:else if typeof value === "boolean"}
                            <div class="grid gap-3">
                                <Label for="top-p capitalize">{field}</Label>
                                <Checkbox checked={value} id="top-p" placeholder="" />
                            </div>
                        <!-- The field is a number - Show value in number input -->
                        {:else if typeof value === "number"}
                            <div class="grid gap-3">
                                <Label for="top-p capitalize">{field}</Label>
                                <Input id="top-p" value={value} type="number" placeholder="" />
                            </div>
                        <!-- The field is an Array - Check if array of values or objects -->
                        {:else if Array.isArray(value)}
                            <!-- The field is an Array of objects - Show value in text input -->
                            {#if typeof value[0] === "object"}
                                <fieldset class="grid gap-6 rounded-lg border p-4">
                                    <legend class="-ml-1 px-1 text-sm font-medium capitalize"> {field} </legend>
                                    {#each value as entry,index}
                                        <fieldset class="grid gap-6 rounded-lg border p-4">
                                        <legend class="-ml-1 px-1 text-sm font-medium">Entry {index + 1} / {value.length} </legend>
                                            {#each Object.entries(entry) as [subfield, subvalue]}
                                                {#if typeof subvalue === "string"}
                                                    <div class="grid gap-3">
                                                        <Label for="top-p">{subfield}</Label>
                                                        <Input id="top-p" value={subvalue} type="text" placeholder="" />
                                                    </div>
                                                <!-- The field is a boolean - Show value as checkbox -->
                                                {:else if typeof subvalue === "boolean"}
                                                    <div class="grid gap-3">
                                                        <Label for="top-p">{subfield}</Label>
                                                        <Checkbox checked={subvalue} id="top-p" placeholder="" />
                                                    </div>
                                                <!-- The field is a number - Show value in number input -->
                                                {:else if typeof subvalue === "number"}
                                                    <div class="grid gap-3">
                                                        <Label for="top-p">{subfield}</Label>
                                                        <Input id="top-p" value={subvalue} type="number" placeholder="" />
                                                    </div>
                                                {/if}
                                            {/each}
                                        </fieldset>
                                    {/each}
                                </fieldset>
                            {:else}
                                <fieldset class="grid gap-6 rounded-lg border p-4">
                                    <legend class="-ml-1 px-1 text-sm font-medium"> {field} </legend>
                                    {#each value as item}
                                        <div class="flex items-center gap-2">
                                            <Input id="top-p" value={item} type="text" placeholder="" />
                                        </div>
                                    {/each}
                                </fieldset>
                            {/if}
                        {/if}
                    {/each}
                    {/if}
                </div>
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
</div>

