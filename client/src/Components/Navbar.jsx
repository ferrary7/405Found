import React from 'react'

function Navbar() {
  return (
    <div className="header">
        <div className="logo">Rivly Logo</div>
        <div className="categories">
          24 Categories <span>View All</span>
        </div>
        <input type="text" placeholder="I'm shopping for..." />
        <div className="user">Ryan</div>
      </div>
  )
}

export default Navbar