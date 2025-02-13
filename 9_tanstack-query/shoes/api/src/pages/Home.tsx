import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShoes } from '../hooks/useShoes';
import { ShoeFilters } from '../types';

function Home() {
  const [filters, setFilters] = useState<ShoeFilters>({});
  const { shoes, searchShoes } = useShoes();
  const shoeQuery = filters.gender || filters.color || filters.size ? 
    searchShoes(filters) : shoes;

  const handleFilterChange = (key: keyof ShoeFilters, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [key]: value || undefined
    }));
  };

  if (shoeQuery.isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading shoes...</p>
      </div>
    );
  }

  if (shoeQuery.isError) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-500">Error loading shoes</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            value={filters.gender || ''}
            onChange={(e) => handleFilterChange('gender', e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">All Genders</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>

          <input
            type="text"
            placeholder="Color"
            value={filters.color || ''}
            onChange={(e) => handleFilterChange('color', e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />

          <input
            type="text"
            placeholder="Size"
            value={filters.size || ''}
            onChange={(e) => handleFilterChange('size', e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          />

          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min Price"
              value={filters.minPrice || ''}
              onChange={(e) => handleFilterChange('minPrice', Number(e.target.value))}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={filters.maxPrice || ''}
              onChange={(e) => handleFilterChange('maxPrice', Number(e.target.value))}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Shoe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shoeQuery.data?.map((shoe) => (
          <Link
            key={shoe.id}
            to={`/shoes/${shoe.id}`}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={shoe.picture[0]}
                alt={shoe.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{shoe.name}</h3>
              <div className="mt-1 flex justify-between items-center">
                <p className="text-gray-600">${shoe.price}</p>
                {shoe.discount > 0 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    {shoe.discount}% OFF
                  </span>
                )}
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-sm text-gray-500">{shoe.gender}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">{shoe.color}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {shoeQuery.data?.length === 0 && (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500">No shoes found</p>
        </div>
      )}
    </div>
  );
}

export default Home; 