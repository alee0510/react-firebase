import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Table, Button } from 'react-bootstrap'
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

const TableBody = data => data && data.map((item, index) => (
    <tr key={item.id}>
        <td>{index + 1}</td>
        <td>
            <img src={item.image} width="50px" alt="product-image"/>
        </td>
        <td>{item.name}</td>
        <td>{item.stock}</td>
        <td>{item.price}</td>
        <td>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </td>
    </tr>
))

const TableFooter = _ => (
    <tr>
        <td>#</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            <Button>Add</Button>
        </td>
    </tr>
)

const { useEffect } = React
const Products = _ => {
    useFirestoreConnect(['products'])
    const data = useSelector(state => state.firestore.ordered.products)

    return (
        <div className="products-main-container">
            <Table striped bordered hover>
                <TableHead/>
                <tbody>
                    {TableBody(data)}
                    <TableFooter/>
                </tbody>
            </Table>
        </div>
    )
}

export default Products