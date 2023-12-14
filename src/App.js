import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './components/HomePage';
import WelcomePage from './components/WelcomePage';
import ViewItems from './components/ViewItems'
import Cards from './components/Cards';
import Testimonials from './components/Testimonials';
import NewsEvents from './components/NewsEvents';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <WelcomePage/>
      <ViewItems/>
      <Cards/>
      <Testimonials/>
      <NewsEvents/>
      <Footer/>
    </div>
  );
}

export default App;
