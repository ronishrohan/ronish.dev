---
title: skill issue
date: 2026-04-08
description: creating skills is genuinely fun guys
---

Hello, this is Ronish again. This time I shall be yapping about claude skills.
# what are skills?

For those of you who don't know what skills are, without complicating it too much (which it isnt), they're basically "workflows" or "tools" if you may, which your coding agent can use intelligently when needed. **Skills are not exclusive to claude**, they have been standardized, the docs can be found at [Agent Skills](https://agentskills.io/home#why-agent-skills).

Different coding assistants have their own way around how they use skills, but all you need to know is skills are just markdown files and usually, the creators just provide you with a **npx** command to install the skill (something **Vercel** has put up, [Skills.sh](https://skills.sh/)).

# how to obtain a skill

Let's take a favourite of mine for example -- **[Emil Kowalski's Design Engineer Skill](https://emilkowal.ski/skill)**

If you wanted to you would've gone to the link by now, if not, the first thing you would notice is this: 

```sh
npx skills add emilkowalski/skill
```

I'm assuming you've run the command already, and theres a fancy menu right in front of you. That's where you select what coding agents you want to install the skill to, AFAIK claude code is always select by default (or it only does that for me since I have it installed already), but after you proceed, you are asked if you want this skill to be available only for the current project/folder you're in, or system-wide. 

I normally choose the project path because if you do system-wide, you do end up with a lot of skills, which ends up being an issue (a *skill* issue if you may). 

Once that is done it asks you how you would prefer the skill to be actually installed, I just choose the symlink option here since it hasn't caused any trouble to me yet.

A symlink is basically sort of a "portal", a pointer of sorts, a file that points to another file on your system (the *file* in question here being the skill).

# finally using the skill

After you have finally installed the skill, you just need to open up your claude code or whatever, type ```/skills``` or something in a similar vein (for other agents), and you should see your new skill listed there. 

To use the skill, just prompt something that would very obviously need the skill, for example, to use the Design Engineer skill we installed above, I would prompt something like:

```
"Review the UI of the chat page and give me detailed feedback on the layout, design, and user experience."
```

As an alternative, you can type ```/<skill-name>``` to explicitly run the skill with or without any explicitly provided prompt. 


# but are skills worth the hype?
Skills are worth the hype only if you use them like tools, not toys. Their biggest advantage is that they can make repetitive workflows faster, save you from constantly reworking the same prompts, and even help you build products or automations that connect with services like Google Drive, Slack, Notion, Linear, GitHub, Gmail, and Calendar. Used well, they are less about hype and more about turning repeated effort into something streamlined and reusable.
