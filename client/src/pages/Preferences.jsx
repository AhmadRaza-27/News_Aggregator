import { useState, useEffect } from "react";

function Preferences() {
  const categories = [
    "technology",
    "business",
    "politics",
    "sports",
    "science",
    "entertainment",
    "health",
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  // Load saved preferences when page opens
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("newsCategories")) || [];
    setSelectedCategories(saved);
  }, []);

  const handleChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((c) => c !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const savePreferences = () => {
    localStorage.setItem(
      "newsCategories",
      JSON.stringify(selectedCategories)
    );

    alert("Preferences saved!");
  };

  return (
    <div>
      <h1>Preferences</h1>
      <p>Choose your favorite topics.</p>

      <form className="preferences-form">
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleChange(category)}
            />
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </label>
        ))}

        <button type="button" onClick={savePreferences}>
          Save Preferences
        </button>
      </form>
    </div>
  );
}

export default Preferences;