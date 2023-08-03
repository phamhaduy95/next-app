import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import { CallBackContextProvider } from './CallBackContextProvider';

export const MyComponent: React.FC = () => {
    const [count, setCount] = useState(0);

    const handleInputChange = (input: string) => {
        console.log('count: ', input);
    };

    const handleUpdateClick = () => {
        setCount(count + 1);
    };

    return (
        <CallBackContextProvider onValidateInput={handleInputChange}>
            <div>
                <button onClick={handleUpdateClick}>Update</button>
                <ChildComponent text='count' />
            </div>
        </CallBackContextProvider>
    );
};
