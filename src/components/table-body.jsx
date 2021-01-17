import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Form, Button } from 'react-bootstrap'

const TableBody = () => {
    // connect to firebase
    useFirestoreConnect(['products'])
    const data = useSelector(state => state.firestore.ordered.products)

    const generate = _ => data && data.map((item, index) => (
        <tr key={item.id}>
            <td>{index + 1}</td>
            <td>
                <img src={item.image} width="50px" alt="product-image"/>
            </td>
            <td>{item.name}</td>
            <td>{item.stock}</td>
            <td>{item.price}</td>
            <td>
                <Button variant="warning" value={index} className="btn-product">Edit</Button>
                <Button variant="danger" value={index} className="btn-product">Delete</Button>
            </td>
        </tr>
    ))
    console.log(data)

    return <tbody>{generate()}</tbody>
}

export default TableBody