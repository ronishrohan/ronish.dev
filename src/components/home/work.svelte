<script>
	export let href;
	export let active = false;
	export let content;
</script>

<a
	{href}
	target="_blank"
	on:mouseenter
	on:mouseleave
	class={`${active === null ? "opacity-100" : (active ? 'opacity-100' : 'opacity-70')}  group relative flex items-center underline transition-all duration-75`}
>
	<div class="absolute right-full flex size-4 items-center justify-center">
		<div class="size-[4px] bg-black transition-[width,height] duration-100 ease-in-out" />
	</div>

	{#if !active}
		<slot />
	{:else}
		{content}
	{/if}
</a>
