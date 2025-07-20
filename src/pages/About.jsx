import PortfolioGrid from '../components/PortfolioGrid'

function About() {
  const aboutImages = [
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Self Portrait Series",
      size: "24\" x 36\"",
      medium: "Oil on Canvas",
      year: "2024",
      category: "Personal",
      description: "A series of self-portraits exploring identity, growth, and the artist's journey through different phases of life and artistic development."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Childhood Memories",
      size: "20\" x 28\"",
      medium: "Mixed Media",
      year: "2023",
      category: "Personal",
      description: "A collection of works inspired by early memories, family stories, and the places that shaped the artist's formative years."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Artistic Evolution",
      size: "30\" x 40\"",
      medium: "Digital Art",
      year: "2024",
      category: "Personal",
      description: "A visual timeline of the artist's creative journey, showing the progression of style, technique, and artistic philosophy over time."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Cultural Heritage",
      size: "18\" x 24\"",
      medium: "Watercolor",
      year: "2023",
      category: "Personal",
      description: "Works exploring cultural identity, traditions, and the artist's connection to their heritage and ancestral roots."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Daily Inspirations",
      size: "22\" x 30\"",
      medium: "Sketchbook",
      year: "2024",
      category: "Personal",
      description: "A series of quick sketches and studies capturing everyday moments, objects, and scenes that inspire the artist's work."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Creative Process",
      size: "28\" x 36\"",
      medium: "Mixed Media",
      year: "2023",
      category: "Personal",
      description: "A behind-the-scenes look at the artist's creative process, from initial sketches to finished works, revealing the methods and madness."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Personal Growth",
      size: "24\" x 32\"",
      medium: "Acrylic",
      year: "2024",
      category: "Personal",
      description: "Abstract representations of personal challenges, triumphs, and the ongoing journey of self-discovery and artistic development."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Influences & Mentors",
      size: "16\" x 20\"",
      medium: "Charcoal",
      year: "2023",
      category: "Personal",
      description: "Portraits and studies of the people, artists, and teachers who have influenced the artist's work and creative philosophy."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Studio Life",
      size: "20\" x 26\"",
      medium: "Photography",
      year: "2024",
      category: "Personal",
      description: "A photographic series documenting the artist's workspace, tools, and the environment where creativity comes to life."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Future Visions",
      size: "26\" x 34\"",
      medium: "Digital Painting",
      year: "2023",
      category: "Personal",
      description: "Conceptual works exploring the artist's hopes, dreams, and visions for the future of their art and creative practice."
    }
  ]

  return <PortfolioGrid images={aboutImages} title="About the Artist" />
}

export default About 