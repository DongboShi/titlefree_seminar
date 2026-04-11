// Seminar schedule data — edit this file to add, remove, or update talks.
// Each entry supports the following fields:
//   title      (string, required)
//   speaker    (string, required)
//   date       (string, required)
//   status     "upcoming" | "past"  (required)
//   time       (string, required)
//   location   (string, required)
//   abstract   (string, required)  — HTML is allowed
//   bio        (string, required)  — HTML is allowed

const SEMINARS = [
  {
    title: "Innovation Networks and Knowledge Diffusion in High-Tech Industries",
    speaker: "Dr. Elena Marchetti",
    date: "May 15, 2025",
    status: "upcoming",
    time: "Thursday · 10:00 – 11:30 AM",
    location: "Room 402, Econ Building",
    abstract: "This talk investigates how knowledge flows through inter-firm collaboration networks in semiconductor and biotech sectors. Using a novel dataset of patent co-inventorship records spanning 1990–2020, we document that firms occupying structural brokerage positions absorb external knowledge 40 percent faster than peripheral firms. We further show that policy-induced R&D tax credits amplify these network effects heterogeneously across firm size, raising important questions about optimal innovation policy design.",
    bio: "Elena Marchetti is an Associate Professor of Economics at the University of Zurich and a Research Affiliate of CEPR. Her research lies at the intersection of innovation economics, industrial organization, and network theory. She received her PhD from MIT in 2014 and has published in the <em>American Economic Review</em>, <em>Review of Economic Studies</em>, and <em>Management Science</em>.",
  },
  {
    title: "Science Policy, Basic Research Funding, and Long-Run Economic Growth",
    speaker: "Prof. Samuel Okafor",
    date: "June 3, 2025",
    status: "upcoming",
    time: "Tuesday · 2:00 – 3:30 PM",
    location: "Virtual (Zoom)",
    abstract: "We construct a directed measure of federal basic research expenditures matched to industry-level productivity data from 1953 to 2019. Exploiting budget shocks from the post-Sputnik era and the Cold War draw-down, we find that a one percent increase in basic research funding raises total factor productivity with a lag of roughly twelve years, with multiplier effects exceeding those of applied R&D. Our results inform ongoing debates on whether governments should prioritize mission-driven over curiosity-driven science.",
    bio: "Samuel Okafor is a Professor of Public Policy and Economics at the University of Chicago Harris School. He is a Senior Fellow at the National Bureau of Economic Research (NBER) and serves on the advisory board of the U.S. National Science Foundation. His work focuses on the economics of science, public investment, and endogenous growth, and has appeared in the <em>Quarterly Journal of Economics</em> and the <em>Journal of Political Economy</em>.",
  },
  {
    title: "Machine Learning Adoption, Skill Complementarity, and Labor Market Polarization",
    speaker: "Dr. Yuki Tanaka",
    date: "June 24, 2025",
    status: "upcoming",
    time: "Tuesday · 10:00 – 11:30 AM",
    location: "Room 210, Social Sciences",
    abstract: "Recent advances in machine learning have accelerated automation, yet empirical evidence on the distributional consequences remains mixed. Using linked employer–employee data from Japan and a novel index of occupational ML-exposure, we show that ML adoption raises demand for high-skill complementary tasks while displacing routine clerical and production roles. However, firms that simultaneously invest in worker retraining programs experience a 15 percent reduction in displacement rates, highlighting the policy-relevant role of human capital adjustment.",
    bio: "Yuki Tanaka is a Senior Economist at the Bank of Japan Research Institute and a Visiting Scholar at Tokyo University's Institute of Social Science. She holds a PhD in Economics from Princeton University (2017). Her research concentrates on labor economics, automation, and the economics of technology adoption in East Asian economies.",
  },
  {
    title: "Entrepreneurship, Venture Capital, and Regional Divergence",
    speaker: "Prof. Natalia Fernández",
    date: "April 3, 2025",
    status: "past",
    time: "Thursday · 2:00 – 3:30 PM",
    location: "Room 402, Econ Building",
    abstract: "Venture capital flows are spatially concentrated in a handful of metro areas, contributing to regional economic divergence. We build a quantitative spatial model of VC investment with endogenous agglomeration and calibrate it to U.S. metropolitan data from 1995 to 2018. Counterfactual experiments suggest that redirecting even five percent of VC flows toward mid-tier cities would reduce regional income inequality by eight percent without significant aggregate efficiency losses, provided local knowledge ecosystems are co-developed through place-based university partnerships.",
    bio: "Natalia Fernández is a Professor of Economics and the Director of the Entrepreneurship and Innovation Lab at Carlos III University of Madrid. She is a Research Fellow at CEPR and the CESifo Network. Her scholarship on entrepreneurship, finance, and regional growth has been published in the <em>Journal of Finance</em>, the <em>Review of Financial Studies</em>, and <em>Economic Policy</em>.",
  },
  {
    title: "Climate Change, Agricultural Productivity, and Food Security in Developing Economies",
    speaker: "Dr. Amara Diallo",
    date: "March 13, 2025",
    status: "past",
    time: "Thursday · 10:00 – 11:30 AM",
    location: "Virtual (Zoom)",
    abstract: "This paper quantifies the effect of temperature and precipitation shocks on maize and sorghum yields across sub-Saharan Africa using satellite-derived weather data and nationally representative household surveys from 2000 to 2022. We find that a one-degree Celsius increase above the 30°C threshold reduces yields by 4.5 percent per growing season. Further, smallholders with access to irrigation, improved seed varieties, and mobile market price information experience 60 percent smaller yield losses, underscoring the importance of complementary agricultural inputs in building climate resilience.",
    bio: "Amara Diallo is a Research Economist at the World Bank's Development Research Group and a Postdoctoral Fellow at the International Food Policy Research Institute (IFPRI). He received his PhD in Agricultural and Resource Economics from UC Davis in 2020. His work on climate adaptation, technology adoption, and rural livelihoods has appeared in the <em>American Journal of Agricultural Economics</em> and <em>Nature Sustainability</em>.",
  },
];
