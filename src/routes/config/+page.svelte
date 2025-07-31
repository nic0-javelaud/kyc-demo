<script lang="ts">
    import Button from "@/components/ui/button/button.svelte";
    import Input from "@/components/ui/input/input.svelte";
    import Label from "@/components/ui/label/label.svelte";
    import { config } from "@/config.svelte";

    let files = $state();

    const reset = () => {
        config.company.name = "Pinnacle Bank";
        config.company.logo = "/pinnacle_logo.png";
    };

    $effect(() => {
        if(files?.length > 0) config.company.logo = URL.createObjectURL(files[0]);
    });
</script>

<div class="flex flex-col h-full w-full gap-4 px-4 pb-4">
    <Label>Company name</Label>
    <Input placeholder="App name" bind:value={config.company.name} />

    <Label>Company logo</Label>
    <Input type="file" bind:files={files} accept="image/*" />
    <!-- <Label>Brand color (hex)</Label>
    <Input placeholder="Color" bind:value={config.company.color} /> -->
    <Button href="/">Back home</Button>
    <Button variant="destructive" onclick={reset}>Reset</Button>

    
    <!-- <img src={image} alt=""> -->
</div>
