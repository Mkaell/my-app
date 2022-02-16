 import { useContext } from "react"
import { LoginCntx, LoginCntxReducer } from "../../Context"

export const Main = () => {
  const {login} = useContext(LoginCntx)  
  const dispatch = useContext(LoginCntxReducer)
  
  const handleLogOut = () => {
    /// @ts-ignore
    dispatch({type: 'LOGOUT'})
    localStorage.removeItem('user')
  } 
    return (
      <>
      <h1>HTTP или новый формат HTTPS s- security </h1>
      <h3>Протокол дл я общения клиента и сервера в клиенто-серверном приложении </h3>
      <img src="http://3.bp.blogspot.com/-iCTBNgqzQtU/VJxJcvKAKrI/AAAAAAAAAHc/2Vnwfss9bmw/s1600/client-server-illustration.gif" alt="clinet server arch" />
      {login && <div style={{background: 'red', height: 300, fontSize: 40}}>Privet block</div>}
      <button onClick={() => handleLogOut()}>LOGOUT</button>
    </>
    )
}
