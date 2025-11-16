<script>
  export let label;
  export let active = false;
  export let onClick;

  let el;
  export { el as ref };
</script>

<button
  bind:this={el}
  on:click={onClick}
  class="relative h-[40px] px-4 py-2 transition-all rounded-full
    {active
      ? 'text-stone-900'
      : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100'
    }"
>
  {label}
</button>
