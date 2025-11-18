<script>
	export let href;
	export let active = false;
</script>

<a on:mouseenter on:mouseleave {href} class={`${active === null ? "opacity-100" : (active ? 'opacity-100' : 'opacity-70 ')} transition-all duration-75 underline group relative flex items-center `}>
	<div class="absolute right-full flex size-4 items-center justify-center">
		<div
			class={`size-[4px] bg-black transition-[width,height] duration-100 ease-in-out `}
		/>
	</div>
	<slot />
</a>
