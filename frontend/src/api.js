// src/api.js
export const API_URL = "http://localhost:8000/api/entries";

export const addEntry = async (data) => {
  try {
    const res = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    
    if (!result.success) {
      throw new Error(result.message || "Failed to add entry");
    }
    
    return result.data;
  } catch (error) {
    console.error("Error adding entry:", error);
    throw error;
  }
};

export const getEntries = async () => {
  try {
    const res = await fetch(`${API_URL}/all`);
    const result = await res.json();
    console.log("Full API response:", result);
    console.log("Data field:", result.data);
    if (!result.success) {
      throw new Error(result.message || "Failed to fetch entries");
    }
    
    return result.data || [];
  } catch (error) {
    console.error("Error fetching entries:", error);
    return []; // Return empty array on error
  }
};