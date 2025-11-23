<script>
    
    import GithubLogo from "phosphor-svelte/lib/GithubLogo"
	import FooterButton from "./footer-button.svelte";
</script>


<div class="bg-gradient-to-b h-fit from-zinc-800  to-zinc-900 text-white  ">
    <div class="max-w-[900px] gap-0 sm:gap-4 sm:p-2 p-4  mx-auto w-full h-fit flex sm:flex-row flex-col items-stretch font-signature  text-lg" >
        <div class="w-fit shrink-0" >reach out to me,</div>
        <div  class="w-full text-left sm:text-center ">maybe i'll respond</div>
        <div class="w-fit shrink-0 flex gap-4" >
            <FooterButton href="https://discord.gg/F9y8AqY5xE" label="discord" />
            <FooterButton href="https://www.instagram.com/ronish2o/" label="instagram" />
            <FooterButton href="mailto:ronish.rohan@gmail.com" label="mail" />
            <div class="flex sm:hidden"><FooterButton href="https://github.com/ronishrohan" label="github" /></div>
        </div>
        <a target="_blank" href="https://github.com/ronishrohan" class="px-2 cursor-pointer ml-6 shadow-[inset_0px_2px_2px_rgba(255,255,255,0.4),inset_0px_-2px_2px_rgba(0,0,0,0.4),0px_1px_2px_rgba(0,0,0,0.3)] bg-gradient-to-t from-zinc-700 gap-2  to-zinc-800 rounded-full hidden sm:flex items-center hover:from-zinc-700 hover:to-zinc-700 transition-all duration-300" >
            <GithubLogo weight="fill" size={14} />
        </a>
    </div>
</div>