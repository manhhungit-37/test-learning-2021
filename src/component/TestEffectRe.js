import React, { useState, useEffect } from 'react'

function TestEffectRe() {
  const [hung, setHung] = useState("");

  useEffect(() => {
    setHung("hung");
  })

  console.log(hung);

  return (
    <div>
      dasd
    </div>
  )
}

export default TestEffectRe
