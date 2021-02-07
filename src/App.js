import React from 'react';
import './index.css'
import SlotM from './SlotMachine'

 const App = () => {
return (<>
<h1 className="heading_style">Welcome to 🎰 Slot Machine Game</h1>
<SlotM x="🍧" y="🍧" z="🍧"/>
<SlotM x=" 😃 " y=" 😉" z=" 😃"/>
<SlotM x="🍎" y="🍎" z="🍎"/>
<SlotM x="🙈" y="🙊" z="🙉"/>
<SlotM x="🎧" y="🍎" z="🎧"/>
</>);
 };

export default App;