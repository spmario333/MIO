import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('me dibujo :(')

  return (
    <small>{value}</small>
  )
})
