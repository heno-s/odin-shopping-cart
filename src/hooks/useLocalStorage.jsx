import { useEffect, useState } from "react";

function getFromStorage(key, initialValue) {
    const value = JSON.parse(localStorage.getItem(key));
    if (value !== null) {
        return value;
    } else if (initialValue instanceof Function) {
        return initialValue();
    } else {
        return initialValue;
    }
}

export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() =>
        getFromStorage(key, initialValue)
    );

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}
