import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    render(){

        return(
            <div className="user">
            <h2>Name : {this.props.name}</h2>
            <h3>Address : Bengaluru</h3>
            <h4>Count : {this.state.count}</h4>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>Click</button>
        </div>
        )
    }
}
export default UserClass