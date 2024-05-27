
import './App.css';
import Header from './Components/Header/Header';
import { HeroPage } from './Components/HeroPage/HeroPage';


function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <HeroPage />
      </div>

    </div>
  );
}

export default App;
