import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="relative w-full h-screen bg-gray-900">
      {/* Test div to verify Tailwind is working */}
      <div className="absolute top-4 left-4 bg-red-500 text-white p-2 rounded z-30">
        
      </div>
      
      {/* Background Image */}
      <img 
        src="/Sapientia-Yoon-Portfolio/home_sketch.jpg" 
        alt="Home Sketch" 
        className="w-full h-full object-cover absolute inset-0"
        onError={(e) => {
          console.error('Image failed to load:', e)
          e.target.style.display = 'none'
        }}
      />
      
      {/* Interactive Buttons */}
      <div className="absolute inset-0 z-20">
        {/* Concept Button - Teal, lower-left pointing to seated figures */}
        <button
          onClick={() => navigate('/concept')}
          className="absolute left-[230px] bottom-[400px] bg-teal-500 hover:bg-teal-600 text-white px-20 py-12 rounded-lg font-semibold transition-all duration-200 shadow-lg text-3xl"
        >
          Concept
        </button>

        {/* Observational Button - Teal, upper-middle pointing to standing figure */}
        <button
          onClick={() => navigate('/observational')}
          className="absolute left-1/2 top-[200px] transform -translate-x-1/2 bg-teal-500 hover:bg-teal-600 text-white px-16 py-10 rounded-lg font-semibold transition-all duration-200 shadow-lg text-2xl"
        >
          observational
        </button>

        {/* Misc Button - Teal, right of observational pointing to standing figure */}
        <button
          onClick={() => navigate('/misc')}
          className="absolute left-[800px] top-[280px] bg-teal-500 hover:bg-teal-600 text-white px-14 py-8 rounded-lg font-semibold transition-all duration-200 shadow-lg text-xl"
        >
          misc
        </button>

        {/* Character Work Button - Teal, far right over seated black figure */}
        <button
          onClick={() => navigate('/character-work')}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white px-16 py-10 rounded-lg font-semibold transition-all duration-200 shadow-lg text-2xl whitespace-nowrap"
        >
          character work
        </button>

        {/* About Button - Teal, lower-middle pointing to black cat */}
        <button
          onClick={() => navigate('/about')}
          className="absolute left-[750px] bottom-[220px] bg-teal-500 hover:bg-teal-600 text-white px-20 py-12 rounded-lg font-semibold transition-all duration-200 shadow-lg text-3xl"
        >
          about
        </button>
      </div>
    </div>
  )
}

export default Home 