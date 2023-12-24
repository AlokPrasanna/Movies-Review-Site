import React from 'react'

function MenuLink(props) {
  return (
    <div>
      <a href={props.url}>{props.LinkName}</a>
    </div>
  )
}

export default MenuLink
