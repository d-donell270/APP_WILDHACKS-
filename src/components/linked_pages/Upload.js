// UploadPage.js
import React from 'react';
import './Upload.css'; // Make sure to create this CSS file

function UploadPage() {
    return (
        <>
        
            <div className="upload-page">
                <div className="upload-container">
                    <h1>Upload Your Documents</h1>
                    <input type="file" accept=".pdf" />
                    <button>Upload</button>
                </div>
            </div>
        </>
    );
}

export default UploadPage;
