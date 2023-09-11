import { ToastState } from "@/store/toast";
import { Toast } from "@/type/toast";
import { useRecoilState } from "recoil";

export const useToast = () => {
  const [ state, setState ] = useRecoilState<Toast>(ToastState);
  const showToast = ({message, style}: Omit<Toast, 'isShown'>): void => {
    setState({...state, ...{isShown: true, message, style}});
  };
  const hideToast = (): void => {
    setState({...state, ...{isShown:false}})
  }

  return { showToast, hideToast }
};