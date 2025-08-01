import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
// import { jsx as _jsx } from 'react/jsx-runtime'
function MyApp() {
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props:{
//         href: 'https://www.google.com',
//         target:'_blank'
//     },
//     children: 'click me to visit google'
// };

const anotherElement = (
    <a href="https://www.google.com" target='_blank'>Visit Google</a>
)

const anotherUser = 'chai aur react'
const ReactElement = React.createElement(
    'a',
    {href: 'https://www.google.com', target:'_blank'},
    'click me to visit google',
    anotherUser
)


createRoot(document.getElementById('root')).render(

    // <App/>
    // <MyApp />
    // MyApp()
    // ReactElement
    // anotherElement
    ReactElement
)

