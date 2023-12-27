import './Newspaper.scss'
import Skills from '../Skills/Skills';
import Home from '../Home/Home';
import Proyects from '../Proyects/Proyects';
import Footer from '../Footer/Footer';


function Newspaper() {
  return (
    <div className="containerMain">
      <div className="main__wrapper">
        <main id='home'>
          <div className="tittleh1">
          <h1>The Portfolio Times</h1>
          </div>
            <Home />
            <Skills />
          <div className="item-with-image cssgrid-collection">
          </div>
          <Proyects />
        </main>
      </div>
          <Footer />
    </div>
  );
}

export default Newspaper;