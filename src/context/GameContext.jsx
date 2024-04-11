import { getCategories } from "@utils";
import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
  // Global
  const [categories, setCategories] = useState([]);

  // Game
  const [circles, setCircles] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [category, setCategory] = useState(null);
  const [round, setRound] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesRes = await getCategories();
        setCategories(categoriesRes);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  const props = {
    circles,
    setCircles,
    questions,
    setQuestions,
    category,
    setCategory,
    round,
    setRound,
    categories,
    setCategories,
    currentQuestion,
    setCurrentQuestion
  }
  return (
    <GameContext.Provider value={props}>
      {children}
    </GameContext.Provider>
  )
}