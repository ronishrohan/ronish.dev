<script>
	// @ts-nocheck

	import Work from '../components/home/work.svelte';

	const works = [
		{
			title: 'full-time at ghost (sf, remote) as one of the founding engineers',
			href: 'https://tryghost.ai/',
			content: `can't talk about it yet :)`
		},
		{
			title: 'co-founded a startup and got bought+hired',
			href: 'https://www.raeai.app/',
			content: `built a desktop assistant called "rae" with a couple of friends`
		},
		{
			title: 'helping my friend ship his dating app',
			href: 'https://github.com/onkismet',
			content: `work in progress :0`
		},
		{
			title: 'trying to build a prettier google keep',
			href: 'https://github.com/ronishrohan/vichaar',
			content: `mostly part of ui exploration`
		},
		{
			title: '6 month long internship at optacloud (sg, remote)',
			href: '#',
			content: `worked on 2-3 client projects, mostly fullstack web development`
		},
		{
			title: 'started learning webdev',
			href: 'https://github.com/ronishrohan',
			content: `built a few small projects, immediately fell in love with it`
		},
		{
			title: 'almost went pro with 3d art using blender',
			href: 'https://www.instagram.com/ronish.rohan/',
			content: `got a fulltime job at 16, had to quit cause of school`
		}
	];

	let activeWork = null;
</script>

<div class="h-fit min-h-[calc(100vh-108px)] pt-[60px] pb-4">
	<div class="flex w-full flex-col items-stretch gap-12 sm:flex-row">
		<div class="sm:text-left">
			hi i'm <span class="font-bold">ronish rohan</span>, a software engineer at
			<span class="font-bold">ghost</span>. <br />

			i'm going to be da vinci of the web. <br /><br />

			i'm a developer and artist, currently pursuing my bachelors in engineering. i love designing
			and building websites, anything that has to do with colors, or typography or design. when I'm
			not coding, i'm probably watching movies, listening to music, or walking around the city.
		</div>
		<div
			class="  sticky top-0 w-full shrink-0 overflow-hidden rounded-2xl border border-stone-400 sm:h-auto sm:w-1/3"
		>
			<div
				class="absolute z-10 size-full rounded-2xl shadow-[inset_0px_2px_2px_rgba(255,255,255,0.5),inset_0px_-2px_2px_rgba(0,0,0,0.5)] sm:flex"
			></div>
			<img src={'/ronish.webp'} class="absolute top-0 left-0 size-full object-cover" />
		</div>
	</div>

	<div class="mt-8 mb-8 flex w-full flex-col">
		what i've been upto
		<div class="flex h-fit w-full flex-col">
			{#each works as work}
				<Work
					href={work.href}
					on:mouseenter={() => {
						console.log('mouse enter');
						activeWork = work;
					}}
					content={work.content}
					on:mouseleave={() => (activeWork = null)}
					active={activeWork === null ? null : activeWork === work}
				>
					{work.title}
				</Work>
			{/each}
		</div>
	</div>
	<div class="h-[100vh]" ></div>
</div>
