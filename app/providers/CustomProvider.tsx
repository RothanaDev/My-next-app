"use client"
import React, { ReactNode, useState } from 'react'

function CustomProvider({children}:{children: ReactNode}) {
    const [name ,setName] = useState("");
  return (
    <div>
        {children}
    </div>
  )
}

export default CustomProvider
