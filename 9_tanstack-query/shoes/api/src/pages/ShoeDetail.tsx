import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useShoes } from '../hooks/useShoes';

function ShoeDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { shoe } = useShoes();
  const [selectedImage, setSelectedImage] = useState(0);
  const shoeQuery = shoe(id!);

  if (shoeQuery.isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading shoe details...</p>
      </div>
    );
  }

  if (shoeQuery.isError || !shoeQuery.data) {
    return (
      <div className="flex flex-col justify-center items-center h-64">
        <p className="text-red-500">Error loading shoe details</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-primary hover:text-secondary"
        >
          Go back
        </button>
      </div>
    );
  }

  const shoe = shoeQuery.data;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <img
              src={shoe.picture[selectedImage]}
              alt={shoe.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {shoe.picture.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-w-1 aspect-h-1 rounded-lg overflow-hidden ${
                  selectedImage === index
                    ? 'ring-2 ring-primary'
                    : 'ring-1 ring-gray-200'
                }`}
              >
                <img
                  src={image}
                  alt={`${shoe.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{shoe.name}</h1>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-900">
                  ${shoe.price}
                </span>
                {shoe.discount > 0 && (
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {shoe.discount}% OFF
                  </span>
                )}
              </div>
              {shoe.isNew && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  New Arrival
                </span>
              )}
            </div>
          </div>

          <div
            className="prose prose-sm text-gray-500"
            dangerouslySetInnerHTML={{ __html: shoe.description }}
          />

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Available Sizes</h3>
              <div className="mt-2">
                {shoe.size.split(',').map((size) => (
                  <span
                    key={size}
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mr-2 mb-2"
                  >
                    {size.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Colors</h3>
              <div className="mt-2">
                {shoe.color.split(',').map((color) => (
                  <span
                    key={color}
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mr-2 mb-2"
                  >
                    {color.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900">Gender</h3>
              <p className="mt-1 text-sm text-gray-500 capitalize">{shoe.gender}</p>
            </div>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Back to Shoes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoeDetail; 