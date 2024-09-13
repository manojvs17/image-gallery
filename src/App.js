import './App.css';
import Header from './Components/Header/Header';
import UploadForm from './Components/Header/UploadForm';
import Mainarea from './Components/Mainarea/Mainarea';
import Sidebar from './Components/Sidebar/Sidebar';
import { useState } from 'react';

function App() {
  const name = ["Morning", "Afternoon", "Evening", "Night"];
  const [randomNumber] = useState(() => Math.round(Math.random() * (name.length - 1)));
  const [uploadFormStatus,setFormVisibleStatus] = useState(false);
  const [category,setCatergory] = useState("All")
  const openPopup = () => setFormVisibleStatus(true);
  const closePopup = () => setFormVisibleStatus(false);
  const changeCategory = (ctg)=> 
    {
      setCatergory(ctg);
    }

  return (
    <div className="app-container">
      <Header openPopup={openPopup} randomNumber={randomNumber} name={name}/>
      <Sidebar changeCategory={changeCategory} />
      <Mainarea category={category}/>
      {uploadFormStatus && <UploadForm closePopup={closePopup}/>}
    </div>
  );
}
export default App;
