// Seminar schedule data — edit this file to add, remove, or update talks.
// Each entry supports the following fields:
//   type       "talk" | "journal-club"  (required)
//              "talk"          — invited speaker presentation
//              "journal-club"  — group paper reading session (no speaker/bio needed)
//   title      (string, required)
//   speaker    (string, required for type "talk")
//   date       (string, required)
//   status     "upcoming" | "past"  (required)
//   time       (string, required)
//   location   (string, required)
//   abstract   (string, required)  — HTML is allowed
//   bio        (string, required for type "talk")  — HTML is allowed

const SEMINARS = [
   {
    type: "brown-bag",
    title: "Early-career disruptors produce lasting innovation but pay a professional penalty  (Xie et al)",
    speaker: "Dongbo Shi",
    date: "June 29, 2026",
    status: "upcoming",
    time: "Tuesday · 14:00 – 15:00 PM",
    location: "Virtual",
    abstract: "While the macro-level decline of disruptive science threatens innovation, how this decline relates to individual scientists’ career trajectories and professional costs remains unknown. Using a dataset of more than 30 million articles published from 1960 to 2021, we track researchers across their careers and classify their early-career strategies based on publication volume and disruption index. We find that although the proportion of early-career disruptors has declined over time, these individuals retain a capacity for highly disruptive science throughout their careers. Crucially, however, early disruptors face substantial professional costs: they have higher attrition rates, shorter careers, and accumulate less career prestige than peers who prioritize publication volume. Finally, we show that intense competition and traditional funding mechanisms amplify this asymmetry, penalizing high-risk, high-reward research. Our findings reveal a fundamental misalignment between institutional metrics and scientific progress, offering insights for science policy and academic career sustainability. ",
  },
  {
    type: "journal-club",
    title: "Growth is Getting Harder to Find, Not Ideas (Fort et al)",
    date: "May 26, 2026",
    status: "past",
    time: "Tuesday · 14:00 – 15:00 PM",
    location: "Virtual",
    abstract: "We will read and discuss the NBER working paper examines the relationships between research inputs and ideas (patents) versus ideas and growth.",
  },
  {
    type: "journal-club",
    title: "Deep Research on a Loop: Using AI Agents to Construct Economic Datasets (Afonso et al)",
    date: "May 19, 2026",
    status: "past",
    time: "Tuesday · 14:00 – 15:00 PM",
    location: "Virtual",
    abstract: "We will read and discuss the NBER working paper which uses AI agents to assemble datasets from publicly available sources.",
  },
  {
    type: "journal-club",
    title: "Solving Problems of Unknown Difficulty; Sharing Credit for Joint Research (Nicholas Wu)",
    date: "May 12, 2026",
    status: "past",
    time: "Tuesday · 14:00 – 15:00 PM",
    location: "Virtual",
    abstract: "We will read and discuss the rising star microeconomist Nicholas Wu's JMP and another related working paper.",
  },
  {
    type: "talk",
    title: "Agentic Framework for Political Biography Extraction",
    speaker: "Yifei Zhu",
    date: "April 21, 2026",
    status: "past",
    time: "Tuesday · 14:00 – 15:00 PM",
    location: "Virtual (Zoom: 637 734 0280（BIMSA）)",
    abstract: "The production of large-scale political datasets typically demands extracting structured facts from vast piles of unstructured documents or web sources, a task that traditionally relies on expensive human experts and remains prohibitively difficult to automate at scale. In this paper, we leverage Large Language Models (LLMs) to automate the extraction of multidimensional elite biographies, addressing a long-standing bottleneck in political science research. We propose a two-stage “Synthesis-Coding” framework for complex extraction task: an upstream synthesis stage that uses recursive agentic LLMs to search, filter, and curate biography from heterogeneous web sources, followed by a downstream coding stage that maps curated biography into structured dataframes. We validate this framework through three primary results. First, we demonstrate that, when given curated contexts, LLM coders match or outperform human experts in extraction accuracy. Second, we show that in web environments, the agentic system synthesizes more information from web resources than human collective intelligence (Wikipedia). Finally, we diagnosed that directly coding from long and multilanguage corpora introduces bias that the synthesis stage can alleviate by curating evidence into signal-dense representations. By comprehensive evaluation, We provide a generalizable, scalable framework for building transparent and expansible large scale database in political science.",
    bio: "Yifei Zhu is Ph.D. candidate in the Department of Politics and Public Administration at the University of Hong Kong (HKUPPA). His primary field is political methodology, with a focus on language models for social science. He explore ways to transparently and credibly use language models to accelerate social science research and build trust between these models and researchers. ",
  },
  {
    type: "journal-club",
    title: "The impact of AI and digital platforms on the information ecosystem (Stiglitz &amp; Ventura-Bole, 2025)",
    date: "April 28, 2026",
    status: "past",
    time: "Tuesday · 14:00 – 15:00 PM",
    location: "Virtual",
    abstract: "We will read and discuss Stiglitz &amp; Ventura-Bole (2025), which develops a tractable model to study how AI and digital platforms impact the information ecosystem.",
  },


];
