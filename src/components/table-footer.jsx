import React from 'react'
import { Form, Button } from 'react-bootstrap'

const TableFooter = _ => {
    return (
        <tfoot>
            <tr>
                <td>#</td>
                <td>
                    <Form.Control type="text" placeholder="image url" />
                </td>
                <td>
                    <Form.Control type="text" placeholder="product's name" />
                </td>
                <td>
                    <Form.Control type="text" placeholder="stock" />
                </td>
                <td>
                    <Form.Control type="text" placeholder="price" />
                </td>
                <td>
                    <Button className="btn-product">Add</Button>
                </td>
            </tr>
        </tfoot>
    )
}


export default TableFooter