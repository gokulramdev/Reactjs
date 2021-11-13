import React from 'react'
import { useHistory } from 'react-router'

export default function Blog() {

  const history = useHistory();

  const Go = () => {
    history.push(`/contact`)
  }
  return (
    <div>
      Welcome Blog
      <button  onClick={Go}>Contact</button>
    </div>
  )
}
