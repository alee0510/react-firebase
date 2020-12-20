import React from 'react'

// components
import NavigationBar from './components/navbar'

// pages
import Firebase from './pages/firebase'

const Main = _ => {
    return (
        <div>
            <NavigationBar/>
            <Firebase/>
        </div>
    )
}

export default Main