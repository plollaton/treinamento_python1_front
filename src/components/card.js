import React from 'react';
import Flag from 'react-flags';

import '../index.css';


const Card = props => {
    const { id, nomeAlbum, className } = props;

    return (
        <a href={"/photos/" + id}>
            <div className={className}>
                <span>{ id }</span>
                <span>{ nomeAlbum }</span>
            </div>
        </a>
    )
}

export default Card;