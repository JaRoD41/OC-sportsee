import React from 'react'

export default function Header() {
  const user = "Thomas"
  return (
    <header className='title_container'>
      <h1 className='hearder_hello'>Bonjour</h1>
      <h2 className='header_user'>{user}</h2>
    </header>
  )
}
