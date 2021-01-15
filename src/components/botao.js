import React, { Component } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';

export default class Botao extends Component {

    state = {
        total_registros: -1,
    }

    componentDidMount() {
        axios.get('http://localhost:5468/load/'+this.props.table)
        .then(response => {
            const {data} = response;
            this.setState(data);
        })
        .catch(err => {
            console.error(err);
            this.setState({
                total_registros: -1,
            })
        });
    }

    render() {
        return (
            <Button
                variant="contained"
                color="primary"
                disabled={this.state.total_registros != 0}
                onClick={ () => {
                    axios.post('http://localhost:5468/load/'+this.props.table, {})
                    .then(response => {
                        const { data } = response;
                        this.setState(data);
                    })
                    .catch(err => {
                        console.error(err);
                    });
                }}>
                {this.props.text}
            </Button>
        );
    }
}