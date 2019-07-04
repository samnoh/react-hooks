import { useEffect } from 'react';

const useBeforeLeave = onBefore => {
    const handle = event => {
        if (typeof onBefore === 'function') onBefore();
    };

    useEffect(() => {
        document.addEventListener('mouseleave', handle);
        return () => document.removeEventListener('mouseleave', handle);
    }, []);
};

export default useBeforeLeave;
