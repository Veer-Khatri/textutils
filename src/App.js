import veer_logo from './veer_logo.png';
import './App.css';

function App() {
  return (
    // the below code is JSX which is a combination of js and html
    // we only have to return one tag and if we want to return more than one tag we use JSX fragment which are these --> <> </>
    <>
    <nav className="navbar">
      <div className="logo_img">
      <a href="/" id="logo_anchor_tag"><img src={veer_logo} alt="logo" id='logo_img'/></a> 
      </div>
      <div className="links">
        <li><a href="/" className="navlinks">Home</a></li>
        <li><a href="/" className="navlinks">About</a></li>
        <li><a href="/" className="navlinks">Contact Us</a></li>
        <li><a href="/" className="navlinks">Become a Seller</a></li>
        </div>
      <div className="searchBox">
        <input type="text" id="search_input"/>
        <button id="search_btn">Search</button>
      </div>
    </nav>
    </>
  );
}

export default App;
