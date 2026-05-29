---
title: you don't have to do that yourself anymore
date: 2026-05-29
description: we're living in the age of automation, and most people haven't noticed yet
---

I was lying around, figuring out what to do for the day, when I realized my GitHub was bloated with too many public repositories. I decided to clean it up, but as soon as I opened the website, it was clear this was going to be tedious. I didn't know how many repos I even needed to get rid of. Changing visibility is a multi-step process you have to repeat for every single one. And I couldn't just scan a list of names because I genuinely don't remember half of them.

Two years ago I would have looked for a GitHub helper that uses an access token, or written my own script to automate it. Not a bad move, but that's an extra *"flashy"* step just for the sake of making something when you really just want the thing **done**.

Then I remembered: gh CLI exists. Why not just ask my agent to handle it? So I did. Thirty repositories went private in under two minutes, all through the terminal. All I had to do was ask it to generate a markdown checklist, go through it myself, check off what I wanted gone, and hand it back. Done.

# it's not just the one-off stuff

I've been building [Flash](https://github.com/ronishrohan/flash) for a college project, and I'll be completely honest: **75% of it is vibe-coded.** The landing page and the basic UI for the main pages, that was me. Everything else was Claude Code and [Factory Droid](https://factorydroid.dev) running Sonnet 4.7 at medium effort.

And that's not the *"just build it for me"* approach either. I write **implementation markdown files** myself and feed them to the agent, because I know exactly what needs to be used. The agent doesn't make architecture decisions. I do. It just executes them faster than I can type.

Testing was the same story. Instead of tediously prompting the agent until I found issues, I asked Claude Code to write tests and run them on the CLI itself. It fixed roughly **80% of the issues on its own.** The remaining 20% I had to figure out myself. But that shift compressed what would've been hours of me manually feeding logs back and forth into maybe 15 to 30 minutes of watching it work while drinking my coffee.

# the boring stuff too

Today I wanted to put together a diet and fitness plan. One prompt to my [Hermes](https://hermes-agent.nousresearch.com) agent. It created an Apple Note and a Google Calendar reminder, all under five minutes.

That's not impressive in isolation. But think about what that task used to cost: opening Notes, typing it out, switching to Calendar, creating reminders, going back and forth. It's not hard, it's just *friction.* And friction is exactly what makes you put things off.

# what's actually changed

The tools were already there. gh CLI has been capable of bulk repo management for years. The terminal, MCP servers, none of this is new. What changed is the **activation energy** to actually use them.

Before, you had to either know the tool well enough to use it directly, or write glue code to tie everything together. Both require you to decide the task is worth the time investment. Most of the time, it wasn't, so it just sat on your mental to-do list indefinitely.

Now you describe the problem and it's handled. The random annoying task you'd procrastinate on for weeks because it's *"not worth writing a script for"* just gets done.

We're living in the age of automation. Not in a hype way. In a quiet, practical way, where anything tedious enough to annoy you is now automatable in the time it takes to write a sentence about it. All you need is an agent running in your terminal and a few [MCP servers](https://modelcontextprotocol.io) connected to the apps you already use.

The bar to act on a problem is basically zero now. That's the actual shift.
