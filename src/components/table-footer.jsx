import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { actions } from '../redux'
import useInputRefs from '../hooks/use-input-refs'

const TableFooter = _ => {
    const [refs, bind] = useInputRefs(new Array(4))
    const dispatch = useDispatch()

    // add data
    const OnBtnAdd = _ => {
        // get values
        const values = refs.current.map(item => item.value)

        // add new value
        dispatch(actions.AddProduct({
            image : values[0],
            name : values[1],
            stock : parseInt(values[2]),
            price : parseInt(values[3])
        }))

        // reset current value
        refs.current.forEach(item => item.value = "")
    }

    return (
        <tfoot>
            <tr>
                <td>#</td>
                <td>
                    <Form.Control {...bind(0)} type="text" placeholder="image url" />
                </td>
                <td>
                    <Form.Control {...bind(1)} type="text" placeholder="product's name" />
                </td>
                <td>
                    <Form.Control {...bind(2)} type="number" placeholder="stock" />
                </td>
                <td>
                    <Form.Control {...bind(3)} type="number" placeholder="price" />
                </td>
                <td>
                    <Button className="btn-product" onClick={OnBtnAdd}>Add</Button>
                </td>
            </tr>
        </tfoot>
    )
}


export default TableFooter