import Modal from 'react-modal';
import { Calendar } from './Components/Calendar';

Modal.setAppElement('#root');

function App() {
  return (
    <div>
      <Calendar />
    </div>
  );
}

export default App;
