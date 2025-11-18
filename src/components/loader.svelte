<script>
    import {gsap} from 'gsap';
	import { onMount } from 'svelte';

    let loaderDiv;

    onMount(() => {
        gsap.to(loaderDiv, {
            opacity: 0,
            duration: 0.3,
            ease: 'power3.inOut',
            delay: 1,
            onComplete: () => {
                loaderDiv.style.display = 'none';
            }
        });
    });
</script>




<div bind:this={loaderDiv} class="bg-white fixed left-0 top-0 size-full bg-white z-[100000] overflow-hidden" >
  <img src="/logo.png" class="absolute   left-1/2 -translate-1/2 top-1/2 -translate-y-1/2" alt="">
</div>
