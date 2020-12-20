import React from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../redux'

const { useEffect } = React
const Firebase = _ => {
    const dispatch = useDispatch()

    // get data
    useEffect( _ => dispatch(actions.GetProducts()))
    return (
        <div></div>
    )
}

export default Firebase