import React, { useEffect, useMemo, useState, memo } from "react"
import { useRecoilState, RecoilRoot, useRecoilValue } from 'recoil'
import { Createtodo } from "./components/CreateTodo"
import { Todos }  from "./components/Todos"
import axios from "axios"
import { Assignment1 } from './components/Assignment1'
import { Assignment2 } from "./components/Assignment2"
import { Assignment3 } from "./components/Assignment3"
import { Assignment4 } from "./components/Assignment4"
import { Assignment5 } from "./components/Assignment5"
import { Assignment6 } from "./components/Assignment6"
import { Assignment7 } from "./components/Assignment7"
import { fontSizeLabelState, fontSizeState, textLengthState, textState } from "./atoms"



let nextId = 0;
let initialArtists = [
    {id: 0, name: 'deepak'},
    {id: 1, name: 'deepesh'},
    {id: 2, name: 'deepika'},
    {id: 3, name: 'shiva'},
    {id: 4, name: 'deepanshu'},
    {id: 5, name: 'deependra'}
]

function App() {
    // const [number, setNumber] = useState(0);
    // const [counter, setCounter] = useState(0);

    // let currentNumber = (event) => {
    //     setNumber(event.target.value);
    // }

    // useEffect(() => {
    //     let sum = 0;
    //     for(let i=1; i<number; i++) {
    //         sum += i;
    //     }
    //     setFinalValue(sum);
    // }, [number]);

    // let count = useMemo(() => {
    //     let sum = 0;
    //     for(let i=1; i<number; i++) {
    //         sum += i;
    //     }
    //     return sum;
    // }, [number])

    // let currentCounter = () => {
    //     setCounter(counter + 1);
    // }

    // return (
    //     <>
    //         <input type="number" placeholder="number" onChange={currentNumber}></input>
    //         <p>Sum is {count}</p>
    //         <button onClick={currentCounter}>Counter ({counter})</button>
    //     </>
    // )




    // const [text, setText] = useState('hello');

    // function handleChange(e) {
    //     setText(e.target.value);
    // }

    // return (
    //     <>
    //         <input type="text" value={text} onChange={handleChange} />
    //         <p>You typed: {text}</p>
    //         <button onClick={() => {setText('hello')}}>Reset</button>
    //     </>
    // )




    // const [liked, setLiked] = useState(false);

    // function handleChange(e) {
    //     setLiked(e.target.checked);
    // }

    // return (
    //     <>
    //         <label htmlFor="">
    //             <input type="checkbox" checked={liked} onChange={handleChange}/>
    //             I liked this
    //         </label>
    //         <p>You {liked ? "liked" : "disliked"} it.</p>
    //     </>
    // )



    // const [name, setName] = useState('deepak');
    // const [age, setAge] = useState(23);

    // return (
    //     <>
    //         <input type="text" value={name} onChange={e => setName(e.target.value)}/> <br />
    //         <button onClick={() => setAge(age + 1)}>Increment Age</button>
    //         <p>Hello, {name}. You are {age}.</p>
    //     </>
    // )



    // const [age, setAge] = useState(0);

    // function increment() {
    //     setAge(a => a + 1);
    // }

    // return (
    //     <>
    //         <h1>Your age: {age}</h1> <br />
    //         <button
    //             onClick={() => {
    //                 increment();
    //                 increment();
    //                 increment();
    //             }}>
    //             +3
    //         </button> <br />

    //         <button
    //             onClick={increment}>
    //             +1
    //         </button>
    //     </>
    // )



    // const [age, setAge] = useState(0);

    // function increment() {
    //     setAge(age + 1);
    // }

    // return (
    //     <>
    //         <h1>Your age: {age}</h1> <br />
    //         <button onClick={() => {
    //             increment();
    //             increment();
    //             increment();
    //         }}>+3</button> <br />
    //         <button onClick={increment}>+1</button>
    //     </>
    // )



    // const [position, setPosition] = useState({
    //     x: 0,
    //     y: 0
    // })

    // return (
    //     <div
    //         onPointerMove={e => {
    //             setPosition({
    //                 x: e.clientX,
    //                 y: e.clientY
    //             })
    //         }}
    //         style={{
    //             position: "relative",
    //             width: "100vw",
    //             height: "100vh"
    //         }}
    //     >
        
    //         <div
    //             style={{
    //                 position: "absolute",
    //                 backgroundColor: "red",
    //                 borderRadius: "50%",
    //                 transform: `translate(${position.x}px, ${position.y}px)`,
    //                 left: -10,
    //                 top: -10,
    //                 width: 20,
    //                 height: 20
    //             }}
    //         >

    //         </div>

    //     </div>
    // )




    // const [person, setPerson] = useState({
    //     firstName: "deepak",
    //     lastName: "singh",
    //     email: "deepak@123"
    // })


    // function firstNameChangeHandle(e) {
    //     setPerson({
    //         ...person,
    //         firstName: e.target.value
    //     })
    // }

    // function lastNameChangeHandle(e) {
    //     setPerson({
    //         ...person,
    //         lastName: e.target.value
    //     })
    // }

    // function emailChangeHandle(e) {
    //     setPerson({
    //         ...person,
    //         email: e.target.value
    //     })
    // }

    // return (
    //     <>
    //         <label>
    //             First Name: 
    //             <input type="text" value={person.firstName} onChange={firstNameChangeHandle}/>
    //         </label>
    //         <label>
    //             Last Name: 
    //             <input type="text" value={person.lastName} onChange={lastNameChangeHandle}/>
    //         </label>
    //         <label>
    //             email:
    //             <input type="text" value={person.email} onChange={emailChangeHandle}/>
    //         </label>

    //         <p>
    //             {person.firstName}{' '}
    //             {person.lastName}{' '}
    //             {person.email}
    //         </p>
    //     </>
    // )



    // const [person, setPerson] = useState({
    //     firstName: "deepak",
    //     lastName: "singh",
    //     email: "deepak@123"
    // })


    // function handleChange(e) {
    //     setPerson({
    //         ...person,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // return (
    //     <>
    //         <label>
    //             First name:
    //             <input type="text" value={person.firstName} name="firstName" onChange={handleChange}/>
    //         </label> <br />
    //         <label>
    //             Last name:
    //             <input type="text" value={person.lastName} name="lastName" onChange={handleChange}/>
    //         </label> <br />
    //         <label>
    //             Email:
    //             <input type="text" value={person.email} name="email" onChange={handleChange}/>
    //         </label> <br />

    //         <p>
    //             {person.firstName}{' '}
    //             {person.lastName}{' '}
    //             {person.email}
    //         </p>
    //     </>
    // )



    // const [person, setPerson] = useState({
    //     name: "deepak",
    //     artwork: {
    //         title: "Freedom fighters",
    //         city: "new delhi",
    //         image: "https://i.pinimg.com/736x/b9/ef/1b/b9ef1b5502fa92533037a3b67b4fc4e1.jpg"
    //     }
    // });


    // function handleNameChange(e) {
    //     setPerson({
    //         ...person,
    //         name: e.target.value
    //     })
    // }

    // function handleTitleChange(e) {
    //     setPerson({
    //         ...person,
    //         artwork: {
    //             ...person.artwork,
    //             title: e.target.value
    //         }
    //     })
    // }


    // function handleCityChange(e) {
    //     setPerson({
    //         ...person,
    //         artwork: {
    //             ...person.artwork,
    //             city: e.target.value
    //         }
    //     })
    // }

    // function handleImageChange(e) {
    //     setPerson({
    //         ...person,
    //         artwork: {
    //             ...person.artwork,
    //             image: e.target.value
    //         }
    //     })
    // }

    // return (
    //     <>
    //         <label>
    //             Name: 
    //             <input type="text" value={person.name} onChange={handleNameChange}/>
    //         </label> <br />
    //         <label>
    //             Title:
    //             <input type="text" value={person.artwork.title} onChange={handleTitleChange}/>
    //         </label> <br />
    //         <label>
    //             City:
    //             <input type="text" value={person.artwork.city} onChange={handleCityChange}/>
    //         </label> <br />
    //         <label>
    //             Image:
    //             <input type="text" value={person.artwork.image} onChange={handleImageChange}/>
    //         </label> <br />

    //         <p>
    //             {person.artwork.title}
    //             {' by '}
    //             {person.name}
    //             <br />
    //             (located at {person.artwork.city})
    //         </p>

    //         <img 
    //             src={person.artwork.image} 
    //             alt={person.artwork.title} 
    //         />
    //     </>
    // )


    // const [name, setName] = useState('');
    // const [artists, setArtists] = useState([]);

    // function handleChange() {
    //     setArtists([
    //         ...artists,
    //         {key: nextId++, name: name}
    //     ])
    // }

    // return (
    //     <>
    //         <h1>Inspiring Sculptors</h1>
    //         <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
    //         <button onClick={handleChange}>Add</button>
    //         <ul>
    //             {artists.map(artist => (
    //                 <li key={artist.id}>{artist.name}</li>
    //             ))}
    //         </ul>
    //     </>
    // )



    // const [artists, setArtists] = useState(initialArtists);

    // return (
    //     <>
    //         <h1>Inspiring Sclptors</h1>
    //         <ul>
    //             {artists.map(artist => (
    //                 <li key={artist.id}>
    //                     {artist.name}{' '}
    //                     <button onClick={() => 
    //                         setArtists(artists.filter(a => 
    //                             a.id !== artist.id
    //                         ))
    //                     }>
    //                         Delete
    //                     </button>
    //                 </li>
    //             ))}
    //         </ul>
    //     </>
    // )


    // const [roomId, setRoomId] = useState('general');
    // const [show, setShow] = useState(false);

    // return (
    //     <>
    //         <label>
    //             Select the roomId:{' '}
    //             <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
    //                 <option value="general">general</option>
    //                 <option value="travel">travel</option>
    //                 <option value="music">music</option>
    //             </select>
    //         </label>
    //         <button onClick={() => {
    //             setShow(!show)
    //         }}>
    //             {show ? 'close chat' : 'open chat'}
    //         </button>

    //         {show && <hr />}
    //         {show && <ChatRoom roomId={roomId} />}
    //     </>
    // )

    // function FontButton () {
    //     const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    //     const fontLabelSize = useRecoilValue(fontSizeLabelState);

    //     return (
    //         <div>
    //             <p>Current font size: {fontSize} </p>
    //             <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>
    //                 Click me to enlarge
    //             </button>
    //         </div>
    //     )
    // }
    
    // function Text() {
    //     const [fontSize, setFontSize] = useRecoilState(fontSizeState);

    //     return (
    //         <p style={{fontSize}}>This will also increase in size too</p>
    //     )
    // }

    function TextInput() {
        const [text, setText] = useRecoilState(textState);

        return (
            <div>
                <input type="text" onChange={(e) => setText(e.target.value)}/>
                <br />
                Echo: {text}
            </div>
        )
    }

    function TextInputLength () {
        const inputLength = useRecoilValue(textLengthState);

        return (
            <p>Length: {inputLength}</p>
        )
    }

    return (
        <>
            {/* <Assignment1></Assignment1> */}
            {/* <Assignment2></Assignment2> */}
            {/* <Assignment3></Assignment3> */}
            {/* <Assignment4></Assignment4> */}
            {/* <Assignment5></Assignment5> */}
            {/* <Assignment6></Assignment6> */}
            {/* <Assignment7></Assignment7> */}
            {/* <RecoilRoot>
                <FontButton />
                <Text />
            </RecoilRoot> */}

            <RecoilRoot>
                <TextInput />
                <TextInputLength />
            </RecoilRoot>

        </>
    )

    
    
}



export default App
