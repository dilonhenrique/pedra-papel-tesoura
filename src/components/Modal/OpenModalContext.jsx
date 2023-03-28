import { createContext, useContext, useState } from "react";

export const OpenModalContext = createContext()
OpenModalContext.displayName = "OpenModal"

export function OpenModalProvider({ children }) {
    const [openModal, setOpenModal] = useState(false)

    return (
        <OpenModalContext.Provider value={{ openModal, setOpenModal }}>
            {children}
        </OpenModalContext.Provider>
    )
}

export function useOpenModalContext() {
    const { openModal, setOpenModal } = useContext(OpenModalContext)

    return { openModal, setOpenModal }
}