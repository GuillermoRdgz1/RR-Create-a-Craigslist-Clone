// // Import data
// import { postings } from "./postings";
// // Import components
// import "./App.css";
// import Searchbar from "./Components/searchbar";
// import Gallery from "./Components/gallery";
// import Sidebar from "./Components/sidebar";
// import Directory from "./Components/directory";

// function App() {
//   return (
//     <div>
//       <h1>craigslist</h1>
//       <div className="App">
//         <Searchbar />
//         <Directory />
//         <Sidebar />
//         <Gallery postings={postings} />
//       </div>
//     </div>
//   );
// }

// export default App;

// Import data
import { postings } from "./postings";
// Import components
import "./App.css";
import Searchbar from "./Components/searchbar";
import Gallery from "./Components/gallery";
import Sidebar from "./Components/sidebar";
import Directory from "./Components/directory";
import Help from "./Components/help";

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Sidebar />
        <Gallery postings={postings} />
        <Help />
      </div>
    </div>
  );
}

export default App;