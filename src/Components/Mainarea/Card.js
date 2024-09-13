import {React} from 'react'

const Card = ({val,data,handleLike,handleCopy,handleDownload,likes}) => {
    
  return (
    <div className="card" key={val.id}>
          <img src={val.src} className="card-image"></img>
          <div className="category"> {val.name} </div>
          <div className="heading"> {val.description}
              <div className="author">
              <img src={likes[val.id] ? data.likedIcon : data.likeIcon} className="like-icon" alt="Like" onClick={() => handleLike(val.id)} style={{ height: likes[val.id] ? "20px" : "35px" ,width : likes[val.id] ? "20px":"35px",padding:likes[val.id]?"7px 7px":""}} />
                <img src={data.copyIcon} className="copy-icon" alt="Copy" onClick={() => handleCopy(val.src)}></img>
                <img src={data.downloadIcon} className="download-icon" alt="Download" onClick={() => handleDownload(val.src, `${val.name}.jpg`)}></img>
              </div>
          </div>
      </div>
  )
}

export default Card