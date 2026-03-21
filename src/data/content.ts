// ==========================================
// CAIO KALININE - PORTFOLIO CONTENT
// ==========================================
// Every piece of text, image, and link on the site can be edited here.
// Images should be placed in the public/images folder and referenced like "/images/filename.jpg"

export const siteConfig = {
  name: "Caio Kalinine",
  description: "Visual Artist, Concept Art, Illustration",
  domain: "caiokalinine.com",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export const homeSections = [
  {
    title: "Concept Art",
    description: "Worldbuilding and environmental design.",
    image: "/images/concept-art.jpg",
  },
  {
    title: "Illustration",
    description: "Narrative and standalone pieces.",
    image: "/images/illustration.jpg",
  },
  {
    title: "Sketches",
    description: "Process, fragments, and ideas.",
    image: "/images/sketches.jpg",
  },
  {
    title: "Miscellaneous",
    description: "Experiments and personal projects.",
    image: "/images/misc.jpg",
  }
];

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
    content: "A short text about the process of designing environments that feel like ancient or abandoned repositories of knowledge. I often start with dark silhouettes, blocking out shapes before delving into the granular texture of the ruins...",
    image: "/images/blog-1.jpg"
  },
  {
    id: "2",
    date: "2024-02-15",
    title: "Creature Sketchbook Dump",
    content: "Sharing some recent sketches from the sketchbook. Focused mostly on insectoid shapes and fungal integrations. I enjoy the blend between natural anatomy and bizarre alien growths.",
    image: "/images/blog-2.jpg"
  }
];
