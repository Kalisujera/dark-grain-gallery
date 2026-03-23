// ==========================================
// CAIO KALININE - PORTFOLIO CONTENT & ARCHIVE SYSTEM
// ==========================================
// This file acts as your central database. 
// Every piece of text, image, and link on the site can be edited here.

export const siteConfig = {
  name: "Caio Kalinine",
  description: "Visual Artist, Concept Art, Illustration",
  domain: "caiokalinine.com",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Journal", href: "/blog" },
];

/* 
  ==========================================
  CATEGORY AND PROJECT ARCHIVE DATA
  ==========================================
  This powers the Homepage and all Category Pages.
  
  HOW TO ADD A NEW PROJECT:
  1. Find the target category (e.g. "concept-art").
  2. Copy an entire `{ ... }` block inside the `projects: []` array.
  3. Paste it below the existing one.
  4. Change the IDs, Titles, and Image URLs.
  
  HOW TO ADD IMAGES TO A PROJECT GALLERY:
  1. Go to the `gallery: []` array of a project.
  2. Add `{ url: "/images/...", caption: "Text", description: "Optional text" }`.
*/
export const archiveData: Record<string, any> = {
  "concept-art": {
    id: "concept-art",
    pageTitle: "Concept Art",
    intro: "Worldbuilding, environmental design, and architectural explorations.",
    homeBannerImage: "/images/concept-art-cover.jpg",
    projects: [
      {
        id: "nocturnal-library",
        title: "Nocturnal Library",
        subtitle: "Environment Design",
        description: "Exploration notes for an abandoned repository of knowledge. Focusing on structural scale and dim light.",
        coverImage: "/images/concept-art/nocturnal-library/cover.jpg",
        gallery: [
          {
            url: "/images/concept-art/nocturnal-library/interior-01.jpg",
            caption: "Main Hall structure",
            description: "Optional longer description about the mood and lighting."
          },
          {
            url: "/images/concept-art/nocturnal-library/exterior-01.jpg",
            caption: "Exterior facade",
            description: ""
          }
        ]
      }
    ]
  },
  "illustration": {
    id: "illustration",
    pageTitle: "Illustration",
    intro: "Narrative, character-focused, and standalone pieces.",
    homeBannerImage: "/images/illustration-cover.jpg",
    projects: []
  },
  "sketches": {
    id: "sketches",
    pageTitle: "Sketches",
    intro: "Process, fragments, and raw ideas from the sketchbook.",
    homeBannerImage: "/images/sketches-cover.jpg",
    projects: []
  },
  "misc": {
    id: "misc",
    pageTitle: "Miscellaneous",
    intro: "Experiments and personal oddities.",
    homeBannerImage: "/images/misc-cover.jpg",
    projects: []
  }
};

export const aboutContent = {
  title: "About",
  bio: [
    "I am Caio Kalinine, a visual artist focused on concept art, illustration, and creature design.",
    "My work explores imaginary worlds, speculative environments, and the mystery of uncharted landscapes. Through sketching and visual experimentation, I try to capture the atmosphere of places that only exist in fragments."
  ],
  profileImage: "/images/profile.jpg",
};

export const contactContent = {
  title: "Contact",
  text: "For inquiries, commissions, or collaborations, feel free to reach out via email.",
  email: "hello@caiokalinine.com",
  socials: [
    { platform: "ArtStation", url: "https://artstation.com/" },
    { platform: "Instagram", url: "https://instagram.com/" },
    { platform: "Twitter", url: "https://twitter.com/" }
  ]
};

export const blogPosts = [
  {
    id: "1",
    date: "2024-03-20",
    title: "Designing Nocturnal Archives",
    content: "A short text about the process of designing environments that feel like ancient or abandoned repositories of knowledge...",
    image: "/images/blog-1.jpg"
  }
];
