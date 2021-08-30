import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    // the below code is JSX which is a combination of js and html
    // we only have to return one tag and if we want to return more than one tag we use JSX fragment which are these --> <> </>
    <> 
    <Navbar title = 'Company name' about_link = "About Us"/>{/*title and about_link are both props */}
    <Textform heading='Enter the text to analyze'/>
    <About></About>
    </>
  );
}
 
export default App; 