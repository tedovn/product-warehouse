import { useState } from "react";

type DialogProps = {
  defaultState?: boolean;
};

type ReturnType = {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
};

const useDialog = ({ defaultState = false }: DialogProps): ReturnType => {
  const [isVisible, setIsVisible] = useState(defaultState);

  const hide = () => {
    setIsVisible(false);
  };

  const show = () => {
    setIsVisible(true);
  };
  return {
    isVisible,
    show,
    hide,
  };
};

export default useDialog;
