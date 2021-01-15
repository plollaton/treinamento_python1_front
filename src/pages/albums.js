import React from 'react';
import axios from 'axios';

import '../index.css';
import Card from '../components/card';


class Albums extends React.Component {
    state = {
        rows: [],
    }

    componentDidMount() {
        axios.get('http://localhost:5468/albums')
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
        const { rows } = this.state
        let html_instruction = []
        rows.forEach( (row, idx) => {
            html_instruction.push(<Card className="card" id={row.id} nomeAlbum={row.titulo}/>);
            if((idx + 1) % 4 === 0){
                html_instruction.push(<div className="break" />);
            }
        });

        return (
            <div className="lista-album">
                {html_instruction}
            </div>
        );
    }
}

export default Albums