import React from 'react'
import Navigation from '../Component/Navigation'

export default function Header() {
  return (
    <header className="border-b font-bold p-3 flex justify-between item-center">
            <span className="font-bold">
                App Name
            </span>
        <Navigation/>
    </header>
  )
}
