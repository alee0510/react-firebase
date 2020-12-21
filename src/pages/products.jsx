import React from 'react'
import { Table } from 'react-bootstrap'
import './styles/products.css'

// components
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

const TableBody = data => {

}

const { useEffect } = React
const Products = _ => {
    return (
        <div className="products-main-container">
            <Table striped bordered hover>
                <TableHead/>
                <tbody></tbody>
            </Table>
        </div>
    )
}

export default Products