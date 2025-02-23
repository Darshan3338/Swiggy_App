import React from "react"
import User from "./User"
import UserClass from "./UserClass"
import UserContext from "./utils/UserContext"

class About extends React.Component{
    render(){
        return(
            <div>
                <h1>About Class Compo</h1>
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loginUser})=><h1>{loginUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <UserClass name={"Darshan"} location={"DVG"}/>
                <User name={"D"}/>
            </div>
        )
    }
}
export default About