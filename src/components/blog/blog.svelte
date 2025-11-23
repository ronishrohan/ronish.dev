<script>
    export let title;
    export let description;
</script>

<div class="px-4 py-3 w-full group rounded-3xl border border-zinc-200 shadow-[inset_0px_2px_2px_rgba(255,255,255,1),inset_0px_-2px_2px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.3)] bg-gradient-to-t from-white to-zinc-200 hover:from-zinc-600 hover:to-zinc-800 hover:shadow-[inset_0px_2px_2px_rgba(255,255,255,0.25),inset_0px_-2px_2px_rgba(0,0,0,0.5),0px_2px_4px_rgba(0,0,0,0.3)] hover:border-zinc-800  cursor-pointer">
    <div class="text-zinc-800 group-hover:text-white" >{title}</div>
    <div class="text-sm text-zinc-600 group-hover:text-zinc-300">{description}</div>
</div>