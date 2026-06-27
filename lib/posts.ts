export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingMins: number;
  tag: string;
  body: { kind: "p" | "h2" | "ul" | "quote"; text?: string; items?: string[]; cite?: string }[];
};

export const posts: Post[] = [
  {
    slug: "production-llm-evals",
    title: "Stop A/B-ing prompts: a budget for production LLM evals.",
    description:
      "What we learnt shipping ten production LLM features in regulated industries: a practical budget for evaluations, golden sets and regression tests.",
    date: "2026-05-14",
    author: "Shubham Raiyani, CTO",
    readingMins: 9,
    tag: "Applied AI",
    body: [
      { kind: "p", text: "If you read one engineering post from us this year, please make it this one. Most LLM features we&rsquo;ve been asked to rescue did not fail because the model was wrong. They failed because nobody was measuring the right thing." },
      { kind: "h2", text: "The pattern we see." },
      { kind: "p", text: "An LLM feature works beautifully in the demo. It works in the staging environment. It works for the four prompts in the QA spec. Then it hits production, where users do things QA never imagined, and quality quietly slides. Six weeks later, somebody on the leadership team types something embarrassing into the box, takes a screenshot, and the feature goes back into the backlog." },
      { kind: "p", text: "There is a known answer to this and it is dull. You build evaluations the way you build tests. You have a golden set. You have a regression suite. You run it on every change to the prompt, the retrieval pipeline, the model, the data. You publish the deltas. That&rsquo;s it." },
      { kind: "h2", text: "A starter budget." },
      { kind: "ul", items: [
        "200–500 curated golden examples per task, hand-labelled by someone who actually does the work — not a prompt engineer guessing.",
        "A regression suite that runs in CI within three minutes for the cheap tier, fifteen for the expensive.",
        "Per-task quality bars expressed as actionable numbers — &lsquo;94% of customer billing questions answered correctly without escalation&rsquo;, not &lsquo;high-quality answers&rsquo;.",
        "Human review on regressions, with clear rubric. We use a three-tier rubric and pay reviewers per item, not per hour.",
      ]},
      { kind: "h2", text: "What this buys you." },
      { kind: "p", text: "Confidence to ship — and the kind of confidence you can defend to a regulator. When we moved a 20-million-customer lender onto an LLM-assisted underwriting assistant, the deciding artefact in the regulator meeting was the eval harness output, not the architecture diagram." },
      { kind: "quote", text: "The eval harness was the artefact that closed the regulatory file. Not the model card.", cite: "Chief Risk Officer, top-10 Indian NBFC" },
      { kind: "h2", text: "What it costs." },
      { kind: "p", text: "One engineer-week of setup, half an engineer-week per month of upkeep, plus the labelling cost (typically a few hundred dollars at our volumes). For features that touch real customers, that is the cheapest insurance you will buy this year." },
    ],
  },
  {
    slug: "what-platform-engineering-actually-buys-you",
    title: "What platform engineering actually buys you, in numbers.",
    description:
      "Three years of data from our platform-engineering engagements: what teams actually gain when they invest in golden paths, IDPs and paved roads — and what they lose if they don&rsquo;t.",
    date: "2026-03-22",
    author: "Jagdish Parmar, CEO",
    readingMins: 7,
    tag: "Platform",
    body: [
      { kind: "p", text: "Platform engineering has been a fashionable phrase for three years and a useful idea for ten. The pitch is the same in every deck: golden paths, internal developer platforms, paved roads. The push-back is the same in every CFO meeting: prove it." },
      { kind: "p", text: "Here&rsquo;s our data from twenty-two platform-engineering engagements we&rsquo;ve run since 2022, with permission to publish the medians." },
      { kind: "h2", text: "What our clients actually gained." },
      { kind: "ul", items: [
        "Median time from new-repo to first production deploy: 11 days → 1.5 days.",
        "Median time to onboard a new engineer to productive: 6 weeks → 9 days.",
        "Median P1 incidents per service per quarter: 1.8 → 0.4.",
        "Median cloud spend per service: −18% in year one, after the migration drag.",
      ]},
      { kind: "h2", text: "What you give up." },
      { kind: "p", text: "Velocity, for a quarter. Every team we&rsquo;ve worked with sees a measurable dip in feature throughput in the first three months as engineers learn the new paved road. The numbers above are post-dip. If you don&rsquo;t budget for that dip publicly, your platform team will be on the chopping block by month four." },
      { kind: "h2", text: "What we recommend if you&rsquo;re starting." },
      { kind: "ul", items: [
        "Pick a target — &lsquo;new service in a day&rsquo; is a good one — and ruthlessly optimise for it.",
        "Build the paved road for the third team, not the first. The first team will tolerate sharp edges; the third team is the early-majority.",
        "Publish a service health score that includes platform-adoption signals. Make the trade-off visible.",
        "Hire the platform engineering lead from outside if you can&rsquo;t free your best staff engineer for it.",
      ]},
    ],
  },
];
