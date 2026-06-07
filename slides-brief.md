# Understanding AI & Claude
### A Training Session for UI/UX Designers

~75 minutes · 2 sessions · Live demo included

---

## Opener

**Title slide:** Understanding AI & Claude — A practical guide for designers

**Hook — show of hands:**
- Who has used ChatGPT or Claude before?
- Who felt they weren't getting the most out of it?
- That gap is what this session is about.

**Agenda:**
1. Myth-busting (5 min)
2. LLM Fundamentals (15 min)
3. How AI fits in products (8 min)
4. AI Agents (12 min)
5. Live Demo (12 min)
6. MCP & Skills (9 min)
— Session break —
7. Context: why it matters (10 min)
8. Best Practices (5 min)
9. What's next + Q&A (8 min)

---

## Myth-Busting

**Myth 1:** "AI thinks like a human"
Reality: AI predicts, it doesn't reason. Pattern matching at enormous scale — not thinking, understanding, or feeling. When Claude writes a sentence it's asking "what word most plausibly comes next?" billions of times in a row.

**Myth 2:** "AI will replace designers"
Reality: AI accelerates the work. Judgment, taste, and empathy still belong to humans. The risk isn't AI replacing you — it's another designer using AI being 10× faster than you.

**Myth 3:** "It's magic. It's always right."
Reality: AI can be confidently wrong. It's optimised to sound right, not to be right. Like a talented intern who sometimes makes things up without realising it. Always verify before presenting to a client.

---

## LLM Fundamentals

**What is an LLM?**
Imagine someone who read virtually everything ever written and became incredibly good at predicting what a helpful, coherent sentence looks like next. That's a Large Language Model. It doesn't *know* things — it *generates* plausible responses based on patterns from training data.
- Doesn't "know" facts
- Generates plausible text
- Doesn't reason or feel

**How word prediction works:**
The model assigns a probability to every possible next word and picks from the top candidates. Example: given "The best way to understand users is to ___", the model might score: listen (44%), observe (26%), interview (18%), ask (12%). The probabilities come from patterns in training data — millions of similar sentences. "listen" gets selected, then the process repeats for the next word.

**How a response is born:**
You type a prompt → model predicts next word → repeats thousands of times → you read the output. Same question can give different answers because there's randomness built in. This is also why it can hallucinate — it fills gaps confidently, even when it shouldn't.

**What is a token?**
Tokens are the chunks LLMs actually read — roughly ¾ of a word or 4 characters. Billing is based on tokens. Example: "Understanding AI is easier with the right mental model" is about 12 tokens. Cost = input tokens + output tokens (output costs more). Rough scale: a short chat is a fraction of a cent; a 10-step agent run is noticeably more expensive; one page of text ≈ 750 tokens.

**How does "reasoning" work?**
Before answering, the model generates a scratchpad of intermediate steps — like "show your work in math." Each step is easier to predict than the final answer alone, which improves accuracy.

Is it actually reasoning?
- ✓ Generates intermediate steps before answering
- ✓ Significantly improves accuracy on multi-step problems
- ✗ Doesn't verify logical truth or catch all contradictions
- ✗ Can write confident-sounding reasoning that leads to wrong answers
- ✗ Not the same mechanism as human reasoning

Verdict: It's reasoning-shaped behaviour. A useful approximation, not an accurate description of what's happening inside.

**What happens with multiple messages?**
Every time you send a message, Claude receives the entire conversation from scratch — not just your latest message. By message 3, the model is reading 6 items: your 3 messages + its 3 responses. This is the context window. It has limits, and it costs tokens.

---

## How AI Fits in Products

**Frontend vs Backend:**
Frontend is the dining room — what users see and touch. The designer's domain. Backend is the kitchen — where the work actually happens. That's where AI lives. Claude runs in the backend, but designers shape what reaches it and how results come back.

**What is an API?**
An API is a waiter. Your app places an order (the prompt), the API carries it to Claude, Claude processes it, and the result is served back to your app. 

**What actually gets sent to Claude?**
Every API request is a single block of text — not just your message. It contains:
- **System Prompt** — set by the product team, hidden from users. Defines Claude's role, tone, rules, and constraints.
- **Tool Definitions** — agent mode only. What tools the model is allowed to call.
- **Conversation History** — every previous message in the session, both user and assistant.
- **Current Message** — what you just typed.

The system prompt is high-leverage for designers building AI features — this is where you define Claude's behaviour.

**Where designers have leverage:**
You don't control the model. But you control three things that matter enormously:
- The Order: the prompt — what gets asked of Claude and how
- The Menu: what options you surface to users in the UI
- The Plate: how the AI response is displayed and structured
That's enormous influence — without ever touching the model.

---

## AI Agents

**Chat vs Agent:**
Chat AI: you ask a question → model responds → done. One round trip. You drive entirely.
AI Agent: you give a goal → the agent plans, acts, observes, and repeats → done when it decides. Multiple steps. It acts on your behalf.

**What prompts actually look like:**

Chat prompt example:
```
Role:    You are a senior UX reviewer
Task:    Critique this onboarding flow for drop-off risks
Context: B2B SaaS · mobile · 5 steps · 40% drop at step 3
Format:  Bullet list · severity labels
```
You write the full brief. Claude responds once.

Agent prompt example:
```
Goal: Research the top 3 competitors' onboarding flows,
      compare with ours, then generate a report
      with specific improvements.
```
You state the outcome. The agent breaks it into steps autonomously — search, read, compare, write. The more autonomous the agent, the more important a clear goal is. Vague goal → random direction.

**The agent loop — where each step runs:**
The brain (LLM) lives in the cloud. The body (Claude Code) acts locally on your device.

Your device (local):
- Receives goal from user
- Executes tool calls: read/write files, run code, open browser
- Returns results to the LLM
- Shows final output to user

Anthropic Cloud (LLM):
- Decides what to do (planning)
- Reads full context window
- Returns tool call instructions
- Reads tool results (observing)
- Decides: next step or done?
- Never touches your files directly

The brain thinks. The body acts. Your data stays local — only instructions cross the network.

**What tools can an agent use?**
- Web Search — "look this up for me"
- File Reader — "read this document"
- Code Runner — "execute this script"
- Calendar / Email — "book this meeting"
- Design APIs — "export this Figma frame"
- Any API — if it has an API, an agent can use it via MCP

---

## MCP & Skills

**Audience prompt — What's MCP?**
Use the USB-C hub image before defining MCP. Ask: what does this connection layer do?

**MCP metaphor:**
MCP is the USB-C hub for AI tools. Before MCP, every AI product needs custom wiring for every tool. With MCP, tools expose one shared protocol, so any MCP-capable agent can discover and call those tools.

**Audience prompt — What's skill?**
Use the mentor/mentee image before defining skills. Ask: what would make a smart AI behave more like a designer on your team?

**Skills metaphor:**
The AI agent is like a well-read graduate: it has read thousands of design books, but does not know your team's way of working. A skill is the senior designer's workflow: instructions, tools, context, examples, constraints, checklists, and review gates. The result is more structured, repeatable, team-specific work.

**Why agents cost more than chat:**
Every agent step appends to the conversation scroll. A chat is 2 items. A 10-step agent run builds up: goal → plan step 1 → tool result → plan step 2 → tool result → ... This growing scroll means more tokens processed on every single LLM call. Managing context becomes critical in agent workflows.

**The three Claude products:**

| | Claude.ai (Chat) | Claude for Work | Claude Code |
|--|--|--|--|
| What it is | Conversational AI | AI + org tools & data | AI that writes & runs code |
| Autonomy | You drive entirely | Assists with your context | Acts independently |
| Best for designers | Daily thinking partner | Design process & docs | Not directly (yet) |
| Runs where | Cloud only | Cloud + org integrations | Brain cloud · body local |

---

## Live Demo

Four demo steps:
1. Bad prompt → generic, low-value output
2. Good prompt → dramatically better output
3. Design critique — real UX review use case
4. Iterating — building on the same conversation

---

## SESSION BREAK

Session 1 complete. Session 2 covers context management, best practices, and what AI means for the future of design.

---

## Context

**Context is everything:**
The model only knows what you tell it. Every gap in context is filled with a guess.

Vague brief: "Help me design a better onboarding flow" → Result: generic, forgettable

Rich brief: "You are a senior UX reviewer. B2B SaaS for HR teams. 40% drop-off at step 3 on mobile..." → Result: targeted, actionable

**Three levers you control:**
1. **Role** — who you tell Claude it is. "You are a senior UX reviewer focused on accessibility..."
2. **Task + Constraints** — the problem, the audience, the medium, the limitations, the success criteria
3. **Examples** — show what "good" looks like. A before/after, a reference design, a sample output format. The model learns fast from examples.

Designers are already good at this. Personas, briefs, constraints, success criteria — same skill.

**The freelancer brief analogy:**
Claude is the most responsive freelancer you've ever briefed. It will do exactly what you ask — so ask well.

Prompt template:
```
Role:    You are a [senior UX designer / accessibility expert / ...]
Task:    [What you want done, specifically]
Context: [Product, audience, constraints, pain points]
Format:  [How you want the output — list, table, critique, etc.]
```
Four lines. Works every time.

**The problem with large context:**
- Slower and more expensive — the model processes every token on every request
- Lost in the middle — models lose track of information buried in very long contexts
- Context cutoff — when the limit is hit, earliest content gets dropped silently
- Diluted focus — more noise makes it harder for the model to follow your intent

**How to keep context lean:**
- Start fresh for new tasks — don't carry baggage from unrelated conversations
- Summarise, don't paste — 3-line summary instead of a 50-page doc
- System prompt for permanents — put stable instructions there once
- Use retrieval, not raw data — let tools fetch only the relevant parts on demand
- Compact long agent sessions — ask Claude to summarise before continuing a long run
- Be specific, not verbose — a precise 3-line prompt beats a rambling 20-line one

---

## Best Practices

**Six rules to work better with AI:**
1. **Be specific** — role + task + format in every prompt
2. **Give examples** — show what "good" looks like
3. **Iterate, don't restart** — build on the same conversation
4. **Verify before trusting** — especially facts and client-facing claims
5. **Draft, don't decide** — AI accelerates thinking; judgment is yours
6. **Protect sensitive data** — no client PII or confidential docs in public tools

**What Claude can't do well:**
- No live web browsing by default — knowledge has a cutoff unless connected to a search tool
- No memory between sessions — each new conversation starts blank unless configured
- Can be confidently wrong — it won't always signal when it's guessing
- Context window limits — very long conversations get cut off
- Reasoning ≠ truth — extended thinking still produces wrong conclusions sometimes

---

## What's Next

**Where designers add value in AI products:**
- **Prompt UX** — how users interact with AI: inputs, suggestions, tone of voice
- **Output presentation** — how AI responses are displayed, structured, and scannable
- **Trust design** — when to show AI confidence, when to add a human checkpoint
- **AI failure states** — error UX when AI is wrong, slow, or uncertain

**Cheat Sheet** (designed to be screenshotted):

Prompt Template:
```
Role:    You are a [UX expert...]
Task:    [What to do]
Context: [Background info]
Format:  [Output style]
```

6 Best Practices:
- Be specific: role + task + format
- Give examples of good output
- Iterate in the same conversation
- Verify before you trust
- Draft with AI, decide yourself
- Never paste sensitive data

Keep Context Lean:
- Start fresh for new tasks
- Summarise — don't paste docs
- System prompt for permanents
- Use retrieval, not raw data

Remember:
- LLM predicts, doesn't reason
- Every message = full history
- Agents: brain cloud · body local
- MCP = USB-C for AI tools
- No memory between sessions

---

## Harness Engineering

**What is harness engineering?**
Harness engineering is designing the runtime around an AI model so an agent can work reliably. Prompt engineering changes the words; harness engineering changes the system the model runs inside.

**What's inside the harness?**
- Instructions — role, task rules, workflow steps
- Tools — search, files, APIs, MCP servers
- Context — docs, examples, user data, retrieved facts
- Memory / State — what happened, what changed, what remains
- Guardrails — permissions, limits, approval gates
- Verification — tests, screenshots, evals, human review

**Why designers should care:**
- Human checkpoints — where should the agent pause and ask before acting?
- Permissions UX — what can it read, edit, delete, publish, or send?
- Structured outputs — how should results be grouped, ranked, scanned, and reused?
- Failure states — what happens when the agent is wrong, blocked, slow, or uncertain?

**Q&A slide:**
"What's something you want to use AI for in your design work?" or "What's the biggest misconception you came in with?"
