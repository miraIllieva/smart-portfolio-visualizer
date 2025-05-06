import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>📊 Smart Portfolio Visualizer</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#1e1e2f',
    color: 'white',
    padding: '20px 0',
    textAlign: 'center',
    fontFamily: 'Arial',
    fontSize: '1.5rem'
  }
};

export default Header;
