<script>
// @ts-nocheck

	import Work from '../components/home/work.svelte';

	const works = [
		{
			title: 'full-time at ghost (sf, remote) as one of the founding engineers',
			href: '#',
      content: `can't talk about it yet :)`
		},
		{
			title: 'co-founded a startup and got bought+hired',
			href: '#',
      content: `built a desktop assistant called "rae" with a couple of friends`
		},
		{
			title: 'helping my friend ship his dating app',
			href: '#',
      content: `work in progress :0`
		},
		{
			title: 'trying to build a prettier google keep',
			href: '#',
      content: `mostly part of ui exploration`
		},
		{
			title: '6 month long internship at optacloud (sg, remote)',
			href: '#',
      content: `worked on 2-3 client projects, mostly fullstack web development`
		},
		{
			title: 'started learning webdev',
			href: '#',
      content: `built a few small projects, immediately fell in love with it`
		},
		{
			title: 'almost went pro with 3d art using blender',
			href: '#',
      content: `got a fulltime job at 16, had to quit cause of school`
		}
	];

	let activeWork = null;
</script>

<div class="min-h-[calc(100vh-108px)] h-fit pb-4 pt-[60px]">
	<div class="flex w-full items-stretch gap-12">
		<div class=" ">
			hi i'm <span class="font-bold">ronish rohan</span>, a software engineer at
			<span class="font-bold">ghost</span>. <br />

      i'm going to be da vinci of the web. <br /><br />

			i'm a developer and artist, currently pursuing my bachelors in engineering. i love designing
			and building websites, anything that has to do with colors, or typography or design. when I'm
			not coding, i'm probably watching movies, listening to music, or walking around the city.
		</div>
		<div class="relative  border border-stone-400 w-1/3 shrink-0 overflow-hidden rounded-2xl">
      <div class="absolute size-full z-10 rounded-2xl shadow-[inset_0px_2px_2px_rgba(255,255,255,0.5),inset_0px_-2px_2px_rgba(0,0,0,0.5)]" ></div>
			<img src={'/ronish.webp'} class="absolute top-0 left-0 size-full object-cover" />
		</div>
	</div>

	<div class="mt-8 flex w-full flex-col">
		what i've been upto
		<div class="flex h-fit w-full flex-col">
			{#each works as work}
				<Work
					href={work.href}
					on:mouseenter={() => {
            console.log("mouse enter")
            activeWork = work
          }}
          content={work.content}
					on:mouseleave={() => (activeWork = null)}
					active={activeWork === null ? null : (activeWork === work)}
				>
					{work.title}
				</Work>
			{/each}
		</div>
	</div>
</div>
