import { useRef } from "react"
import { StyledContainer, StyledModalHeader } from "./style"
import { useEffect } from "react"

export const Modal = ({ isOpen, onClose, children, title }) => {
  const containerRef = useRef()
  useEffect(() => {
    const handleClick = (e) => {
      if (containerRef.current && isOpen && !containerRef.current.contains(e.target)) {
        if (onClose) {
          onClose()
        }
      }
    }

    const handleEscapeKey = (e) => {
      if ((e.key === "Escape" || e.key === "Esc") && isOpen) {
        if (onClose) {
          onClose
        }
      }
    }

    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleClick)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <StyledContainer>
      <div ref={containerRef} className="Modal">
        <StyledModalHeader>
          <h2>{title}</h2>
          <button onClick={onClose}>X</button>
        </StyledModalHeader>
        {children}
      </div>
    </StyledContainer>
  )
}
