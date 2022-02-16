import {useContext, useState } from "react"
import {service} from '../../fakeServer';
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { LoginCntxReducer } from "../../Context"


interface ISaveUser {
        key?: string 
}
export const Auth = () => {
        const [form, setForm] = useState({
                name: null,
                password: null
        })

        const navigation = useNavigate()
        const dispatch = useContext(LoginCntxReducer)
     
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();     
                try {
                        if(form.name && form.password) {
                                const {key}:ISaveUser  = await service.registration(form)
                                const user = key &&  jwt_decode(key);
                                localStorage.setItem('user', JSON.stringify(user));
                                 /// @ts-ignore
                                dispatch({type: "LOGIN"})
                                navigation('/')
                        }
                      
                } catch (error) {
                        console.error(error)
                }
                
                
        }

        const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
                const {name, value} = event.target

                setForm({
                        ...form, 
                        [name]: value
                })

                
        }

        return (
                <div>
                       <img src="https://media1.giphy.com/media/l2SpLkj1bhZqRx8pa/200.gif" alt=""  />
                        <div>
                                <h2>Авторизация </h2>
                                <div>
                                        предоставление определенному лицу или группе лиц прав на выполнение определенных действий.<br/>                                
                                        Все вы с ней знакомы не по наслышки (то что вы делает когда первый раз хотите зайти на любой ресурс и если вы не прохожите ее то вас направляет на регистрацию  )
                                </div>
                                <img src="https://bytwork.com/sites/default/files/styles/webp_dummy/public/inline-images/image_73.png?itok=32IuqqfE" alt="" />
                        </div>
                        <div>
                                Пример регестрации 
                                <form action="" onSubmit={handleSubmit}>
                                        <p> 
                                                <label htmlFor="name">Name:</label> 
                                                <input type="text" name="name" onChange={(e) => handleInputChange(e)}/>
                                        </p>
                                        <p> 
                                                <label htmlFor="password">Password:</label> 
                                                <input type="password" name="password" onChange={(e) => handleInputChange(e)} /> 
                                        </p>
                                     <button>Регистрация</button>
                                </form>
                        </div>
                        
                </div>
        )

} 