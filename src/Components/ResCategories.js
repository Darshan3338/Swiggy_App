import ItemList from "./ItemList"

const ResCategories = ({data , showItems,setshowIndex}) =>{

    // console.log(data)
    const handleClick = () =>{
        setshowIndex()         
    }
    return(
        <div className="acc-container">
            {/* Header */}
             <div className="accordion">
                <div style={{display:"flex",justifyContent:"space-between",cursor:"pointer"}} onClick={handleClick}>
                <span style={{fontWeight:"bold"}}>{data.title} ({data.title.length})</span>
                <span>⏬</span>
                </div>

                 {/* Accordion Body */}
              { showItems &&  <ItemList items={data.itemCards}/> }
             </div>                
        </div>
    )
}

export default ResCategories