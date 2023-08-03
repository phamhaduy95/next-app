import { useEffect, useRef } from 'react';

export const useCheckValueChange = <T,>(
    value: T,
    callback: (oldValue: T, newValue: T) => void,
    comparator?: <U = T>(a: U, b: U) => boolean
) => {
    const valueRef = useRef<T>(value);
    const idRef = useRef<string>('');

    const isValueChange = () => {
        if (comparator) {
            return comparator(value, valueRef.current);
        }
        return Object.is(value, valueRef.current);
    };

    const id = isValueChange() ? idRef.current : crypto.randomUUID();

    useEffect(() => {
        if (id !== '') {
            callback(valueRef.current, value);
            idRef.current = id;
            valueRef.current = value;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
};
