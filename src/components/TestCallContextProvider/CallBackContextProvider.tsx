import React, { createContext, useContext, useRef } from 'react';

type CallBacks = {
    onOptionSelect: () => void;
    onValidateInput: (input: string) => void;
};

type Props = { children: JSX.Element } & Partial<CallBacks>;

const Context = createContext<CallBacks | null>(null);
export const CallBackContextProvider: React.FC<Props> = ({
    onOptionSelect = () => {},
    onValidateInput = () => {},
    children,
}) => {
    const ref = useRef<CallBacks>({ onOptionSelect, onValidateInput });

    ref.current.onOptionSelect = onOptionSelect;
    ref.current.onValidateInput = onValidateInput;

    return <Context.Provider value={ref.current}>{children}</Context.Provider>;
};

export const useCallBackContext = () => {
    const callbacks = useContext(Context);
    if (callbacks === null) throw new Error('context value is null');
    return callbacks;
};
