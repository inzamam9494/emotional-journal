import { useState } from "react";
import { addEntry } from "../api";

const EmotionForm = ({ refreshEntries }) => {
  const [emotion, setEmotion] = useState("");
  const [note, setNote] = useState("");

  const emotionOptions = ["Happy", "Sad", "Angry", "Calm", "Excited", "Stressed"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emotion || !note) return alert("Please fill in all fields");

    await addEntry({ emotion, note });
    setEmotion("");
    setNote("");
    refreshEntries();
  };

  return (
    <div style={styles.card}>
      <h2>How are you feeling?</h2>

      <select
        style={styles.input}
        value={emotion}
        onChange={(e) => setEmotion(e.target.value)}
      >
        <option value="">Select an emotion</option>
        {emotionOptions.map((emo) => (
          <option key={emo} value={emo}>{emo}</option>
        ))}
      </select>

      <input
        style={styles.input}
        type="text"
        placeholder="Or type your emotion manually"
        value={emotion}
        onChange={(e) => setEmotion(e.target.value)}
      />

      <textarea
        style={styles.textarea}
        placeholder="Write what you're feeling..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button style={styles.button} onClick={handleSubmit}>
        Save Entry
      </button>
    </div>
  );
};

const styles = {
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  textarea: {
    width: "100%",
    height: "80px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    marginBottom: "10px",
  },
  button: {
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    background: "#4A90E2",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default EmotionForm;
