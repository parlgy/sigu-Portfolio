import React from 'react';
import './PatchImage.css';

const PatchImage = ({ src, alt, style }) => {
    return (
        <div className="patch-container" style={style}>
            <img src={src} alt={alt} className="patch-image " />
        </div>
    );
};

export default PatchImage;
