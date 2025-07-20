import PortfolioGrid from '../components/PortfolioGrid'

function Misc() {
  const miscImages = [
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Abstract Harmony",
      size: "36\" x 48\"",
      medium: "Mixed Media",
      year: "2024",
      category: "Miscellaneous",
      description: "An experimental piece combining found objects, paint, and digital elements to explore the relationship between chaos and order in visual composition."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Digital Dreams",
      size: "Digital",
      medium: "Digital Art",
      year: "2023",
      category: "Miscellaneous",
      description: "A series of digital paintings exploring the intersection of technology and human emotion, created using custom algorithms and traditional painting techniques."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Recycled Beauty",
      size: "24\" x 32\"",
      medium: "Found Materials",
      year: "2024",
      category: "Miscellaneous",
      description: "A sculpture created entirely from recycled materials found in the artist's neighborhood, transforming waste into a commentary on consumerism and sustainability."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Light Play",
      size: "Variable",
      medium: "Installation",
      year: "2023",
      category: "Miscellaneous",
      description: "An interactive light installation that responds to viewer movement, creating a dynamic experience that changes with each interaction."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Textured Memories",
      size: "20\" x 28\"",
      medium: "Collage",
      year: "2024",
      category: "Miscellaneous",
      description: "A collage incorporating old photographs, fabric, and handwritten letters, exploring how memories are preserved and transformed over time."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Sound Visualization",
      size: "Digital",
      medium: "Generative Art",
      year: "2023",
      category: "Miscellaneous",
      description: "A series of visual representations of sound waves, created using custom software that translates audio into dynamic visual patterns."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t4.jpg",
      title: "Urban Archaeology",
      size: "18\" x 24\"",
      medium: "Photography",
      year: "2024",
      category: "Miscellaneous",
      description: "A photographic series documenting the layers of history visible in urban architecture, from ancient foundations to modern graffiti."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t3.jpg",
      title: "Kinetic Sculpture",
      size: "Variable",
      medium: "Metal and Motors",
      year: "2023",
      category: "Miscellaneous",
      description: "A moving sculpture that responds to environmental conditions, creating an ever-changing display of light and shadow."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t2.jpg",
      title: "Data Portrait",
      size: "Digital",
      medium: "Data Visualization",
      year: "2024",
      category: "Miscellaneous",
      description: "A portrait created using personal data points, exploring how our digital footprints can be transformed into meaningful artistic expression."
    },
    {
      src: "/Sapientia-Yoon-Portfolio/t1.jpg",
      title: "Ephemeral Art",
      size: "Temporary",
      medium: "Natural Materials",
      year: "2023",
      category: "Miscellaneous",
      description: "A series of temporary installations created using natural materials that change and decay over time, celebrating the beauty of impermanence."
    }
  ]

  return <PortfolioGrid images={miscImages} title="Miscellaneous Works" />
}

export default Misc 