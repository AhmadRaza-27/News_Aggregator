function FilterPanel({ category, setCategory }) {
  return (
    <div className="filter-panel">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Technology">Technology</option>
        <option value="Business">Business</option>
        <option value="Environment">Environment</option>
      </select>
    </div>
  );
}

export default FilterPanel;