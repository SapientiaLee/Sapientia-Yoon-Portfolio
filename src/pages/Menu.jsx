import PortfolioGrid from '../components/PortfolioGrid'

function Menu() {
  const menuImages = [
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Culinary Symphony",
      size: "24\" x 36\"",
      medium: "Oil on Canvas",
      year: "2024",
      category: "Menu Design",
      description: "A vibrant composition celebrating the art of cooking, featuring fresh ingredients, kitchen tools, and the energy of a professional kitchen in full swing."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Farm to Table",
      size: "20\" x 28\"",
      medium: "Watercolor",
      year: "2023",
      category: "Menu Design",
      description: "A series of illustrations documenting the journey of ingredients from local farms to restaurant tables, highlighting sustainable food practices."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Chef's Canvas",
      size: "30\" x 40\"",
      medium: "Mixed Media",
      year: "2024",
      category: "Menu Design",
      description: "A portrait of a chef at work, capturing the concentration and creativity that goes into creating memorable dining experiences."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Seasonal Harvest",
      size: "18\" x 24\"",
      medium: "Digital Art",
      year: "2023",
      category: "Menu Design",
      description: "A collection of seasonal menu illustrations that change throughout the year, reflecting the natural rhythms of local agriculture."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Kitchen Geometry",
      size: "22\" x 30\"",
      medium: "Acrylic",
      year: "2024",
      category: "Menu Design",
      description: "An abstract study of the geometric patterns found in professional kitchens, from the arrangement of pots to the flow of movement."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Taste Memories",
      size: "16\" x 20\"",
      medium: "Oil Pastel",
      year: "2023",
      category: "Menu Design",
      description: "A series of expressive drawings capturing the emotional and sensory experience of memorable meals and dining moments."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Culinary Heritage",
      size: "28\" x 36\"",
      medium: "Mixed Media",
      year: "2024",
      category: "Menu Design",
      description: "An exploration of traditional cooking methods and family recipes, preserving cultural heritage through visual storytelling."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Wine and Dine",
      size: "24\" x 32\"",
      medium: "Watercolor",
      year: "2023",
      category: "Menu Design",
      description: "Elegant illustrations of wine pairings and fine dining experiences, capturing the sophistication of culinary arts."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Street Food Culture",
      size: "20\" x 26\"",
      medium: "Digital Painting",
      year: "2024",
      category: "Menu Design",
      description: "A celebration of street food vendors and their unique contributions to local food culture and community gathering."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Dessert Dreams",
      size: "18\" x 22\"",
      medium: "Mixed Media",
      year: "2023",
      category: "Menu Design",
      description: "Whimsical illustrations of desserts and pastries, exploring the intersection of art and confectionery craftsmanship."
    }
  ]

  return <PortfolioGrid images={menuImages} title="Menu & Culinary Art" />
}

export default Menu 