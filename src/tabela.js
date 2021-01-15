import React, { Component } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';

const LinhaTabela = props => {
    const { rows }  = props;

    return (
        rows.map(
            (row) => {
                return(
                    <TableRow key={row.id}>
                        <TableCell scope="row">{row.id}</TableCell>
                        <TableCell align="left">{row.titulo}</TableCell>
                    </TableRow>
               )
            }
        )
    )
}

const PaginacaoTabela = props => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const {rows} = props.rows

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event, newPage) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    return (
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={rows.count}
                rowsPerPage={rowsPerPage}
                page={page}
                onchangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
    );
}

export default class Tabela extends Component {
    state = {
        rows: [],
    }

    componentDidMount() {
        axios.get('http://localhost:5468/'+this.props.table)
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
        const useStyles = makeStyles({
            table: {
                minWidth: 650,
            },
        })

        return (
            <div>
                <TableContainer componend={Paper}>
                    <Table className={useStyles.table} size="small" aria-label="a desnse table">
                        <TableHead>
                            <TableCell>Album Id</TableCell>
                            <TableCell>Album Titulo</TableCell>
                        </TableHead>
                        <TableBody>
                            <LinhaTabela rows={this.state.rows}/>
                        </TableBody>
                    </Table>
                </TableContainer>
                {/* <PaginacaoTabela  rows={this.state.rows}/> */}
            </div>
        );
    }
}