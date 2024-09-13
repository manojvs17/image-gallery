import {React,useEffect,useState} from "react";
import "./Mainarea.css";
import data from "../Data/Data.json";
import SearchBar from "./SearchBar";
import Card from "./Card";
import oopsImage from '../../Images/no-data-found.png';
const Mainarea = ({category}) => {
   const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem('likes');
    return savedLikes ? JSON.parse(savedLikes) : {};
  });
  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [likes]);

  const handleLike = (id) => {
    setLikes(prevLikes => ({ ...prevLikes, [id]: !prevLikes[id] }));
  };
  

  // Copy button functionality
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Image URL copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  // Download button functionality
  const handleDownload = (src, name) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = name; // The filename for the downloaded image
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Cleanup
  };


// Search and Filter Section 
  const [searchInput,setSearchInput] = useState("");
  const [filteredData,setFilteredData] = useState(data.imageList);

  useEffect(()=>{
    let dataList = data.imageList;
    // Apply category filter first
    if (category !== "All") {
      dataList = dataList.filter((val) => val.category === category);
    }
    // Apply search filter next
    if(searchInput){
      dataList = dataList.filter((val)=>{
        return val.name.toLowerCase().includes(searchInput);
      })
    }
    setFilteredData(dataList);
  },[searchInput,category]);
  function searchItems(){
    var searchInput = document.getElementById("input").value.toLowerCase();
    setSearchInput(searchInput);
  }

  // Back to top Scroll Effect
  useEffect(() => {
    const backToTopButton = document.getElementById('back-to-top');
    
    const handleScroll = () => {
      if (window.scrollY > 300) { // Adjust the value as needed
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    window.addEventListener('scroll', handleScroll);
    backToTopButton.addEventListener('click', scrollToTop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      backToTopButton.removeEventListener('click', scrollToTop);
    };
  }, []);
  return (
    <section>
      <button id="back-to-top" className="button">
      <svg className="svgIcon" viewBox="0 0 384 512">
        <path
          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
        ></path>
      </svg>
    </button>

      <SearchBar searchItems={searchItems} data={data}/>
      <div className="main-area"> 
        {filteredData.length>0 ? filteredData.map((val) => (
          <Card val={val} data={data} handleLike={handleLike} likes={likes} handleCopy={handleCopy} handleDownload={handleDownload}/>
        )):
        (
          <div className="no-results">
            <img src={oopsImage} alt="Oops!" />
            {/* <div className="oops-error">
              Unfortunately! We Don't have any Image related to this category.
            </div> */}
          </div>
        )
        }
      </div>
    </section>
  );  
};

export default Mainarea;
