{/* <div className="parent">
        <h1>h1</h1>
        <h1>h1</h1>
</div>
<div className="parent">
        <h1>h1</h1>
        <h1>h1</h1>
</div> */}

const heading=React.createElement("div",{id:"parent"},"im parent",
   [ React.createElement("h1",{},"im h1"),
    React.createElement("h2",{},"im h2")],
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"im h1"),
        React.createElement("h2",{},"im h2") 
    ])

)
const d=ReactDOM.createRoot(document.getElementById("id"))
d.render(heading)