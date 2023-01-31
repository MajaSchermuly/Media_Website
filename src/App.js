import './App.css';
import {Container, Row, Col} from 'react-bootstrap';

import Introduction from './components/introduction';
import Heirarchy from './components/heirarchy';

function App() {
  return (
    <div>
      
      <Introduction/>
      <Heirarchy/>

    </div>
  );
}

export default App;
