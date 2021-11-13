import React,{useState,useEffect,useRef} from 'react'

export default function Ref() {
console.log("Rendering")
  const [play,setPlay]=useState('')
const First =  useRef()
const count = useRef(1)

useEffect(()=>{
  count.current = count.current +1
})
useEffect(()=>{
  First.current.focus()
},[])
  return (
    <div>
      <input
      ref={First}
      name="play"
      value={play}
      onChange={(e)=>setPlay(e.target.value)}
      />
      <p>{count.current}</p>
    </div>
  )
}
