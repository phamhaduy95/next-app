import React, { memo, useEffect, useId, useState } from 'react';
import { useCallBackContext } from './CallBackContextProvider';

type ChildComponentProps = {
    text: string;
};

// this example demonstrate how to use Context to pass non-memoized callback function.

const ChildComponent: React.FC<ChildComponentProps> = ({ text = '' }) => {
    const callbacks = useCallBackContext();
    const [count, setCount] = useState(0);
    const id = useId();

    const handleButtonClick = () => {
        callbacks.onOptionSelect();
        setCount((prev) => prev + 1);
    };

    // Any effect hook should rely on state mostly not on function
    useEffect(() => {
        callbacks.onValidateInput(count.toString());
    }, [callbacks, count]);

    return (
        <div>
            <label htmlFor={id}>{text}</label>
            <button id={id} onClick={handleButtonClick}>
                {count}
            </button>
        </div>
    );
};

export default memo(ChildComponent);
