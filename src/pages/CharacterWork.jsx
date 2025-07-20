import PortfolioGrid from '../components/PortfolioGrid'

function CharacterWork() {
  const characterImages = [
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "The Wanderer",
      size: "24\" x 36\"",
      medium: "Digital Painting",
      year: "2024",
      category: "Character Design",
      description: "A mysterious traveler with a rich backstory, designed for a fantasy novel. This character embodies themes of resilience and the search for belonging."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Urban Protector",
      size: "20\" x 28\"",
      medium: "Mixed Media",
      year: "2023",
      category: "Character Design",
      description: "A superhero character designed for a modern urban setting, combining traditional heroic elements with contemporary social commentary."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Elder Sage",
      size: "30\" x 40\"",
      medium: "Oil on Canvas",
      year: "2024",
      category: "Character Design",
      description: "A wise mentor figure with centuries of knowledge, designed for an epic fantasy series. This character represents wisdom and the passage of time."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Cyberpunk Hacker",
      size: "18\" x 24\"",
      medium: "Digital Art",
      year: "2023",
      category: "Character Design",
      description: "A tech-savvy protagonist for a cyberpunk narrative, exploring themes of identity, privacy, and resistance in a digital age."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Childhood Hero",
      size: "22\" x 30\"",
      medium: "Watercolor",
      year: "2024",
      category: "Character Design",
      description: "A whimsical character designed for children's literature, embodying innocence, courage, and the power of imagination."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Villain's Redemption",
      size: "28\" x 36\"",
      medium: "Acrylic",
      year: "2023",
      category: "Character Design",
      description: "A complex antagonist with a tragic backstory, designed to challenge traditional notions of good and evil in storytelling."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Mythical Guardian",
      size: "24\" x 32\"",
      medium: "Mixed Media",
      year: "2024",
      category: "Character Design",
      description: "A legendary protector inspired by ancient mythology, designed for a fantasy adventure game with rich cultural elements."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Everyday Hero",
      size: "16\" x 20\"",
      medium: "Charcoal",
      year: "2023",
      category: "Character Design",
      description: "An ordinary person thrust into extraordinary circumstances, representing the heroism found in everyday life and human resilience."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Comic Relief",
      size: "20\" x 26\"",
      medium: "Digital Painting",
      year: "2024",
      category: "Character Design",
      description: "A humorous sidekick character designed to provide levity and heart in serious narratives, balancing drama with comedy."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Anti-Hero's Journey",
      size: "26\" x 34\"",
      medium: "Oil Pastel",
      year: "2023",
      category: "Character Design",
      description: "A morally ambiguous protagonist whose journey explores the gray areas between right and wrong, challenging audience expectations."
    }
  ]

  return <PortfolioGrid images={characterImages} title="Character Design" />
}

export default CharacterWork 