import { useRef } from 'react'

const useInputRefs = initial => {
    // set reference
    const refs = useRef(initial)

    // bind refs to component
    const bind = index => ({ ref : e => refs.current[index] = e})

    // return a value
    return [refs, bind]
}

export default useInputRefs