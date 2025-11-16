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
  class="relative h-[34px] px-4  transition-all rounded-full
    {active
      ? 'text-zinc-900'
      : 'text-zinc-600 hover:text-zinc-950 cursor-pointer hover:bg-zinc-100'
    }"
>
  {label}
</button>
