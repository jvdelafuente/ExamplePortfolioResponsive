import "../newspaper/Newspaper.scss";
import '../Footer/footer.css'

import linkedin from '../../../assets/icons/linkedin.png'
import github from '../../../assets/icons/github.png'

function Footer() {
  return (
    <footer className="site-footer">
        <h6>Contact</h6>
      <div className="container2">
        <div className="contact">
        <a href="">delafuentejvr@gmail.com</a>
        <a href="">+34 624 837 185</a>
        </div>
        <div className="contacticons">
        <a href="https://www.google.com" target="__blank" className="linkedin"><img className="footerIcon" src={linkedin} alt="" /></a>
        <a href="https://www.google.com" target="__blank" className="github"><img className="footerIcon" src={github} alt="" /></a>
        </div>
      </div>
</footer>
  );
}

export default Footer;
