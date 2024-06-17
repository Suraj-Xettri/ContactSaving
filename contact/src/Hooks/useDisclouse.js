import { useState } from 'react'

const useDisclouse = () => {
    const[isOpen, setIsOPen] = useState(false)

    const onOpen = () => {
      setIsOPen(true)
    }
  
    const onClose = () => {
      setIsOPen(false)
    }
  return {onClose, onOpen, isOpen}
}

export default useDisclouse