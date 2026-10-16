
// export default function HomePage(){
//     return (
//         <div>
//             <h1>Home page</h1>
//         </div>
//     )
// }


'use client'

import { useState } from "react"

export default function HomePage() {
    // const apple = () => {
    //     alert("Apple");
    // }
    const [name, setName]=useState("Nikki")
    return (
        <div>
            <h1>Events, function and state {name}</h1>
            {/* <button onClick={() => alert("Hello next js")}>Click me</button> */}
            {/* <button onClick={
                apple
            }>Click me</button> */}
        </div>
    )
}
//always use 'use client' at the top only , u can not use here and there