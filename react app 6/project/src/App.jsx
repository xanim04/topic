
import { useEffect, useState } from 'react'
import './App.css'
import Modal from './Modal'


function App() {
  let [text, setText] = useState('SHOW MODAL')
  let [warnMessage, setWarnMessage] = useState('THIS IS WARN MESSAGE')
  let [hint, setHint] = useState('THIS BUTTON SHOW MODAL')
  let [modalActive, setModalActive] = useState(false)
  let [popUp, setPopUp] = useState(false)


  return (
    <div>
   <button onMouseLeave={() => setPopUp(false)}
   onMouseOver={() => setPopUp(true)}
   className={`${modalActive && 'button-clicked'}`}
   onClick={() => setModalActive(!modalActive)}
   >
     {text}
   {popUp && <p>{hint}</p>}
   </button>
    {modalActive && <Modal warnMessage={warnMessage} />}
    </div>
  );
};

export default App;
