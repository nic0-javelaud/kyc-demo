<script lang="ts">
    let { filename } = $props();
</script>

<div class="flex flex-col gap-4 p-4">
    <div class="font-bold text-lg">Document provided</div>
    <img
        src="/images/{filename}"
        class="w-full h-full object-contain"
        alt="document_provided"
    /> 
</div>
