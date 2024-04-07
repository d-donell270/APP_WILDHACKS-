import React, { useState } from 'react';
import './Upload.css';

function UploadPage() {
    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setUploadedFile(file);
    };

    return (
        <div className="upload-page">
            <div className="upload-container">
                <h1>Upload Your Documents</h1>
                <div className="upload-box">
                    <input type="file" accept=".pdf" onChange={handleFileChange} />
                    <button>Upload</button>
                </div>
                {uploadedFile && (
                    <div className="preview-container">
                        <p>Preview: {uploadedFile.name}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UploadPage;
