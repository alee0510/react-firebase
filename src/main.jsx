import React from 'react'

// components
import NavigationBar from './components/navbar'

// pages
import Products from './pages/products'

const Main = _ => {
    return (
        <div>
            <NavigationBar/>
            <Products/>
        </div>
    )
}

export default Main