import ToggleButton from './components/ToggleButton';
import Breadcrumb from './components/Breadcrumb';
import Modal from './components/Modal';

export default function App() {
  return (
    <div
      className="App"
      style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}
    >
      <h1>Componentes</h1>
      <ToggleButton />
      <Breadcrumb />
      <Modal />
    </div>
  );
}
