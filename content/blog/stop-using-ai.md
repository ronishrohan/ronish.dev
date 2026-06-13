---
title: stop using AI
date: 2026-04-29
description: stop the slop, be better engineers
---

And take a couple of days to learn how to actually use it.

From what I've seen, most of the people in my college and around me use "website builders" like v0.dev, replit.com, lovable.dev, base44.dev, and so on for their "hackathon projects", "projects to add to resume", whatever.

Sadly what they don't realise is that whatever they are doing is probably useless, the projects are unimpressive and there is no "good prompt" to guide agents to build better projects. It's not that I don't believe these "cloud coding agents" can't make good products - they can, but thats not the point, the point is, better projects can be made if you just want to stop being so lazy.

And as future engineers, slopping off using every easy way out without even looking at other options is NOT it.

# the actual problem: you don't know how to use AI

It's not that these website builders are useless. It's that most people using them have no idea what they're doing. They type a vague one-liner, get a half-functional app, screenshot the homepage, and call it a project. That's not AI-assisted development. That's just template tourism.

The issue isn't the tool. The issue is the complete lack of understanding of how AI actually works and how to direct it properly. The people building genuinely impressive things with AI aren't clicking "generate" and hoping for the best. They're treating the model like a capable but very literal collaborator, giving it context, constraints, structure, and feedback.

If you don't understand what a system prompt does, if you've never thought about token context, if you can't write a prompt that specifies exactly what you want in exactly the format you need, then you're not really using AI. You're just using a fancy random button.

# there are better tools. learn them.

Website builders have their place. But if you're studying engineering and you're using v0.dev to build your resume project, you're skipping past the tools that actual developers use in actual workflows.

Claude Code is Anthropic's agentic coding tool. It runs in your terminal, has access to your file system, can run commands, read your codebase, and iterate across files in ways a chat interface simply can't. You give it a goal and it figures out the steps. It's not magic, but it's extraordinarily capable when you know how to work with it, writing clear task descriptions, structuring your repo in a way that makes sense to an agent, and knowing when to course-correct instead of letting it spiral.

OpenAI Codex CLI does something similar in the OpenAI ecosystem, a terminal-native agent that can read, write, and execute code with your explicit permission. Again, it rewards people who know how to guide it.

Cursor is an IDE with AI deeply integrated, not just autocomplete but a chat interface that has full context of your codebase. The difference between someone who uses Cursor well and someone who uses it poorly is massive. One gets a proper collaborator. The other just gets slightly smarter autocomplete.

These tools are genuinely powerful and will make a good engineer significantly faster. But they require you to actually understand software development to direct them effectively. They amplify skill. They don't replace it.

# "i can't afford that" — then use this

Here's where the excuse runs out.

If Claude Code, Codex CLI, or Cursor feel too expensive right now, there's a completely free and genuinely capable alternative that almost nobody in college is talking about: opencode with NVIDIA's free model tier via NIM.

NVIDIA is right now giving out free access to some really capable models through their NIM (NVIDIA Inference Microservices) platform. Models like Kimi K2 from Moonshot AI and GLM-4 from Zhipu AI are available at no cost and are more than capable of serious coding tasks, architecture planning, writing production-level components, debugging, refactoring, all of it.

Kimi K2 in particular is worth paying attention to. It was trained with an agentic focus, meaning it was specifically optimised for tool use, multi-step reasoning, and the kind of iterative problem-solving that software development actually requires. This isn't just a chatbot you're asking to write functions. It can plan and execute across a codebase.

Opencode is a terminal-based AI coding agent, similar in spirit to Claude Code, that you can point at these free NVIDIA-hosted models. You get the workflow of a proper agentic coding tool using frontier-level models, for free. There's genuinely no excuse not to try it.

# what actually changes when you use these tools properly

To actually test how well this works for free, I spun up a dummy project using Kimi 2.5 and opencode. Nothing serious, just enough to see what it could do.

The skill I used was an industrial brutalist UI design skill, basically a markdown file that tells the agent exactly what aesthetic direction to follow, what patterns to use, what to avoid, the whole thing. You can look at it here. I pointed opencode at it, told it to build a website using the skill, and let it run.

The output turned out really well. It followed the skill closely, the design decisions matched what the skill described, and it didn't go off and do its own thing. I'll attach screenshots so you can see for yourself.

That's the whole point of a skills file. It's a markdown document you give the agent that describes how you want it to work. Design language, component structure, naming conventions, what libraries to use, what to avoid. You're not prompting from scratch every time. You're giving the agent a persistent set of instructions that shapes everything it builds across the project.

And that's exactly what the website-builder crowd is missing. The quality of the output is almost entirely a function of the quality of the input you give the model. Better context, better constraints, better feedback means a better project. And with Kimi 2.5 on NVIDIA NIM, you're not spending anything to do it.

# what this is really about

This isn't a rant against AI tools. AI tools are genuinely great and anyone not using them is leaving a lot on the table. This is a rant against intellectual laziness wearing the costume of productivity.

Clicking "build me an app" in lovable.dev and shipping whatever comes out is not a skill. It's not impressive to a recruiter who has seen fifty identical projects. It's not going to prepare you for a job where you have to make real decisions, understand trade-offs, and actually direct technical work.

But learning how to use a proper agentic tool, understanding context windows, learning to write precise task descriptions, figuring out how to structure a project so an agent can navigate it, building your own skills files and workflows, that is a transferable, compounding skill. Every project you do this way makes the next one better.

The tools are there. The free compute is there. The documentation exists. The only thing between you and actually learning this is deciding to spend a weekend doing it instead of shipping another template and calling it a portfolio.

Take the weekend. Learn the tools. Build something you actually understand.
