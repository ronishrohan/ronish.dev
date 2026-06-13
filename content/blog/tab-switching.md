---
title: The Dev Loop Is Collapsing
date: 2026-05-25
description: cursor 2.5 finishes before you can switch tabs. that's not a flex, that's a shift.
---

Shadcn tweeted something small last week. ["sometimes composer 2.5 is done before I even tab over to my browser to preview."](https://x.com/shadcn/status/2058928744643821745)

Manu Arora said [the same thing](https://x.com/mannupaaji/status/2058931657303105939). Composer autocompletes his thoughts before he even has them.

People laughed, liked the tweets, moved on. But I haven't been able to stop thinking about it — because I don't think it's just a funny observation. I think it's describing a real shift in how we work, and not entirely a good one.

# we stopped writing code

When was the last time you actually wrote code? Not prompted it, not accepted it — wrote it.

The last time I remember opening VS Code was sometime last September. It used to be a must-install on every fresh setup. I got my MacBook last November and never even downloaded it. You might say — well, you still have Cursor, that's basically the same thing. Sure. Except I can't remember the last time I used Cursor to actually write anything either. Mostly I open it to review changes or fix merge conflicts.

We've handed the whole job to clankers. And I'm not saying that's inherently wrong — the speed is real, the output is often good. But somewhere in that handoff, we got lazy about what comes out the other side.

Try this: go into a project you've recently vibecoded and read the code. Actually read it. You'll find useEffect hooks stacked on top of each other, components being rewritten from scratch in three different files instead of being reused, logic that makes no sense to anyone including the agent that wrote it. It's not that the AI did a bad job. It's that nobody was watching.

# the software shows it

This isn't just a developer workflow problem. It's showing up in the products themselves.

Ever since 2026 started, I keep having the same experience — a new app drops, it looks great in the demo, I actually use it, and within a week it stops impressing me. The surface is polished, the core is hollow.

Even Apple. macOS is the most beautiful OS I've ever used — but that's the first-impression version. Spend enough time with it and you start noticing things that genuinely shouldn't exist. Border radii on default apps that don't match each other. The DMG installer that "mounts" like a drive for no reason in 2026. Small things, but they're the kind of things that only happen when nobody's in love with what they're building anymore.

Windows gave up even earlier. Since Windows 7 it's just been colored squares rearranging themselves every few years and calling it a redesign.

The point is — the decay was already happening before AI. Vibe coding just made it faster and easier to justify.

# we're all contributing to this

I'm not exempt from any of this. For most of the last six months at [Ghost](https://tryghost.ai), where I'm a founding engineer, we've been in back-to-back pivot cycles — shipping fully functional versions of different product directions every month or so. We didn't have the luxury of slowing down. So we vibecoded. Hard.

The wake-up call was when our CEO went through the codebase and found enough slop that he cleaned it up himself. After that we changed how we work. Every PR gets reviewed before it's merged. Another engineer checks the branch, then the CEO tests it, and only then does it go in. I have a skills folder set up so agents start with the right context and constraints instead of free-styling from scratch.

It's not a complicated system. But it's the difference between code you can reason about six months from now and code you're scared to touch.

# the loop collapsing isn't the problem

Here's the thing — Cursor being fast is good. Composer finishing before you tab over is impressive engineering. None of that is the problem.

The problem is what happens to your attention when the loop has no slack in it. That small gap between writing and seeing — where you caught the bug, questioned the approach, made the work yours — is gone. Now you're a reviewer moving at a writer's pace, and most people aren't built for that yet.

The dev loop collapsing is fine. Just don't let your judgment collapse with it.
