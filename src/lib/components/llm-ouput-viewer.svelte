<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    import { ShieldAlert } from "@lucide/svelte";
    import { marked } from "marked";

    let { data } = $props();
</script>

<div class="flex flex-col gap-8 p-4">
    <div class="font-bold text-lg">Analysis & Recommendations</div>
    <div class="flex gap-2">
        <span class="font-bold">Tier Risk:</span>
        <ShieldAlert class="text-amber-500" />
        <span class="font-semibold text-amber-500">Medium</span>
    </div>
    <div class="flex flex-col gap-2">
        <div class="font-bold">Recommendations for next steps</div>
        <div class="flex flex-col gap-4">
            {@html marked.parse(data.next_steps)}
        </div>
    </div>
    <Accordion.Root type="single">
        <Accordion.Item value="risk_assessment">
            <Accordion.Trigger>Risk profile assessment - Full response</Accordion.Trigger>
            <Accordion.Content>
                <div class="flex flex-col gap-6">
                    {@html marked.parse(data.risk_assessment)}
                </div>
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
</div>