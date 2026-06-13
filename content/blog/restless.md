---
title: Restless - Spec to MCP
date: 2026-05-08
description: turn any openapi spec into an mcp server with one command
---

I built [rest0less](https://github.com/ronishrohan/restless).

```sh
restless generate https://petstore3.swagger.io/api/v3/openapi.json
```

You get a `server.py` using fastmcp, ready to plug into any agent. That's the whole thing.

# why

MCP has a decent ecosystem now, but it only covers the APIs someone decided to write a server for. The moment you want your agent to talk to something that doesn't have one — a company's internal API, some niche service, your own backend — you're writing it by hand. Same boilerplate every time.

Restless handles that. Point it at a spec, it does the mapping.

# the output

A readable `server.py`. Not a black box — actual code you can open and edit. Auth is auto-detected from the spec and pulled from env vars. After generating, restless prints the MCP config JSON you paste into your agent.

Generated servers land in `~/.mcp/servers/` by default.

# why not just ask the agent to write it

You could. But it burns tokens, the output is different every time, and if something breaks you don't know why.

Restless is deterministic. Same spec in, same server out. No tokens spent on generation, no hallucinated endpoints or made-up parameter names. It reads the spec and maps it.

Some things should be tools, not reasoning tasks. Code generation from a structured input is exactly that kind of thing.

# restless setup

```sh
restless setup
```

This installs a skill — a markdown file that tells your agent exactly how to use restless. Once it's there, you can just tell your agent "set up an MCP server for this API, only the issues endpoints" and it figures out the rest. You weren't involved in the middle part.

# install

```sh
pip install rest0less

# or via uv
uv tool install rest0less

# then install the agent skill
restless setup
```

[Free and open forever.](https://github.com/ronishrohan/restless)
