import React, { createContext, useState } from "react";

type RunningProcessContextType = {
  isRunning: any;
  setIsRunning: any;
};

type RunningProcessProviderProps = {
  children: React.ReactNode;
  value?: { isRunning: boolean; setIsRunning: (isRunning: boolean) => void };
};

const RunningProcessContext = createContext<RunningProcessContextType>({
  isRunning: false,
  setIsRunning: () => {},
});

export const useRunningProcessContext = () =>
  React.useContext(RunningProcessContext);

const RunningProcessProvider = (props: RunningProcessProviderProps) => {
  const { children, value } = props;
  const [isRunning, setIsRunning] = useState(value?.isRunning || false);

  return (
    <RunningProcessContext.Provider value={{ isRunning, setIsRunning }}>
      {children}
    </RunningProcessContext.Provider>
  );
};

RunningProcessProvider.defaultProps = {
  value: { isRunning: false, setIsRunning: () => {} },
};

export default RunningProcessProvider;
