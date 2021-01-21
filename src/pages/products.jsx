import React from 'react'
import { Table } from 'react-bootstrap'
import './styles/products.css'

// navbar
import Navbar from '../components/navbar'

// components
import TableBody from '../components/table-body'
import TableFooter from '../components/table-footer'
const TableHead = _ => (
    <thead>
        <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
    </thead>
)


const Products = _ => {
    return (
        <div className="main-container">
            <Navbar/>
            <div className="table-container">
                <Table striped bordered hover>
                    <TableHead/>
                    <TableBody/>
                    <TableFooter/>
                </Table>
            </div>
        </div>
    )
}

export default Products