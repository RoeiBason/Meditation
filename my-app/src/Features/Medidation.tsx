import React, { FC, useEffect, useState } from 'react';


const Meditation: FC = () => {

    const [count, setCount] = useState(0);

    useEffect(() =>{
        const intervalId = setInterval(() => {
            setCount((prevCount) => prevCount+1)
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return <span>it has been {count} seconds since you opened the page</span>
}

export default Meditation;