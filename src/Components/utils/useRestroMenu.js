import { useEffect, useState } from "react"
import { MENU_API } from "./constans";

const useRestroMenu=(resId)=>{   
    const [MenuList, setMenuList] = useState(null)
    useEffect(()=>{
        fetchdata();
    }, [])

    const fetchdata = async () =>{
        const data = await fetch( MENU_API + resId)
        const json = await data.json();
        setMenuList(json)
    }
    return MenuList
}

export default useRestroMenu

