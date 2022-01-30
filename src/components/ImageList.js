import "./ImageList.css";
import React from 'react';


const ImageList = (props) => {
    
    const imageArray = props.images.map(image => {
        return <img 
                    src={image.urls.regular}
                    alt={image.alt_description} 
                    key={image.id} 
                />
    });

    return <div className="image-list" >{imageArray}</div>
}

export default ImageList;