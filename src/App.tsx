import React from 'react';
import './App.css';
import { useNavigate, useParams, Routes, Route, Link, NavLink } from "react-router-dom";

const contacts = [
  {
    id: 0,
    role: 'Chosen Ones',
    number: '+23213213213',
    name: 'Tomas',
    surname: 'Anderson',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Of7dkbn09iMHiXEbVAuD6awfnItMbTNDcg&usqp=CAU'
  },
  {
    id: 1,
    role: 'prophet',
    number: '+23213213213',
    name: 'Morpheus',
    surname: 'How khows',
    img: 'https://static.wikia.nocookie.net/matrix/images/9/9b/Morpheus1.jpg/revision/latest?cb=20090501203241'
  },
  {
    id: 2,
    role: 'Lover',
    number: '+23213213213',
    name: 'Trinity',
    surname: 'Anderson',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/MatrixTrinity.jpg/220px-MatrixTrinity.jpg'
  }
]

const Main = () =>  (<div>MAIN</div>)
const Second = () =>  (<div>Second</div>)
const Third = () =>  (<div>Third</div>)
const Info = () => {
  const {id} = useParams() 
  const item = contacts.find(({id: itemId}) => id === `${itemId}`)
  return (
    <div>
      {item &&  <div> name: {item.name} </div> } 
      {item &&  <div>Surname: {item.surname}</div>}
    </div>
  )
}
const Contacts = () =>   {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
      const {id} = e.currentTarget;
  
      navigate(`${id}`) 
  }

  return (
    <>
      <div>Contacts</div>
      <div className='wrap' style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}>
          {
            contacts.map(({id, img, name}) => (
              <div 
              key={id} 
              id={`${id}`}
              style={{
                display: 'flex',
                height: 150,
                border: '2px solid black'
              }} 
              onClick={(e) => handleClick(e)}
              >
                  <img src={img} alt={name} />
              </div>
            ))
          }         
      </div>
      <Info />
    </>
  )
}
const isLogin = true;

function App() {
  
  
  return (
    <div className="App">
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          height: 80
        }}>
        
        {
          isLogin ? (
            <>
            <Link to='/'>Home</Link>
            <Link to='/second'>Second</Link>
            </>
          ) : (
            <>
              <Link to='/third' >Third</Link>
              <Link to='/contacts' >Contacts</Link>
            </>
            
          )
        } 
        
          

          {/* <NavLink to='/contacts' className={(isActive) => isActive && 'active_link'} > Contacts NavLink</NavLink> */}
        </nav>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/second" element={<Second />} />
            <Route path="/third" element={<Third />} /> 
            <Route path="/contacts" element={<Contacts />} >
              <Route path={`:id`}  element={<Info />} />
            </Route>             
        </Routes>
    </div>
  );
}

export default App;
