import "../newspaper/Newspaper.scss";
import smoothScroll from "../../utils/scrollButton";
import imgme from "../../../assets/home/me.png";
import border1 from "../../../assets/border1.png";
import border2 from "../../../assets/border1.png";

function Home() {
  return (
    <aside>
      <div className="buttonHome">
        <button id="buttonTop" className="issue" onClick={smoothScroll("home")}>
          Home
        </button>
        <button id="buttonTop" className="date" onClick={smoothScroll("skill")}>
          Skills
        </button>
        <button
          id="buttonTop"
          className="edition"
          onClick={smoothScroll("proyect")}
        >
          Proyects
        </button>
      </div>
      <div className="imgyoContainer">
      <img className="borderimg2" src={border1} alt="" />
                <img className="imgyo" src={imgme} />
      <img className="borderimg" src={border2} alt="" />
      </div>
                <figcaption>Javier de la Fuente</figcaption>
                <h2 className="main-title">
                  I am a junior web developer with a great desire to learn and a great
                  interest in the world of programming and technology.
                </h2>
              </aside>
              );
}

              export default Home;
