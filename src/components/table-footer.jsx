import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { actions } from '../redux'

const { useRef } = React
const TableFooter = _ => {
    const refs = useRef(new Array(4))
    const dispatch = useDispatch()

    // bind refs
    const bind = index => ({ ref : e => refs.current[index] = e})

    // add data
    const OnBtnAdd = _ => {
        console.log('refs : ', refs.current)

        // get values
        const values = refs.current.map(item => item.value)
        console.log('value : ', values)

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