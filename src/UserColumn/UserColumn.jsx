import React from 'react'
import './UserColumn.css'


function UserColumn( props ){
    const {users} = props;
    console.log(users)
    return (
       <div className="userBox">
        <div className='userHead'><h3>Connected Users</h3></div>  
       <dev className = "userColumn" >
             <ul>
             {users.map((user) => {
                return <li className="user">{` ${user.username}`}</li>
             })}
             </ul>
       </dev>
       </div>
    )
}

export default UserColumn