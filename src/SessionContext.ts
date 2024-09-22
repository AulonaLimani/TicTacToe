import React from "react";

const SessionContext = React.createContext<{
  id?: number;
  update(id: number): void;
}>({
  id: undefined,
  update: () => {},
});

export default SessionContext;
