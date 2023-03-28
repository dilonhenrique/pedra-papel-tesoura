import { createContext, useContext, useState } from "react";

export const GameStateContext = createContext()
GameStateContext.displayName = "Game State"

export function GameStateProvider({ children }) {
    const [gameState, setGameState] = useState("start")

    return (
        <GameStateContext.Provider value={{ gameState, setGameState }}>
            {children}
        </GameStateContext.Provider>
    )
}

export function useGameStateContext() {
    const props = useContext(GameStateContext)

    return props
}