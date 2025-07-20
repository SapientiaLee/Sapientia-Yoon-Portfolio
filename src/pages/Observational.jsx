import PortfolioGrid from '../components/PortfolioGrid'

function Observational() {
  const observationalImages = [
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Café Life",
      size: "20\" x 16\"",
      medium: "Charcoal on Paper",
      year: "2024",
      category: "Observational",
      description: "A study of daily life in a local café, capturing the quiet moments of reflection and human connection that happen over coffee and conversation."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Street Musician",
      size: "24\" x 18\"",
      medium: "Oil on Canvas",
      year: "2023",
      category: "Observational",
      description: "A portrait of a street musician lost in his music, painted from life during a summer evening in the city center."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Market Day",
      size: "30\" x 24\"",
      medium: "Watercolor",
      year: "2024",
      category: "Observational",
      description: "A vibrant scene from the local farmers market, capturing the colors, textures, and energy of people gathering to buy fresh produce."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Subway Commute",
      size: "18\" x 22\"",
      medium: "Ink and Wash",
      year: "2023",
      category: "Observational",
      description: "A series of quick sketches capturing the diverse faces and postures of commuters during rush hour, each lost in their own thoughts."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Park Bench",
      size: "16\" x 20\"",
      medium: "Pencil on Paper",
      year: "2024",
      category: "Observational",
      description: "An elderly couple sharing a quiet moment on a park bench, surrounded by autumn leaves and the gentle light of late afternoon."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Construction Site",
      size: "28\" x 36\"",
      medium: "Acrylic",
      year: "2023",
      category: "Observational",
      description: "A study of urban development, capturing the geometric forms and industrial materials of a construction site in progress."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Library Study",
      size: "22\" x 18\"",
      medium: "Mixed Media",
      year: "2024",
      category: "Observational",
      description: "Students immersed in their studies at the university library, surrounded by books and the quiet intensity of academic pursuit."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Bus Stop",
      size: "20\" x 24\"",
      medium: "Oil Pastel",
      year: "2023",
      category: "Observational",
      description: "People waiting at a bus stop in the rain, each wrapped in their own thoughts and the shared experience of public transportation."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Garden Café",
      size: "24\" x 30\"",
      medium: "Watercolor",
      year: "2024",
      category: "Observational",
      description: "A peaceful garden café scene, with patrons enjoying their meals surrounded by lush greenery and dappled sunlight."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Street Vendor",
      size: "18\" x 26\"",
      medium: "Charcoal",
      year: "2023",
      category: "Observational",
      description: "A street vendor preparing food at his cart, capturing the skill and dedication of someone who has mastered their craft."
    }
  ]

  return <PortfolioGrid images={observationalImages} title="Observational Studies" />
}

export default Observational 