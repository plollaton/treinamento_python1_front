import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import CardPhoto from '../components/cardPhoto';

class ShowPhotos extends React.Component {
    state = {
        photos: []
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        axios.get('http://localhost:5468/photos/' + id)
        .then(response => {
            const { data } = response;
            this.setState(data);
        })
        .catch(err => {
            console.error(err);
            this.setState({
                rows: []
            });
        })
    }

    render() {
        let html_elements = [];
        const { photos } = this.state;
        photos.forEach(photo => {
            html_elements.push(<CardPhoto key={photo.id} thumb={photo.thumb} info={photo.titulo} idPhoto={photo.id}/>)
        })
        return (
            <div className="lista-album">
                {html_elements}
            </div>
            )
    }
}

export default withRouter(ShowPhotos);