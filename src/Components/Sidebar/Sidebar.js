import React from 'react'
import './Sidebar.css'
import data from '../Data/Data.json'
const Sidebar = ({changeCategory}) => {
  return (
    <div className="sidebar">
      {/* <h2 className='category-heading'>Category</h2> */}
      <ul className='category-list'>
        <li onClick={()=>changeCategory("All")}>All <img src={data.categoryIcon} className='category-icon'></img></li>
        <li onClick={()=>changeCategory("Sports")}>Sports <img src={data.categoryIcon} className='category-icon'></img></li>
        <li onClick={()=>changeCategory("Books")}>Books <img src={data.categoryIcon} className='category-icon'></img></li>
        <li onClick={()=>changeCategory("Paintings")}>Paintings <img src={data.categoryIcon} className='category-icon'></img></li>
        <li onClick={()=>changeCategory("Nature")}>Nature <img src={data.categoryIcon} className='category-icon'></img></li>
        <li onClick={()=>changeCategory("Animals")}>Animals <img src={data.categoryIcon} className='category-icon'></img></li>
      </ul>
    </div>
  )
}

export default Sidebar