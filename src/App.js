import './App.css';
// import Practice from './modules/Practice';
import Navbar from './modules/Navbar';
import TextForm from './modules/TextForm';
function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <TextForm  heading = "Enter the text "/>
      </div>
      {/* <Practice/> */}
    </>
  );
}

export default App;
