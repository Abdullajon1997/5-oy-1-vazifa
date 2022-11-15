
import './../src/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Pokoj from "./components/Pokoj/Pokoj"
import Totto from './components/Totto/Totto';
import Kita from './components/Kita/Kita';
import Judul from './components/Judul/Judul';
import Mereka from './components/Mereka/Mereka';
import Basa from './components/Basa/Basa';
import Membantu from './components/Membantu/Membantu';

function App() {
  return (
    <>
      <Header />
      <main>
        <Pokoj/>
        <Totto/>
        <Kita/>
        <Judul/>
        <Mereka/>
        <Basa/>
        <Membantu/>
      </main>
      <Footer />
    </>


  );
}

export default App;
