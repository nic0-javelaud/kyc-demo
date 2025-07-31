<script lang="ts">
    import Button from "@/components/ui/button/button.svelte";
    import Input from "@/components/ui/input/input.svelte";
    import Label from "@/components/ui/label/label.svelte";
    import { config } from "@/config.svelte";
</script>

<div class="flex flex-col h-full w-full gap-4 px-4 pb-4">
    <Label>Company name</Label>
    <Input placeholder="App name" bind:value={config.company.name} />
    <!-- <Label>Brand color (hex)</Label>
    <Input placeholder="Color" bind:value={config.company.color} /> -->
    <Button href="/">Back home</Button>
</div>
