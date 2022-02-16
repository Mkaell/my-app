import React, { useEffect }  from "react"
const LoginCntx = React.createContext({login: false})
const LoginCntxReducer = React.createContext({})

 
interface  ChildrenProps {
        children?: JSX.Element | JSX.Element[]
}  

const loginReducer = (state:object, action:any) => {
        switch(action.type){
                case 'LOGIN':
                        return {...state, login: true}
                case 'LOGOUT':
                        return {...state, login: false}
        default: return state
        }
}

   const CustomCntx = ({children}:ChildrenProps) => {
        /// @ts-ignore
        const [state, dispatch] =  React.useReducer(loginReducer, {login: false});

        useEffect(() => {
             if(localStorage.getItem('user')) {
                     dispatch({type: 'LOGIN'})
             }
        }, []);

        return (
                /// @ts-ignore
                <LoginCntx.Provider value={state}>
                        <LoginCntxReducer.Provider value={dispatch}>
                                {children}
                        </LoginCntxReducer.Provider>
                </LoginCntx.Provider>
        )
}
export {
        CustomCntx,
        LoginCntx,
        LoginCntxReducer
}