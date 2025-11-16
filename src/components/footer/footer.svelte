<script>
    
    import GithubLogo from "phosphor-svelte/lib/GithubLogo"
	import FooterButton from "./footer-button.svelte";
</script>


<div class="bg-gradient-to-b from-zinc-800  to-zinc-900 text-white p-2">
    <div class="max-w-[900px] gap-4 mx-auto w-full h-fit flex items-stretch font-signature  text-lg" >
        <div class="w-fit shrink-0" >reach out to me,</div>
        <div  class="w-full text-center">maybe i'll respond</div>
        <div class="w-fit shrink-0 flex gap-4" >
            <FooterButton label="discord" />
            <FooterButton label="instagram" />
            <FooterButton label="mail" />
        </div>
        <button class="px-2 cursor-pointer ml-6 shadow-[inset_0px_2px_2px_rgba(255,255,255,0.4),inset_0px_-2px_2px_rgba(0,0,0,0.4),0px_1px_2px_rgba(0,0,0,0.3)] bg-gradient-to-t from-zinc-700 gap-2  to-zinc-800 rounded-full flex items-center hover:from-zinc-700 hover:to-zinc-700 transition-all duration-300" >
            <GithubLogo weight="fill" size={14} />
        </button>
    </div>
</div>