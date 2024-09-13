import React from 'react'
import './uploadForm.css'
const UploadForm = ({closePopup}) => {
  return (
    <div className="popup-overlay" onClick={closePopup}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2 className='form-heading'>Image Upload</h2>
            <form>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" />

    <label htmlFor="url">Image URL:</label>
    <input type="url" id="url" name="url" />

    <label htmlFor="description">Description:</label>
    <input type="text" id="description" name="description" />

    <div className="form-buttons">
        <input type="submit" value="Submit" />
        <button type="button" onClick={closePopup}>Close</button>
    </div>
</form>

        </div>
    </div>
  )
}

export default UploadForm