import React, { useState } from "react";

class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            userInfo:{
                name:"dummy",
                location:"default",
            },
        };

    }
    async componentDidMount()
    {
        const data=await fetch("https://api.github.com/users/Param-gupta03");
        const json=await data.json();
        this.setState({
            userInfo: json,
        });
        console.log(json);


    }
    
    render(){
        const {name,location}=this.state.userInfo;
        
        return(
        <div className="user-card">
            {/* <h1>Count:{count}</h1>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,
                });
            }}>Count increase</button> */}
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
        </div>
        )
    }
}
export default UserClass;