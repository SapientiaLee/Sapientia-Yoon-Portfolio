import PortfolioGrid from '../components/PortfolioGrid'

function Concept() {
  const conceptImages = [
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Urban Dreamscape",
      size: "24\" x 36\"",
      medium: "Digital Painting",
      year: "2024",
      category: "Concept Art",
      description: "A futuristic cityscape exploring the intersection of technology and human emotion. This piece examines how urban environments shape our collective consciousness and individual identity."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Ethereal Connection",
      size: "18\" x 24\"",
      medium: "Mixed Media",
      year: "2024",
      category: "Concept Art",
      description: "An exploration of spiritual connectivity through abstract forms and flowing lines. This work represents the invisible threads that bind all living beings together."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Mechanical Heart",
      size: "30\" x 40\"",
      medium: "Oil on Canvas",
      year: "2023",
      category: "Concept Art",
      description: "A study of the relationship between organic life and artificial intelligence. The piece questions what it means to be alive in an increasingly digital world."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Memory Palace",
      size: "22\" x 28\"",
      medium: "Acrylic",
      year: "2024",
      category: "Concept Art",
      description: "A visual representation of how memories are stored and retrieved in the human mind. Each room represents a different aspect of consciousness."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Quantum Garden",
      size: "20\" x 30\"",
      medium: "Digital Art",
      year: "2023",
      category: "Concept Art",
      description: "A garden where plants exist in multiple states simultaneously, inspired by quantum physics principles. This piece explores the nature of reality and perception."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Time's Tapestry",
      size: "36\" x 48\"",
      medium: "Mixed Media",
      year: "2024",
      category: "Concept Art",
      description: "A woven representation of time as a fabric that can be folded, stretched, and manipulated. Each thread represents a different timeline or possibility."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Neural Symphony",
      size: "24\" x 32\"",
      medium: "Watercolor",
      year: "2023",
      category: "Concept Art",
      description: "A visual interpretation of how neurons fire and communicate in the brain, creating the symphony of consciousness that makes us who we are."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Dimensional Portal",
      size: "28\" x 36\"",
      medium: "Digital Painting",
      year: "2024",
      category: "Concept Art",
      description: "A gateway between different dimensions of reality, where the laws of physics bend and new possibilities emerge from the unknown."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Emotional Weather",
      size: "18\" x 26\"",
      medium: "Oil Pastel",
      year: "2023",
      category: "Concept Art",
      description: "A meteorological map of human emotions, where feelings create weather patterns and atmospheric conditions that influence our daily lives."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Consciousness Tree",
      size: "32\" x 44\"",
      medium: "Mixed Media",
      year: "2024",
      category: "Concept Art",
      description: "A tree whose branches represent different states of consciousness, from deep sleep to heightened awareness, growing towards enlightenment."
    }
  ]

  return <PortfolioGrid images={conceptImages} title="Concept Art" />
}

export default Concept 