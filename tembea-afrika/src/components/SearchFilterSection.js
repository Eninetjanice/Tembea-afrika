import React from 'react';

const SearchFilterSection = () => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    // Perform search logic with the entered search term
    console.log(searchTerm); // Replace with your actual search logic
  };

  return (
    <section className="search-filter-section">
      {/* Search Bar */}
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      {/* Filter Options */}
      <div className="filter-options">
        <select>
          <option value="">All</option>
          <option value="relaxation">Relaxation</option>
          <option value="adventure">Adventure</option>
        </select>
        {/* Other filter options */}
      </div>
    </section>
  );
};

export default SearchFilterSection;
