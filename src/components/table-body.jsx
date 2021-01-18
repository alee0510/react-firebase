import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import { Form, Button } from 'react-bootstrap'
import useInputRefs from '../hooks/use-input-refs'

const { useState } = React
const TableBody = () => {
    // state
    const [id, setId] = useState('')
    const [refs, bind] = useInputRefs(new Array(2))

    // connect to firebase
    useFirestoreConnect(['products'])
    const data = useSelector(state => state.firestore.ordered.products)
    
    // edit
    const OnBtnEdit = e => setId(e.target.value)
    const OnBtnCancel = _ => setId('')
    const OnBtnSave = _ => {
        // get values
        const values = refs.current.map(item => item.value)

        // edit value

    }

    // generate data
    const generate = _ => data && data.map((item, index) => (
        <tr key={item.id}>
            <td>{index + 1}</td>
            <td>
                <img src={item.image} width="50px" alt="product"/>
            </td>
            <td>{item.name}</td>
            {
                item.id === id ?
                <>
                <td>
                    <Form.Control type="number" defaultValue={item.stock} {...bind(0)}/>
                </td>
                <td>
                <Form.Control type="number" defaultValue={item.price} {...bind(1)}/>
                </td>
                <td>
                    <Button 
                        variant="success" 
                        value={item.id} 
                        className="btn-product" 
                        onClick={OnBtnSave}
                    >
                        Save
                    </Button>
                    <Button 
                        variant="warning" 
                        value={item.id} 
                        className="btn-product"
                        onClick={OnBtnCancel}
                    >
                        Cancel
                    </Button>
                </td>
                </>
                :
                <>
                <td>{item.stock}</td>
                <td>{item.price}</td>
                <td>
                    <Button 
                        variant="warning" 
                        value={item.id} 
                        className="btn-product" 
                        onClick={OnBtnEdit}
                    >
                        Edit
                    </Button>
                    <Button 
                        variant="danger" 
                        value={item.id} 
                        className="btn-product"
                    >
                        Delete
                    </Button>
                </td>
                </>
            }
        </tr>
    ))

    return <tbody>{generate()}</tbody>
}

export default TableBody