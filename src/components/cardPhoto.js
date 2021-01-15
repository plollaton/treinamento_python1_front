import React from 'react';
import '../index.css';

const CardPhoto = props => {
    const {thumb, info, idPhoto} = props;
    return(
        <div className="base-card photo-card">
            <div className="thumb">
                <img src={thumb} alt={thumb}/>
            </div>
            <div className="info">
                <p className="titulo-photo">{idPhoto}</p>
                <p className="description">{info}</p>
            </div>
        </div>
    )
}

export default CardPhoto;