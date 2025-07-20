import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ImageModal from './ImageModal'

function PortfolioGrid({ images, title }) {
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = (image) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Home
          </button>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the collection of works showcasing different techniques, mediums, and artistic approaches.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative group cursor-pointer" onClick={() => handleImageClick(image)}>
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold">
                      Click to enlarge
                    </div>
                  </div>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{image.title}</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-3">
                  <div><span className="font-medium">Size:</span> {image.size}</div>
                  <div><span className="font-medium">Medium:</span> {image.medium}</div>
                  <div><span className="font-medium">Year:</span> {image.year}</div>
                  <div><span className="font-medium">Category:</span> {image.category}</div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </div>
  )
}

export default PortfolioGrid 