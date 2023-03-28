import { createContext, useContext, useState } from "react";

export const ScoreContext = createContext()
ScoreContext.displayName = "Score"

export function ScoreProvider({ children }) {
    const [score, setScore] = useState(5)

    return (
        <ScoreContext.Provider value={{ score, setScore }}>
            {children}
        </ScoreContext.Provider>
    )
}

export function useScoreContext() {
    const { score, setScore } = useContext(ScoreContext)

    return { score, setScore }
}