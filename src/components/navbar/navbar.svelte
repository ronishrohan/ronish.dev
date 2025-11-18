<script>
  import { onMount } from "svelte";
  import gsap from "gsap";
  import NavButton from "./nav-button.svelte";
	import GithubLogo from "phosphor-svelte/lib/GithubLogo";

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


  <img src="/logo.png" class="fixed size-[30vw]  -z-[100000] mix-blend-multiply opacity-10 left-1/2 -translate-1/2 top-1/2 -translate-y-1/2" alt="">


<div class="sticky top-0 hidden sm:flex left-0 px-4 sm:px-2   h-[64px] z-[1000]  max-w-[900px] w-full mx-auto items-center gap-2">
 <!-- <div class="absolute top-full w-full bg-gradient-to-b from-white to-transparent h-[10px]" ></div> -->
 <div  style="mask: linear-gradient(black, black, transparent);" class="absolute  size-full backdrop-blur-sm bg-white/20 fixed h-[90px] bg-gradient-to-b from-white via-white/40 to-transparent left-0 w-full" ></div>
  <div class="mx-auto flex w-full z-50  items-center">
    <div class="font-signature text-lg font-medium z-[50] tracking-tighter shrink-0 hover:text-accent">ronish</div>
    
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
        label="blog"
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
      <button class="px-2 h-[34px] cursor-pointer px-4 shadow-[inset_0px_2px_2px_rgba(255,255,255,0.4),inset_0px_-2px_2px_rgba(0,0,0,0.4),0px_1px_2px_rgba(0,0,0,0.3)] bg-gradient-to-t from-zinc-700 gap-2  to-zinc-800 rounded-full flex items-center hover:from-zinc-700 hover:to-zinc-700 transition-all duration-300 text-white" >
           get in touch
        </button>
    </div>
  </div>
</div>
