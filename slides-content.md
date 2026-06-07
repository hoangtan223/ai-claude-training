# Understanding AI & Claude — Slide Deck Content

> **For designers (non-technical audience) · ~75 min · 2 sessions**
> 46 slides · Dark theme · Purple (#7c3aed) and Orange (#f97316) accent colours

---

## Design Notes

- **Colour palette:** Background #0d0d1a · Surface cards #1a1a2e · Purple #7c3aed / light #a78bfa · Orange #f97316 / light #fdba74 · Green #10b981 · Red #ef4444 · Text #f1f5f9 · Muted #94a3b8
- **Fonts:** Inter (body) · JetBrains Mono (code/tokens)
- **Layout pattern:** Most slides are centred, dark background, with a small TAG label above the headline, body text, then a visual element (cards, flow diagram, list)
- **Slide types:** `s-title` = gradient title slide · `s-dark` = standard content slide

---

## SESSION 1

---

### Slide 1 — Title
**Type:** Title slide (full-bleed gradient)
**Section label:** *(none)*

**Content:**
- Small tag: `Training Session`
- Headline: **Understanding AI & Claude**
- Subtitle: *A practical guide for designers*
- Badges row: `~75 min · 2 sessions` · `Live Demo` · `Press → to advance`

**Layout:** Centred, large hero headline with gradient text on the word "AI & Claude". Three pill badges below.

---

### Slide 2 — Hook
**Type:** Content slide
**Section label:** Opener

**Content:**
- Tag: `Before We Start`
- Headline: **A quick show of hands**
- Two cards side by side:
  - Card 1: ✋ "Who has used **ChatGPT or Claude** before?"
  - Card 2: 🤔 "Who felt they weren't **getting the most** out of it?"
- Footer line: *"That gap is exactly what this session is about."*

**Layout:** 2-column card grid below headline. Italic closing line centred below.

---

### Slide 3 — Agenda
**Type:** Content slide
**Section label:** Agenda

**Content:**
- Tag: `Agenda · 2 sessions`
- Headline: **What we'll cover**
- Agenda list with number, topic, and duration:

| # | Topic | Time |
|---|-------|------|
| 01 | Myth-busting | 5 min |
| 02 | LLM Fundamentals | 15 min |
| 03 | How AI fits in products | 8 min |
| 04 | AI Agents | 12 min |
| 05 | Live Demo | 12 min |
| 06 | MCP & Skills | 9 min |
| *(break)* | *── Suggested session break ──* | |
| 07 | Context: why it matters | 10 min |
| 08 | Best Practices | 5 min |
| 09 | What's next + Q&A | 8 min |

**Layout:** Numbered list rows. "Live Demo" row uses orange accent. A subtle divider row with "── Suggested session break ──" separates sessions.

---

## SECTION: MYTH-BUSTING

---

### Slide 4 — Myth 1
**Section label:** Myth-Busting

**Content:**
- Tag: `Myth 1 of 3`
- Myth box:
  - ❌ **Myth:** "AI thinks like a human"
  - ✅ **Reality:** AI **predicts**, it doesn't reason. It's pattern matching at enormous scale — not thinking, understanding, or feeling.
- Body: "When Claude writes a sentence it's asking: **'what word most plausibly comes next?'** — billions of times in a row."

**Layout:** Large centred myth/reality card. Short callout text below.

---

### Slide 5 — Myth 2
**Section label:** Myth-Busting

**Content:**
- Tag: `Myth 2 of 3`
- Myth box:
  - ❌ **Myth:** "AI will replace designers"
  - ✅ **Reality:** AI **accelerates** the work. Judgment, taste, and empathy still belong to humans. Designers who use AI will outpace those who don't.
- Body: "The risk isn't AI replacing you. It's another designer using AI **being 10× faster than you.**"

---

### Slide 6 — Myth 3
**Section label:** Myth-Busting

**Content:**
- Tag: `Myth 3 of 3`
- Myth box:
  - ❌ **Myth:** "It's magic. It's always right."
  - ✅ **Reality:** AI can be **confidently wrong**. It's optimised to sound right, not to be right. Always verify before presenting to a client.
- Body: "Like a talented intern who **sometimes makes things up** without realising it."

---

## SECTION: LLM FUNDAMENTALS

---

### Slide 7 — What is an LLM?
**Section label:** LLM Fundamentals

**Content:**
- Tag: `Part 1 — LLM Fundamentals`
- Headline: **What is an LLM?**
- Feature card (purple accent):
  - 📚 **The Well-Read Intern**
  - "Imagine someone who read virtually **everything ever written** and became incredibly good at predicting what a helpful, coherent sentence looks like next. That's a Large Language Model."
  - "It doesn't *know* things — it *generates* plausible responses based on patterns from training data."
- Three mini-cards in a row:
  - ✗ Doesn't "know" facts
  - ✓ Generates plausible text
  - ✗ Doesn't reason or feel

**Layout:** Centred feature card, then 3-column row of small tick/cross cards.

---

### Slide 8 — Word Prediction
**Section label:** LLM Fundamentals

**Content:**
- Tag: `LLM Fundamentals`
- Headline: **How does word prediction actually work?**
- Sentence with a blinking blank: `"The best way to understand users is to ___"`
- Subtext: "The model assigns probabilities to every possible next word, then picks one:"
- Probability bar chart (4 rows):
  - **listen** ████████████████████ 44%
  - **observe** ████████████ 26%
  - **interview** ████████ 18%
  - **ask** █████ 12%
- Two callout cards below:
  - "listen" gets selected → process repeats for the next word
  - The probabilities come from **patterns in training data** — millions of sentences like this one

**Layout:** Sentence at top, then a probability bar list, then 2 side-by-side callout cards.

---

### Slide 9 — Token Flow
**Section label:** LLM Fundamentals

**Content:**
- Tag: `LLM Fundamentals`
- Headline: **How a response is born**
- 4-step horizontal flow:
  1. 💬 You type a prompt
  2. 🧠 Model predicts next word
  3. 🔄 Repeats thousands of times
  4. 📄 You read the output
- Two body lines:
  - "Same question can give different answers — there's **randomness** built into word selection."
  - "And why it can **hallucinate** — it fills in gaps confidently, even when it shouldn't."

**Layout:** Horizontal flow diagram with arrows, then 2 body lines.

---

### Slide 10 — What is a Token?
**Section label:** LLM Fundamentals

**Content:**
- Tag: `LLM Fundamentals`
- Headline: **What is a token?**
- Intro: "Tokens are the chunks LLMs actually read — roughly **¾ of a word** or 4 characters. Billing is based on tokens."
- Tokenised sentence (colour-coded chunks, monospace font):
  `Under` `stand` `ing` ` AI` ` is` ` easier` ` with` ` the` ` right` ` mental` ` model` `.`
  *(Each chunk is a different background colour to show token boundaries)*
- 3-column cost comparison:
  - 💬 **Short chat** — ~1,000 tokens — fraction of a cent
  - 🤖 **Agent run (10 steps)** — ~30–100k tokens — noticeably more expensive
  - 📄 **One page of text** — ≈ 750 tokens — useful reference point
- Footer: "Cost = **input tokens + output tokens** (output costs more) · varies by model · prices change over time"

**Layout:** Intro line, tokenised example row, 3-column cards, footer note.

---

### Slide 11 — How Reasoning Works
**Section label:** LLM Fundamentals

**Content:**
- Tag: `LLM Fundamentals`
- Headline: **How does "reasoning" work?**
- Two-column layout:
  - **Left — Extended Thinking card:**
    - "Before answering, the model generates a scratchpad of intermediate steps — **'show your work in math.'**"
    - Scratchpad visual (4 rows):
      - 🤔 "The user is asking about X..."
      - 🤔 "I should consider A and B..."
      - 🤔 "The best answer is therefore..."
      - ✅ Final visible response
    - "Each step is **easier to predict** than the final answer alone → better accuracy on complex tasks."
  - **Right — Is it actually reasoning?**
    - ✓ Generates intermediate steps before answering
    - ✓ Significantly improves accuracy on multi-step problems
    - ✗ Doesn't verify logical truth or catch all contradictions
    - ✗ Can write confident-sounding reasoning that leads to wrong answers
    - ✗ Not the same mechanism as human reasoning
    - **Verdict box:** "It's reasoning-*shaped* behaviour. Useful approximation, not an accurate description of what's happening inside."

**Layout:** 2-column: left = explainer with scratchpad visual, right = tick/cross verdict list.

---

### Slide 12 — Context Window
**Section label:** LLM Fundamentals

**Content:**
- Tag: `LLM Fundamentals`
- Headline: **What happens with multiple messages?**
- Two-column "conversation scroll" diagram:
  - **Left — Message 1:**
    - 👤 "Help me with my landing page"
    - 🤖 Claude's response...
    - Label: *2 items sent to model*
  - **Right — Message 3 (same session):**
    - 👤 "Help me with my landing page" *(faded)*
    - 🤖 Claude's response... *(faded)*
    - 👤 "Make the headline shorter" *(faded)*
    - 🤖 Updated response... *(faded)*
    - 👤 "Now add a CTA" *(active)*
    - 🤖 ← model sees ALL of this
    - Label: *6 items — entire history every time*
- Body: "Every message, Claude receives the **entire conversation from scratch.** This is the **context window** — it has limits, and it costs tokens."

**Layout:** 2-column conversation scroll comparison, then centred body text.

---

## SECTION: HOW AI FITS IN PRODUCTS

---

### Slide 13 — Frontend vs Backend
**Section label:** AI in Products

**Content:**
- Tag: `Part 2 — How AI Fits in Products`
- Headline: **Frontend vs Backend**
- Two-column cards:
  - 🍽️ **Frontend** — "The dining room & menu. What users see and touch." · *The designer's domain*
  - 👨‍🍳 **Backend** — "The kitchen. Where the work actually happens." · *Where AI lives*
- Body: "Claude runs in the backend — but designers **shape what reaches it** and how results come back."

**Layout:** 2-column cards side by side (purple / orange accent), body line below.

---

### Slide 14 — What is an API?
**Section label:** AI in Products

**Content:**
- Tag: `How AI Fits in Products`
- Headline: **What is an API?**
- Feature card:
  - 🤵 **An API is a waiter.**
  - 4-step horizontal flow:
    - 🙋 You — place order
    - 🤵 API — carries request
    - 🧠 Claude — processes it
    - ✨ Result — served to you
- Body: "Your app sends a prompt to Claude's API. Claude processes it and sends back a response. Your app displays it."

**Layout:** Single centred feature card with internal horizontal flow diagram.

---

### Slide 15 — Full Context Anatomy
**Section label:** AI in Products

**Content:**
- Tag: `How AI Fits in Products`
- Headline: **What actually gets sent to Claude?**
- Intro: "Every API request is a single large block of text — not just your message."
- Annotated code block (4 sections, colour-coded):
  - 🔵 **System Prompt** ← *set by the product team, hidden from users*
    - `"You are a UX design assistant. Be concise. When critiquing, use bullet points. Today's date: 2026-05-05. User timezone: AEST."`
  - 🟡 **Tool Definitions** ← *agent mode only*
    - `{ "search_web": "...", "read_file": "...", "run_code": "..." }`
  - 🟢 **Conversation History** ← *all previous turns*
    - `User: "Review my onboarding flow"`
    - `Claude: "Here are 3 issues I found..."`
  - 🟢 **Current Message** ← *what you just typed*
    - `User: "What about the mobile version?"`
- Footer: "The **system prompt** is where products define Claude's behaviour — this is high-leverage for designers building AI features."

**Layout:** Intro line, then large annotated monospace block divided into 4 labelled colour-coded sections.

---

### Slide 16 — Designer Leverage
**Section label:** AI in Products

**Content:**
- Tag: `How AI Fits in Products`
- Headline: **Where designers have leverage**
- Intro: "You don't control the kitchen. But you control three things that matter enormously:"
- 3-column cards:
  - 📋 **The Order** — The prompt — what gets asked of Claude and how
  - 📖 **The Menu** — What options you surface to users in the UI
  - 🍽️ **The Plate** — How the AI response is displayed and structured
- Body: "**That's enormous influence** — without ever touching the model."

**Layout:** Intro line, 3-column cards, bold closing line.

---

## SECTION: AI AGENTS

---

### Slide 17 — Chat vs Agent
**Section label:** AI Agents

**Content:**
- Tag: `Part 3 — AI Agents`
- Headline: **Chat vs Agent: what's the difference?**
- Two-column layout:
  - **Chat AI** (purple badge):
    - 💬 You ask a question
    - ↓
    - 🧠 Model generates response
    - ↓
    - ✅ Done
    - "**One round trip.** You drive entirely."
  - **AI Agent** (orange badge):
    - 💬 You give a goal
    - ↓
    - 🔄 Plan → Act → Observe → Repeat
    - ↓
    - ✅ Done (when it decides)
    - "**Multiple steps.** It acts on your behalf."

**Layout:** 2-column card comparison. Each card has a vertical flow with arrows.

---

### Slide 18 — Prompt Examples
**Section label:** AI Agents

**Content:**
- Tag: `AI Agents`
- Headline: **What prompts actually look like**
- Two-column layout:
  - **Chat prompt** (purple badge):
    ```
    Role:    You are a senior UX reviewer
    Task:    Critique this onboarding flow
             for drop-off risks
    Context: B2B SaaS · mobile · 5 steps
             · 40% drop at step 3
    Format:  Bullet list · severity labels
    ```
    "You write the full brief. Claude responds once."
  - **Agent prompt** (orange badge):
    ```
    Goal: Research the top 3 competitors'
          onboarding flows, compare with
          ours, then generate a report
          with specific improvements.
    ```
    "You state the outcome. The agent breaks it into steps — search, read, compare, write — autonomously."
    - Callout card: "The more autonomous the agent, the more important a **clear goal** is. Vague goal → random direction."

**Layout:** 2-column code block comparison. Monospace font. Callout card under agent column.

---

### Slide 19 — Agent Loop (Local vs Cloud)
**Section label:** AI Agents

**Content:**
- Tag: `AI Agents`
- Headline: **The agent loop — where each step runs**
- Two-zone split layout with arrows in the middle:
  - **⚙️ Your Device — Local** (orange zone):
    - Receives goal from user
    - **Act: executes tool call**
      - Read/write files
      - Run code / tests
      - Open browser
    - Returns result to LLM
    - Shows final output to user
  - **Middle arrows:**
    - → send context →
    - ← get decision ←
    - → send result →
    - ← next step ←
  - **☁️ Anthropic Cloud — LLM** (purple zone):
    - **Plan: decides what to do**
    - Reads full context window
    - Returns tool call instruction
    - **Observe: reads tool result**
    - Decides: next step or done?
    - *Never touches your files directly*
- Footer: "The **brain is always in the cloud**. The **body acts locally**. Your data crosses the network on each step."

**Layout:** Side-by-side two-zone diagram (dashed borders, colour-coded). Bidirectional arrows column in the middle.

---

### Slide 20 — Brain & Body Analogy
**Section label:** AI Agents

**Content:**
- Tag: `AI Agents`
- Headline: **LLM as brain. Claude Code as body.**
- Two-column layout:
  - 🧠 **LLM = Brain**
    - "Reasons, plans, decides, uses language. Lives in the cloud. Tells the body what to do next."
    - Badge: `Claude API · Cloud`
  - *(middle: ⟵ instructs ⟶ / reports back / API calls)*
  - 🤖 **Claude Code = Body**
    - "Takes real-world actions. Runs on your machine. Reads files, writes code, runs tests, opens browsers."
    - Badge: `Local Agent · Your Device`
- Body: "The brain thinks. The body acts. Your data stays local — **only the instructions cross the network.**"

**Layout:** 2-column analogy cards with a connecting middle column. Closing body line below.

---

### Slide 21 — Tools
**Section label:** AI Agents

**Content:**
- Tag: `AI Agents`
- Headline: **What tools can an agent use?**
- 3×2 grid of tool cards:
  - 🔍 **Web Search** — "Look this up for me"
  - 📂 **File Reader** — "Read this document"
  - ⚡ **Code Runner** — "Execute this script"
  - 📅 **Calendar / Email** — "Book this meeting"
  - 🎨 **Design APIs** — "Export this Figma frame"
  - 🔌 **Any API** *(dashed, dimmed)* — "If it has an API, an agent can use it via MCP"

**Layout:** 3-column 2-row card grid. Last card is dashed/muted to indicate extensibility.

---

## SECTION: MCP & SKILLS

---

### Slide 22 — What's MCP?
**Section label:** MCP & Skills

**Content:**
- Tag: `MCP & Skills`
- Caption/headline: **What's MCP?**
- Prompt: "Before the definition: what do you think this connection layer does?"
- Background image: USB-C hub connected to a laptop (`assets/usb-c-hub.jpeg`).

**Layout:** Full-bleed darkened photo with centred question text. Designed as an audience prompt before explanation.

---

### Slide 23 — MCP Metaphor
**Section label:** MCP & Skills

**Content:**
- Tag: `MCP & Skills`
- Headline: **MCP is the USB-C hub for AI tools**
- Two-column layout:
  - **Left visual:** USB-C hub photo with overlay:
    - Badge: `Metaphor`
    - **One port, many devices**
    - "A USB-C hub lets one laptop talk to screens, drives, cameras, and chargers without custom wiring for each device."
  - **Right flow:**
    - **Before MCP — Custom wiring everywhere**
      - Every AI product needs a custom integration for every tool: Figma, Notion, GitHub, browser, analytics.
    - `→`
    - **MCP — One shared protocol**
      - Tools expose a standard interface. Any MCP-capable agent can discover and call those tools.
    - `→`
    - **Result — AI can work inside your tools**
      - It can fetch design data, create diagrams, inspect tickets, and return structured results.

**Layout:** Photo card on the left, stacked flow cards on the right.

---

### Slide 24 — What is MCP?
**Section label:** MCP & Skills

**Content:**
- Tag: `Part 4 — MCP & Skills`
- Headline: **What is MCP?**
- Intro: "**Model Context Protocol** — an open standard for connecting AI models to external tools and data. Think of it as **USB-C for AI tools.**"
- **Before MCP** (label):
  - `Figma` ⇝ `Custom code` ⇝ `Claude`
- **After MCP** (label):
  - `Figma`, `Notion`, `GitHub` → `MCP Protocol` → `🧠 Any AI`
- Footer: "For designers: AI can soon **work directly inside your tools**, not just chat about them."

**Layout:** Intro text, then before/after diagram. Before = linear chain. After = many tools funnel through one protocol bridge to any AI.

---

### Slide 25 — Why a Separate MCP Server?
**Section label:** MCP & Skills

**Content:**
- Tag: `MCP & Skills`
- Headline: **Why is there a separate MCP server?**
- Intro: "Claude Code talks to a tool server. The server handles the service-specific work."
- High-level architecture diagram:
  - `Claude Code` → `Figma MCP Server` → `Figma / FigJam`
  - Forward request label: `generate_diagram`
  - Return labels: `diagram link` / `tool result`
- Benefit cards:
  - **Cleaner boundary** — Claude Code does not need to know every Figma API detail.
  - **Safer access** — Auth, permissions, and rate limits live in the server.
  - **Reusable tools** — Any MCP-capable client can use the same Figma integration.
- Footer idea: "Example tool: Figma MCP `generate_diagram`, which creates editable FigJam diagrams from Mermaid syntax or natural language."

**Layout:** Three-node horizontal architecture diagram with two connector columns. Benefit cards below.

---

### Slide 26 — What's skill?
**Section label:** MCP & Skills

**Content:**
- Tag: `MCP & Skills`
- Caption/headline: **What's skill?**
- Prompt: "Before the definition: what would make a smart AI behave more like a designer on your team?"
- Background image: Senior designer mentoring a junior teammate (`assets/mentor-designer.jpeg`).

**Layout:** Full-bleed darkened photo with centred question text. Designed as an audience prompt before the skills metaphor.

---

### Slide 27 — What are Skills?
**Section label:** MCP & Skills

**Content:**
- Tag: `MCP & Skills`
- Headline: **Skills turn a smart beginner into a reliable teammate**
- Two-column layout:
  - **Left visual:** Mentor/mentee photo with overlay:
    - Badge: `Metaphor`
    - **The senior designer writes the playbook**
    - "Not just advice. A repeatable workflow: what to check, which tools to use, what good looks like, and when to ask for review."
  - **Right flow:**
    - **AI Agent — A well-read graduate**
      - Has read thousands of design books. Knows patterns, terms, and examples, but not your team's way of working.
    - `+`
    - **Skill — A senior's workflow**
      - Instructions, tools, context, examples, constraints, checklists, and review gates packaged together.
    - `=`
    - **Result — Reliable design teammate**
      - More structured, repeatable, team-specific work. Not magically smarter, just much better guided.
- Footer: "A skill teaches the agent **how your team works**, not just what design words mean."

**Layout:** Photo card on the left, stacked equation cards on the right.

---

### Slide 28 — Anatomy of a Real Skill
**Section label:** MCP & Skills

**Content:**
- Tag: `MCP & Skills`
- Headline: **Anatomy of a real skill**
- Intro: "Example: **generate-project-plan**, a Figma workflow skill that turns a PRD into a FigJam project plan."
- 3-column layout:
  - **When to use:** Triggered when a user provides a PRD and asks for an interactive project plan in FigJam.
    - Mini terminal example: `/generate-project-plan`, PRD name, optional repo paths.
  - **What it loads:** Reusable references and subskills:
    - `palette.md` — colours and typography
    - `layout.md` — canvas sizing rules
    - `section-catalog.md` — candidate plan sections
    - `blocks/*.md` — tables, callouts, diagrams
  - **How it behaves:** Guardrails built in:
    - Research before writing
    - User confirms sections
    - Screenshot checkpoints
    - Targeted fixes, not full regeneration
- Footer: "A good skill is not just a prompt. It packages **procedure, references, constraints, and review gates**."

**Layout:** Three equal cards. Left = trigger, middle = loaded context, right = behaviour guardrails.

---

### Slide 29 — Workflow Skills Control Autonomy
**Section label:** MCP & Skills

**Content:**
- Tag: `MCP & Skills`
- Headline: **Workflow skills control autonomy**
- Intro: "The skill breaks a complex design deliverable into phases the agent can follow and the user can inspect."
- Three phase columns:
  - **Research**
    1. Gather context — read PRD, goals, risks, owners, codebase hints.
    2. Propose sections — only suggest sections with real supporting content.
    3. Find gaps — ask specific answerable questions per section.
  - **Confirm**
    4. Preview content — show bullets, rows, stickies, and block shape.
    5. Create file — make FigJam only after the plan is approved.
    6. Build skeleton — create placeholder sections before filling details.
  - **Write**
    7. Fill sections — one section at a time with screenshot review.
    8. Add diagrams — generate, wrap, and verify editable FigJam diagrams.
    9. Final review — check layout, placeholders, overlaps, then report.
- Closing card: "**The pattern:** give the agent autonomy inside each phase, but put human checkpoints between phases."

**Layout:** Three-card phase diagram: Research / Confirm / Write, each with three numbered mini steps.

---

### Slide 30 — Why Agents Cost More
**Section label:** AI Agents

**Content:**
- Tag: `AI Agents`
- Headline: **Why agents cost more than chat**
- Two-column conversation scroll comparison:
  - **Left — Chat (1 round trip):**
    - 👤 Your message
    - 🤖 Response
    - Label: *~2 items · small context*
  - **Right — Agent (10 steps):**
    - 👤 Your goal
    - 🤖 Plan step 1
    - 🔧 Tool result
    - 🤖 Plan step 2
    - 🔧 Tool result
    - 🤖 Plan step 3
    - 🔧 ... keeps growing
    - Label: *Every step adds to the scroll → more tokens each time*
- Body: "Context grows with every step — this is why **managing context becomes critical** in agent workflows."

**Layout:** 2-column scroll comparison (purple vs orange accent). Body line below.

---

### Slide 31 — Three Claude Products
**Section label:** AI Agents

**Content:**
- Tag: `AI Agents`
- Headline: **The three Claude products**
- Comparison table:

|  | Claude.ai (Chat) | Claude for Work | Claude Code |
|--|--|--|--|
| **What it is** | Conversational AI | AI + org tools & data | AI that writes & runs code |
| **Autonomy** | You drive entirely | Assists with your context | Acts independently |
| **Best for designers** | Daily thinking partner | Design process & docs | Not directly (yet) |
| **Runs where** | Cloud only | Cloud + org integrations | Brain cloud · body local |

**Layout:** Full-width comparison table, 4 rows × 4 columns.

---

## SECTION: LIVE DEMO

---

### Slide 32 — Live Demo
**Section label:** Live Demo

**Content:**
- 🎬
- Tag: `Part 5 — Live Demo`
- Headline: **Seeing it in action**
- 2×2 grid of demo steps:
  - **Step 1** — Bad prompt → generic, low-value output
  - **Step 2** — Good prompt → dramatically better output
  - **Step 3** — Design critique — real UX review use case
  - **Step 4** — Iterating — building on the same conversation

**Layout:** Feature card with gradient background. Internal 2×2 grid of step cards.

---

## SESSION BREAK

---

### Slide 33 — Session Break
**Type:** Title slide
**Section label:** *(none)*

**Content:**
- Break badge: `Session break`
- Headline: **Session 1 complete.**
- Body: "Take 5–10 min. Session 2 covers context management, best practices, and what AI means for the future of design."
- Badge: `Context & Best Practices up next`

**Layout:** Centred title slide. Break badge at top, large headline, body text, single badge.

---

## SESSION 2

---

## SECTION: CONTEXT

---

### Slide 34 — Context is Everything
**Section label:** Context

**Content:**
- Tag: `Part 6 — Context`
- Headline: **Context is everything**
- Feature card: "The model **only knows what you tell it.** Every gap in context is filled with a guess."
- Two-column comparison:
  - **Vague brief** (red accent): "Help me design a better onboarding flow" → Result: generic, forgettable
  - **Rich brief** (green accent): "You are a senior UX reviewer. B2B SaaS for HR teams. 40% drop-off at step 3 on mobile..." → Result: targeted, actionable

**Layout:** Feature card centred at top, then 2-column before/after example.

---

### Slide 35 — Three Levers
**Section label:** Context

**Content:**
- Tag: `Context`
- Headline: **Three levers you control**
- 3-step numbered list:
  1. **Role — who you tell Claude it is** — "You are a senior UX reviewer focused on accessibility..."
  2. **Task + Constraints — the actual ask** — The problem, the audience, the medium, the limitations, the success criteria
  3. **Examples — show what "good" looks like** — A before/after, a reference design, a sample output format. The model learns fast from examples.
- Body: "**Designers are already good at this.** Personas, briefs, constraints, success criteria — same skill."

**Layout:** Vertical numbered steps list, body line below.

---

### Slide 36 — Freelancer Brief
**Section label:** Context

**Content:**
- Tag: `Context`
- Headline: **The freelancer brief analogy**
- Intro: "Claude is the most responsive freelancer you've ever briefed. It will do *exactly* what you ask — so ask well."
- Prompt template box:
  ```
  Role:    You are a [senior UX designer / accessibility expert / ...]
  Task:    [What you want done, specifically]
  Context: [Product, audience, constraints, pain points]
  Format:  [How you want the output — list, table, critique, etc.]
  ```
- Footer: "Four lines. Works every time."

**Layout:** Intro, centred card with code-style template, footer.

---

### Slide 37 — High Context Problem
**Section label:** Context

**Content:**
- Tag: `Context`
- Headline: **The problem with large context**
- Context bar visualisation:
  - 🟢 **Lean context** — `████░░░░░░░░░░░░░░░░` 22% full
  - 🔴 **Context window nearly full** — `██████████████████░░` 91% — degraded performance
- 4-item problem list:
  - ✗ **Slower and more expensive** — the model processes every token on every request
  - ✗ **Lost in the middle** — models lose track of information buried in the middle of very long contexts
  - ✗ **Context cutoff** — when the limit is hit, the earliest content gets dropped silently
  - ✗ **Diluted focus** — more noise makes it harder for the model to follow your actual intent

**Layout:** Two progress bar visualisations, then a 4-item ✗ list.

---

### Slide 38 — Keep Context Lean
**Section label:** Context

**Content:**
- Tag: `Context`
- Headline: **How to keep context lean**
- 2-column 3-row grid of green tip cards:
  - 🗂️ **Start fresh for new tasks** — Don't carry baggage from an unrelated conversation into a new one
  - ✂️ **Summarise, don't paste** — Paste a 3-line summary of a document instead of the full 50-page doc
  - 📌 **System prompt for permanents** — Put stable instructions there once, not re-stated in every message
  - 🔍 **Use retrieval, not raw data** — Let tools search and fetch only the relevant parts, on demand
  - 🧹 **Compact long agent sessions** — Ask Claude to summarise the conversation before continuing a long agent run
  - 🎯 **Be specific, not verbose** — A precise 3-line prompt beats a rambling 20-line one every time

**Layout:** 2-column grid of tip cards (icon + bold title + description). All green accent except last card (neutral).

---

## SECTION: BEST PRACTICES

---

### Slide 39 — Best Practices
**Section label:** Best Practices

**Content:**
- Tag: `Part 7 — Best Practices`
- Headline: **Six rules to work better with AI**
- 2-column 3-row grid of cards:
  - 🎯 **Be specific** — Role + task + format in every prompt
  - 📎 **Give examples** — Show what "good" looks like
  - 🔄 **Iterate, don't restart** — Build on the same conversation
  - 🔍 **Verify before trusting** — Especially facts and client-facing claims
  - ✏️ **Draft, don't decide** — AI accelerates thinking; judgment is yours
  - 🔒 **Protect sensitive data** — No client PII or confidential docs in public tools

**Layout:** 2-column grid of tip cards.

---

### Slide 40 — Limitations
**Section label:** Best Practices

**Content:**
- Tag: `Limitations`
- Headline: **What Claude can't do well**
- 5-item ✗ list:
  - ✗ **No live web browsing by default** — knowledge has a cutoff unless connected to a search tool
  - ✗ **No memory between sessions** — each new conversation starts blank unless memory is configured
  - ✗ **Can be confidently wrong** — it won't always signal when it's guessing
  - ✗ **Context window limits** — very long conversations get cut off; earlier context is forgotten
  - ✗ **Reasoning ≠ truth** — extended thinking improves accuracy but can still produce confident-sounding wrong conclusions

**Layout:** Full-width ✗ checklist.

---

## SECTION: WHAT'S NEXT

---

### Slide 41 — Where Designers Add Value
**Section label:** What's Next

**Content:**
- Tag: `Part 8 — What's Next`
- Headline: **Where designers add value in AI products**
- 2×2 grid of cards:
  - 💬 **Prompt UX** — How users interact with AI — inputs, suggestions, tone of voice
  - 📊 **Output presentation** — How AI responses are displayed, structured, and scannable
  - 🤝 **Trust design** — When to show AI confidence, when to add a human checkpoint
  - ⚠️ **AI failure states** — Error UX when AI is wrong, slow, or uncertain

**Layout:** 2-column 2-row card grid.

---

### Slide 42 — Cheat Sheet
**Section label:** Cheat Sheet

**Content:**
- Tag: `📸 Screenshot this`
- **Designer's AI Cheat Sheet**
- 4-column layout:
  - **Prompt Template:**
    ```
    Role:    You are a [UX expert...]
    Task:    [What to do]
    Context: [Background info]
    Format:  [Output style]
    ```
  - **6 Best Practices:**
    - Be specific: role + task + format
    - Give examples of good output
    - Iterate in the same conversation
    - Verify before you trust
    - Draft with AI, decide yourself
    - Never paste sensitive data
  - **Keep Context Lean:**
    - Start fresh for new tasks
    - Summarise — don't paste docs
    - System prompt for permanents
    - Use retrieval, not raw data
  - **Remember:**
    - LLM predicts, doesn't reason
    - Every message = full history
    - Agents: brain cloud · body local
    - MCP = USB-C for AI tools
    - No memory between sessions

**Layout:** Dense 4-column reference layout. Designed to be screenshotted. Compact text size.

---

### Slide 43 — What is Harness Engineering?
**Section label:** Harness Engineering

**Content:**
- Tag: `Extra — Harness Engineering`
- Headline: **What is harness engineering?**
- Intro: "Harness engineering is designing the **runtime around an AI model** so an agent can work reliably."
- Two-column comparison:
  - **Not this:** one prompt telling the model to "be smarter" or "be careful"; no state, no verification loop.
  - **This:** `Goal → plan → act → observe → verify`, with tools wired in, permissions bounded, state tracked, and repeatable behaviour.
- Closing line: "Prompt engineering changes the words. Harness engineering changes **the system the model runs inside**."

**Layout:** Two contrast cards with terminal-style snippets.

---

### Slide 44 — What is Inside the Harness?
**Section label:** Harness Engineering

**Content:**
- Tag: `Harness Engineering`
- Headline: **What is inside the harness?**
- Center model card: "The model — powerful, but stateless and probabilistic unless the harness gives it structure."
- Six surrounding blocks:
  - **Instructions** — Role, task rules, workflow steps
  - **Tools** — Search, files, APIs, MCP servers
  - **Context** — Docs, examples, user data, retrieved facts
  - **Memory / State** — What happened, what changed, what remains
  - **Guardrails** — Permissions, limits, approval gates
  - **Verification** — Tests, screenshots, evals, human review
- Footer: "Most agent quality comes from how these pieces work together, not from the chat box alone."

**Layout:** 3-column hub diagram: left blocks, centered model, right blocks.

---

### Slide 45 — Why Designers Should Care
**Section label:** Harness Engineering

**Content:**
- Tag: `Harness Engineering`
- Headline: **Why designers should care**
- Intro: "A reliable agent is also a UX problem: users need control, visibility, and recovery."
- 2×2 grid:
  - ✅ **Human checkpoints** — Where should the agent pause and ask before acting?
  - 🔐 **Permissions UX** — What can it read, edit, delete, publish, or send?
  - 📋 **Structured outputs** — How should results be grouped, ranked, scanned, and reused?
  - ⚠️ **Failure states** — What happens when the agent is wrong, blocked, slow, or uncertain?
- Closing card: "**The design question:** not 'Can AI do this?' but 'How do we make the agent safe, inspectable, and useful?'"

**Layout:** 2-column 2-row UX relevance grid plus closing takeaway.

---

### Slide 46 — Q&A
**Type:** Title slide
**Section label:** *(none)*

**Content:**
- Tag: `That's a wrap`
- Headline: **Questions?**
- Prompt for audience: *"What's something you want to use AI for in your design work?" or "What's the biggest misconception you came in with?"*
- Three badges: `claude.ai` · `anthropic.com` · `Thank you`

**Layout:** Centred title slide. Italic prompt text below headline. Three pill badges at bottom.

---

## Summary: Slide Count by Section

| Section | Slides | Count |
|---------|--------|-------|
| Opener | 1–3 | 3 |
| Myth-Busting | 4–6 | 3 |
| LLM Fundamentals | 7–12 | 6 |
| AI in Products | 13–16 | 4 |
| AI Agents | 17–21, 30–31 | 7 |
| MCP & Skills | 22–29 | 8 |
| Live Demo | 32 | 1 |
| Session Break | 33 | 1 |
| Context | 34–38 | 5 |
| Best Practices | 39–40 | 2 |
| What's Next | 41 | 1 |
| Cheat Sheet | 42 | 1 |
| Harness Engineering | 43–45 | 3 |
| Q&A | 46 | 1 |
| **Total** | | **46** |
