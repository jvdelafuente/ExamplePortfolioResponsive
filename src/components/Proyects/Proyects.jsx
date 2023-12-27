import './cards.css'
import piano from '../../../assets/proyects/piano1.png'

const Proyects = () => {
  return(
    <div className="proyectContainerBig">
      <h1>Proyects</h1>
        <ul className="row">
  <li className='cardContainer1'>
    <h2>Proyect #1</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit </p>
    <img src={piano} alt="" />
    <div className="buttonContainer">
    <button>DEMO</button><button>GITHUB</button>
    </div>
  </li>
  <li className='cardContainer2'>
    <img src={piano} alt="" />
    <h2>Proyect #2</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit  </p>
    <div className="buttonContainer">
    <button>DEMO</button><button>GITHUB</button>
    </div>  </li>
  <li className='cardContainer1'>
    <h2>Proyect #3</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit  </p>
    <img src={piano} alt="" />
    <div className="buttonContainer">
    <button>DEMO</button><button>GITHUB</button>
    </div>
  </li>
  <li className='cardContainer2'>
    <img src={piano} alt="" />
    <h2>Proyect #4</h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit </p>
    <div className="buttonContainer">
    <button>DEMO</button><button>GITHUB</button>
    </div>  </li>
</ul>
      </div>
  )
}
export default Proyects