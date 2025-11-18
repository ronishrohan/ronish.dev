<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import NavButton from "./nav-button.svelte";

  let highlight;

  // store the button DOM nodes
  let btnRefs = [];

  let activeIndex = 0;

  onMount(() => {
    moveHighlight(btnRefs[activeIndex]);
  });

  function moveHighlight(target) {
    const rect = target.getBoundingClientRect();
    const parentRect = target.parentElement.getBoundingClientRect();

    gsap.to(highlight, {
      x: rect.left - parentRect.left,
      width: rect.width,
      height: rect.height,
      duration: 0.35,
      ease: "power3.out"
    });
  }

  function setActive(i) {
    activeIndex = i;
    moveHighlight(btnRefs[i]);
  }
</script>

<style>
  .highlight {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 9999px;
    pointer-events: none;
  }
</style>

<div class="sticky top-0 left-0 flex h-[64px] to-transparent bg-white max-w-[900px] w-full mx-auto items-center gap-2">
 <div class="absolute top-full w-full bg-gradient-to-b from-white to-transparent h-[40px]" ></div>
 
  <div class="mx-auto flex w-full  items-center">
    <div class="font-signature text-lg font-medium tracking-tighter shrink-0">ronish</div>
    
    <div class="nav-container ml-auto shrink-0 flex h-full items-center relative gap-2 text-sm tracking-tight">

      <div
        class="highlight border border-zinc-200 bg-gradient-to-t from-white to-zinc-200 shadow-[inset_0px_2px_2px_rgba(255,255,255,1),inset_0px_-2px_2px_rgba(0,0,0,0.1),0px_1px_2px_rgba(0,0,0,0.3)]"
        bind:this={highlight}
      ></div>

      <NavButton
        label="about"
        bind:ref={btnRefs[0]}
        active={activeIndex === 0}
        onClick={() => setActive(0)}
      />

      <NavButton
        label="works"
        bind:ref={btnRefs[1]}
        active={activeIndex === 1}
        onClick={() => setActive(1)}
      />

      <NavButton
        label="contact"
        bind:ref={btnRefs[2]}
        active={activeIndex === 2}
        onClick={() => setActive(2)}
      />
    </div>
  </div>
</div>
