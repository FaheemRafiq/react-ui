import { useState, useEffect } from 'react';

const useProduction = () => {
    const [isProduction, setIsProduction] = useState(false);

    useEffect(() => {
        setIsProduction(process.env.NODE_ENV === 'production');
    }, []);

    return isProduction;
};

export default useProduction;