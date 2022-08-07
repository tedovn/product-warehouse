import React, { createContext } from "react";
import {
  ToastContainer,
  toast,
  ToastOptions,
  Id,
  Slide,
  TypeOptions,
} from "react-toastify";

const defaultOptions: ToastOptions = {
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 3000, // 3s
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  transition: Slide,
  theme: "colored",
};

type ToastProviderProps = {
  children: React.ReactNode;
};

interface ToastProps extends ToastOptions {
  severity: TypeOptions;
  summary: string;
  detail?: Element | string;
}

type ShowToast = (config: ToastProps) => Id;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Msg = ({ summary, detail, severity }: ToastProps) => (
  <>
    <span className="headline">{summary}</span>
    {detail && <div>{detail}</div>}
  </>
);

const ToastContext = createContext({
  showToast: (config: ToastProps) =>
    toast(<Msg {...config} />, {
      ...defaultOptions,
      ...config,
      type: config.severity,
    }),
});

export const useToastContext = () => React.useContext(ToastContext);

const ToastProvider = (props: ToastProviderProps) => {
  const { children } = props;

  const showToast: ShowToast = (config) =>
    toast(<Msg {...config} />, {
      ...defaultOptions,
      ...config,
      type: config.severity,
    });

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
