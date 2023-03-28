import { GameStateProvider } from "commom/contexts/GameState";
import { ScoreProvider } from "commom/contexts/Score";
import Game from "components/Game";
import GameOver from "components/GameOver";
import Header from "components/Header";
import RulesButton from "components/RulesButton";

function App() {
    return (
        <ScoreProvider>
            <GameStateProvider>
                <Header />
                <Game />
                <RulesButton />
                <GameOver />
            </GameStateProvider>
        </ScoreProvider>
    );
}

export default App;
