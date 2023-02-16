// Import data
import { postings } from "./postings";
// Import components
import "./App.css";
import Gallery from "./Components/Gallery";
import Directory from "./Components/Directory";
import Searchbar from "./Components/Searchbar";
import Sidebar from "./Components/Sidebar";
import Help from "./Components/Help";



function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Gallery postings={postings} />
        <Sidebar />
        <Help />
      </div>
    </div>
  );
}

export default App;
