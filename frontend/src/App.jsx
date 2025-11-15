// src/App.jsx
import { useEffect, useState } from "react";
import EmotionForm from "./components/EmotionForm";
import EntriesList from "./components/EntriesList";
import { getEntries } from "./api";

function App() {
  const [entries, setEntries] = useState([]);

   const fetchEntries = async () => {
    try {
      const data = await getEntries();
      console.log("Fetched entries:", data); // Debug log
      setEntries(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error in fetchEntries:", error);
      setEntries([]); // Set empty array on error
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <div style={styles.container}>
      <h1>Emotion Journal</h1>

      <EmotionForm refreshEntries={fetchEntries} />
      <EntriesList entries={entries} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "10px",
    fontFamily: "Arial",
  },
};

export default App;
