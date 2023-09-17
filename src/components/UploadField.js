import React from 'react';
import '../styles/UploadStyles.css';

function UploadField() {
    return (
        <div className="upload-container">
            <label htmlFor="file-upload" className="file-upload-label">Upload a File:</label>
            <input type="file" id="file-upload" className="file-upload-input"/>

            <label htmlFor="message-box" className="message-label">Message:</label>
            <textarea id="message-box" className="message-input" rows="4"></textarea>

            <button className="submit-button" type="submit">Submit</button>
        </div>
    );
}

export default UploadField;