<script lang="ts">
    let { data } = $props();
    console.log(data);
    
</script>

<div class="flex flex-col gap-4 p-4">
    <div class="font-bold text-lg">Validation rules</div>
    {#each data.rules as test}
            <div>
                <div class="flex gap-2">
                    {#if test.status == "pass"}
                        <div class="text-green-500">✓</div>
                    {:else}
                        <div class="text-red-500">✗</div>
                    {/if}
                    <div class="font-semibold text-slate-700">{test.name}</div>
                </div>
                <div class="ml-8 text-sm">
                    <span class=" text-slate-500">{test.proof.label}:</span> {test.proof.value}
                </div>
            </div>
    {/each}
</div>    
