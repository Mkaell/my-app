import React, { useEffect, useState } from 'react';
import './App.css';
import { useNavigate, useParams, Routes, Route, Link, NavLink } from "react-router-dom";
import axios from 'axios'
import { DebounceInput } from 'react-debounce-input'

// const contacts = [
//   {
//     id: 0,
//     role: 'Chosen Ones',
//     number: '+23213213213',
//     name: 'Tomas',
//     surname: 'Anderson',
//     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Of7dkbn09iMHiXEbVAuD6awfnItMbTNDcg&usqp=CAU'
//   },
//   {
//     id: 1,
//     role: 'prophet',
//     number: '+23213213213',
//     name: 'Morpheus',
//     surname: 'How khows',
//     img: 'https://static.wikia.nocookie.net/matrix/images/9/9b/Morpheus1.jpg/revision/latest?cb=20090501203241'
//   },
//   {
//     id: 2,
//     role: 'Lover',
//     number: '+23213213213',
//     name: 'Trinity',
//     surname: 'Anderson',
//     img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/MatrixTrinity.jpg/220px-MatrixTrinity.jpg'
//   }
// ]

// const Main = () =>  (<div>MAIN</div>)
// const Second = () =>  (<div>Second</div>)
// const Third = () =>  (<div>Third</div>)
// const Info = () => {
//   const {id} = useParams() 
//   const item = contacts.find(({id: itemId}) => id === `${itemId}`)
//   return (
//     <div>
//       {item &&  <div> name: {item.name} </div> } 
//       {item &&  <div>Surname: {item.surname}</div>}
//     </div>
//   )
// }
// const Contacts = () =>   {
//   const navigate = useNavigate();

//   const handleClick = (e: React.MouseEvent) => {
//       const {id} = e.currentTarget;
  
//       navigate(`${id}`) 
//   }

//   return (
//     <>
//       <div>Contacts</div>
//       <div className='wrap' style={{
//         display: 'flex',
//         justifyContent: 'space-around'
//       }}>
//           {
//             contacts.map(({id, img, name}) => (
//               <div 
//               key={id} 
//               id={`${id}`}
//               style={{
//                 display: 'flex',
//                 height: 150,
//                 border: '2px solid black'
//               }} 
//               onClick={(e) => handleClick(e)}
//               >
//                   <img src={img} alt={name} />
//               </div>
//             ))
//           }         
//       </div>
//       <Info />
//     </>
//   )
// }
// const isLogin = true;
interface IUser {
    id: string,
    name: string,
    role?: string,
    money?: number
}

const getNextId = (data: IUser[] | []) => {
  return data.length + 1
}

function App() {
  const [users, setUsers]  = useState<IUser[] | []>([])

   useEffect( () => {
     ( async () => {
      const users = await axios.get('http://localhost:3000/users');
      setUsers(users.data)
     })()
     
   }, [])
   
   const getUsers = async(e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
  
    const params = target.value ? { params: {
      role: target.value
    } } : {};

    try {
      const users = await axios.get('http://localhost:3000/users', params)
      setUsers(users.data)
    } catch (error) {
      console.error(error);
    }
    
     
  }

  const addUser = async (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const users = await axios.get('http://localhost:3000/users');
    try {
      const user = await axios.post('http://localhost:3000/users', {
        "id": getNextId(users.data),
        "name": target.value ,
        "role": "admin 1",
        "money": 100
    })
    } catch(err) {
      console.error(err)
    }
    
   
  }

  const sortByMoney = async () => {
    try {
      const sortedUsers = await axios.get('http://localhost:3000/users', {
        params: {
          _sort:'money'
        }
      })
      setUsers(sortedUsers.data)
    } catch (error) {
      console.error(error);
    }
    
  
  }

  return (
    <div className="App">
        <h1>Основные операции с сервером: поиск, фильтр, сортировка</h1>

        <h2>
            Поиск
        </h2>
        <p>
          <label htmlFor="search">Поиск</label>
           <DebounceInput 
            placeholder='serach user or users' 
            onChange={(e) => getUsers(e)}
            debounceTimeout={500} // та самая задержка после которой пойдет запрос
           />
           <label htmlFor="money"></label>
           <input type="checkbox" id='money' onChange={() => sortByMoney() }/> 
        </p>
        <h2>
          Add user to Db 
        </h2>
        <p>
          <label htmlFor="search">Add</label>
           <DebounceInput 
            placeholder='serach user or users' 
            onChange={(e) => addUser(e)}
            debounceTimeout={500} // та самая задержка после которой пойдет запрос
           />
            
        </p>
        {
          users.map((item) =><div>name {item.name} id{item.id}</div> )
        }
         
    </div>
  );
}

export default App;
