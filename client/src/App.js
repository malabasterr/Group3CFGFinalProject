import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Error from './components/Error';

function App() {
    return (
      <main>

        <Routes >
          <Route path="/" element={<Homepage />} />
          {/* Routes to other pages would go here */}
          <Route path="*" element={<Error />} />
        </Routes>

      </main>
    );
};

export default App