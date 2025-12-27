import React from 'react'

type Props = {
    tittle:string
}

function CustomButton({tittle} : Props) {
  return (
    <div>
       {tittle}
    </div>
  )
}

export default CustomButton
