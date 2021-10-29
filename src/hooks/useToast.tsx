import * as React from 'react';
import usePortal from 'react-useportal';
import Toast from '@/components/Toast';
import { useState } from 'react';

interface Opt {
  defaultState?: boolean;
}
export interface OpenToastOptions {
  type: 'normal' | 'success' | 'warning' | 'error';
  desc: string;
  during?: number;
}

export type OpenToastFpt = (options: OpenToastOptions) => void;

const useToast = ({ defaultState }: Opt) => {
  const timerRef = React.useRef<any>(null);
  const { isOpen, openPortal, closePortal, Portal, ref } = usePortal({
    isOpen: defaultState,
    onClose: () => {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    },
  });
  const [type, setType] = useState<any>('normal');
  const [desc, setDesc] = useState<string>('');

  const openToast = ({ type: typeDoc, desc: descDoc, during = 3000 }: OpenToastOptions) => {
    if (isOpen) return;

    setType(typeDoc);
    setDesc(descDoc);
    openPortal();

    timerRef.current = setTimeout(() => {
      closePortal();
    }, during);
  };

  const ToastView = () => {
    return (
      <Portal>
        <Toast visible={isOpen} ref={ref} type={type} desc={desc} closeToast={closePortal} />
      </Portal>
    );
  };

  return {
    ToastView,
    openToast,
    isOpen,
    ref,
  };
};

export default useToast;
