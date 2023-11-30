import React from 'react';

const App = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Welcome to the React Styling Assignment</h1>
        <p>Explore and enhance your styling skills!</p>
      </header>

      <section style={styles.section}>
        <article style={styles.article}>
          <h2>Article 1</h2>
          <p>This is the content of the first article. Add your own text here.</p>
        </article>

        <article style={styles.article}>
          <h2>Article 2</h2>
          <p>This is the content of the second article. Add your own text here.</p>
        </article>

        <article style={styles.article}>
          <h2>Article 3</h2>
          <p>This is the content of the third article. Add your own text here.</p>
        </article>
      </section>

      <aside className="sidebar" style={styles.sidebar}>
        <section style={styles.sec1}>
          <h2>Categories</h2>
          <ul style={styles.list1}>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </section>

        <section style={styles.sec2}>
          <h2>Tags</h2>
          <ul style={styles.list2}>
            <li>Tag 1</li>
            <li>Tag 2</li>
            <li>Tag 3</li>
          </ul>
        </section>
      </aside>

      <footer style={styles.footer}>
        <p>&copy; 2023 React Styling Assignment</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Bodoni MT',
    backgroundColor: 'lightblue',
    // color: 'white',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'darkred',
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    color: 'darkgreen',
  },
  article: {
    flex: '1',
    margin: '0 10px',
    padding: '10px',
    border: '3px solid #ddd',
    borderRadius: '20px',
  },
  sidebar: {
    width: '100%',
  },
  sec1: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  sec2: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  list1: {
    listStyleType: "none",
    padding: '0',
    color: 'darkCyan'
  },
  list2: {
    padding: '0',
    listStyleType: "none",
    color: 'darkblue',
  },
  footer: {
    marginTop: '20px',
    textAlign: 'center',
  },
};

export default App;