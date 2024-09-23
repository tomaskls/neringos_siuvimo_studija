import { useState } from 'react';

export function useTouch() {
    const [isTouched, setIsTouched] = useState(false);

    const handleTouchStart = () => {
        setIsTouched(true);
    };

    const handleTouchEnd = () => {
        setIsTouched(false);
    };

    return {
        isTouched,
        handleTouchStart,
        handleTouchEnd
    };
}

