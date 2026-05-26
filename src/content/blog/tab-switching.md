---
title: the dev loop is collapsing
date: 2026-05-25
description: cursor 2.5 finishes before you can switch tabs. that's not a flex, that's a shift.
---

Shadcn tweeted something small last week. ["sometimes composer 2.5 is done before I even tab over to my browser to preview."](https://x.com/shadcn/status/2058928744643821745)

Manu Arora said basically the [same thing](https://x.com/mannupaaji/status/2058931657303105939). Composer autocompletes his thoughts before he has them.

It got a bunch of likes, people laughed, moved on. But I've been thinking about it since and I don't think it's a joke. I think it's actually describing something pretty significant.

# the dev loop used to have slack in it

The classic dev loop is: write code → save → switch to browser → refresh → see result → switch back → repeat. Every one of those steps takes time. You think while you switch tabs. You notice something while you wait for the page to load. You have a tiny moment of reflection before the next keystroke.

That time wasn't dead time. It was the space where you caught the bug before you introduced the next one. Where you asked yourself if what you just wrote actually made sense. Where the work became *yours* because you were present for each part of it.

# now the loop has no slack

When the AI finishes before you tab over, the loop doesn't slow down — it inverts. You're no longer driving with occasional AI help. The AI is driving and you're reviewing at speed. The question is no longer "what should I build next" but "does this look right."

That's a different cognitive mode entirely. It's closer to code review than to programming. And code review at that pace, without context, without having written the code yourself, is genuinely hard to do well.

# this isn't a complaint about cursor

Cursor 2.5 is genuinely impressive. Composer is fast and the output is good. I'm not saying slow it down.

I'm saying the tooling got fast enough that the bottleneck shifted. It used to be "can AI write this code." Now it's "can you keep up with the code it's writing." And that's a much more interesting problem because it's entirely on you.

The people who are going to be good at this workflow aren't the ones who can type faster prompts. They're the ones who can review fast, catch drift early, and maintain a clear picture of what the codebase is doing even when they didn't write most of it. That's a skill. It's not the one we've been optimising for.

# what actually changes

There's a version of this that goes well and a version that doesn't.

The version that goes well: you use the speed to ship a rough version faster, then slow down and actually review what was built before you keep going. The AI handles the boilerplate sprint, you handle the architecture and the judgment calls.

The version that doesn't: you keep accepting because it mostly looks right, the velocity feels good, and you never really pause to understand the codebase you now own. Six months later you're scared to touch anything because you don't know how it works.

The tool is the same in both versions. The difference is whether you let it collapse your attention along with the loop.

# tab over anyway

I think the habit worth building is: even when it's done before you get there, tab over anyway. Look at it. Actually look at it. Not to review every line but to stay present in what's being built.

The dev loop collapsing is fine. Losing track of what you're building is not.
