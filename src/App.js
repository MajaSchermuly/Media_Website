import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Introduction from './components/introduction';
import Part2 from './components/Part2';

function App() {
  return (
    <div>
      


      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/part2" element={<Part2 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    </div>
  );
}

export default App;
