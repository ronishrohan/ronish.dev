<script>
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import FooterButton from './footer-button.svelte';
</script>

<div class="h-fit  sm:fixed bottom-0 w-full bg-gradient-to-b from-zinc-800 to-zinc-900 text-white">
	<div
		class="mx-auto flex h-fit w-full max-w-[900px] flex-col items-stretch gap-0 p-4 font-signature text-lg sm:flex-row sm:gap-4 sm:p-2"
	>
		<div class="w-fit shrink-0">reach out to me,</div>
		<div class="w-full text-left sm:text-center">maybe i'll respond</div>
		<div class="flex w-fit shrink-0 gap-4">
			<FooterButton href="https://discord.gg/F9y8AqY5xE" label="discord" />
			<FooterButton href="https://www.instagram.com/ronish2o/" label="instagram" />
			<FooterButton href="https://x.com/ronish1o" label="x" />
			<FooterButton href="mailto:ronish.rohan@gmail.com" label="mail" />
			<div class="flex sm:hidden">
				<FooterButton href="https://github.com/ronishrohan" label="github" />
			</div>
		</div>
		<a
			target="_blank"
			href="https://github.com/ronishrohan"
			class="ml-6 hidden cursor-pointer items-center gap-2 rounded-full bg-gradient-to-t from-zinc-700 to-zinc-800 px-2 shadow-[inset_0px_2px_2px_rgba(255,255,255,0.4),inset_0px_-2px_2px_rgba(0,0,0,0.4),0px_1px_2px_rgba(0,0,0,0.3)] transition-all duration-300 hover:from-zinc-700 hover:to-zinc-700 sm:flex"
		>
			<GithubLogo weight="fill" size={14} />
		</a>
	</div>
</div>
