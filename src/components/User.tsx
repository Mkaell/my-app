import React from 'react'
import './User.css'



const User = ({ id, name, money, onDelete }: any) => {
    return (
        <div className='user'
            id={id}
        >
            <p>Name: {name}</p>
            <p>Id: {id}</p>
            <p>Money: {money}</p>
            <button className='btn_delete' onClick={onDelete}>X</button>
        </div>
    )
}

export default User