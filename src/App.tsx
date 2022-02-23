import React, { useEffect, useState } from 'react';
import './App.css';
import { useNavigate, useParams, Routes, Route, Link, NavLink } from "react-router-dom";
import axios from 'axios'
import { DebounceInput } from 'react-debounce-input'
import User from './components/User';

interface IUser {
  id: string,
  name: string,
  role?: string,
  money?: number
}

const getNextId = () => {
  return Date.now()
}

function App() {
  const [users, setUsers] = useState<IUser[] | []>([])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('http://localhost:3000/users');
      setUsers(data)
    })()

  }, [])

  const getUsers = async (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    const params = target.value ? {
      params: {
        name: target.value
      }
    } : {};

    try {
      const users = await axios.get('http://localhost:3000/users', params)
      setUsers(users.data)
    } catch (error) {
      console.error(error);
    }


  }

  const removeUsers = async (e: any) => {
    const id = e.target.parentNode.id
    console.log(id)

    try {
      await axios.delete(`http://localhost:3000/users/${id}`);

      setUsers(users)
      getUsers(e)
    } catch (error) {
      console.error(error);
    }


  }

  const addUser = async (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const { data } = await axios.get('http://localhost:3000/users');
    try {
      const { data: user } = await axios.post('http://localhost:3000/users', {
        "id": getNextId(),
        "name": target.value,
        "role": "admin 1",
        "money": Math.floor((Math.random() * 1000) + 1)
      })

      setUsers([...users, user])
    } catch (err) {
      console.error(err)
    }


  }

  const sortByMoney = async (sort: string) => {
    try {
      const sortedUsers = await axios.get('http://localhost:3000/users', {
        params: {
          _sort: sort
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
        <div>
          <label htmlFor='money'>Money</label>
          <input type="radio" id='money' name="radio" value="money"
            onChange={() => sortByMoney('money')} />
          <label htmlFor='name'>Name</label>
          <input type="radio" name="radio" value="name"
            onChange={() => sortByMoney('name')} />
          <label htmlFor='role'>Role</label>
          <input type="radio" name="radio" value="role"
            onChange={() => sortByMoney('role')} />
        </div>
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
      <div className="App_container">
        {
          users.map((item) => <User
            key={item.id}
            id={item.id}
            name={item.name.toLocaleLowerCase()}
            money={item.money}
            onDelete={(e: any) => removeUsers(e)}
          />)
        }
      </div>
    </div>
  );
}

export default App;
