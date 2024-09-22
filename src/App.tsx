import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Leaderboard } from "./components/leaderboard/Leaderboard";
import { Home } from "./components/home";
import { Game } from "./components/game";
import { AllGames } from "./components/allGames";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import { useState } from "react";
import SessionContext from "./SessionContext";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "/game/:playerId",
    element: <Game />,
  },
  {
    path: "/games/:playerId",
    element: <AllGames />,
  },
]);

function App() {
  const [session, setSession] = useState<number>();

  const updateSession = (id: number) => {
    console.log("contextId", id);
    setSession(id);
  };

  return (
    <SessionContext.Provider value={{ id: session, update: updateSession }}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />;
      </ApolloProvider>
    </SessionContext.Provider>
  );
}

export default App;
