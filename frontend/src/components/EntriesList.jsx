const EntriesList = ({ entries }) => {

      if (!Array.isArray(entries)) {
    console.error("Entries is not an array:", entries);
    return <p>Error loading entries</p>;
  }
  
  return (
    <div style={styles.list}>
      <h2>Your Journal Entries</h2>

      {entries.length === 0 ? (
        <p>No entries yet. Start writing!</p>
      ) : (
        entries.map((entry) => (
          <div key={entry._id} style={styles.item}>
            <h3>{entry.emotion}</h3>
            <p>{entry.note}</p>
            <span style={styles.date}>
              {new Date(entry.createdAt).toLocaleString()}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  list: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  item: {
    borderBottom: "1px solid #eee",
    paddingBottom: "10px",
    marginBottom: "10px",
  },
  date: {
    fontSize: "12px",
    color: "#777",
  },
};

export default EntriesList;
