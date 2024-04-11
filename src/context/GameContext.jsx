import { getQuestion } from "@utils";
import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
  const [creatingGame, setCreatingGame] = useState(false);
  const [game, setGame] = useState("asdf");
  const [circles, setCircles] = useState(["#A49393", "#A49393", "#A49393", "#A49393"]);
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState(null);
  const [round, setRound] = useState(1);

  const createCircles = () => {
    let createCircles = [];
    questions.map((question) => {
      createCircles.push("#A49393");
    })
    setCircles(createCircles);
  }

  useEffect(() => {
    // createCircles();
  }, []);

  useEffect(() => {
    if (category) {
      category.questions.map(async (questionId) => {
        const questionRes = await getQuestion(questionId);
      })
    }
  }, [category]);

  const props = {
    game,
    setGame,
    circles,
    setCircles,
    questions,
    setQuestions,
    category,
    setCategory,
    creatingGame,
    setCreatingGame,
    round,
    setRound
  }
  return (
    <GameContext.Provider value={props}>
      {children}
    </GameContext.Provider>
  )
}