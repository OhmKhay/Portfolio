import React, { useState } from 'react'

const MyCounter = () => {
    const [defaultOffset, setDefaultOffset] = useState(0);
    const currentTimeInSeconds= Math.floor(Date.now()/1000);

    return (
        <>
            <button onClick={() => setDefaultOffset(defaultOffset+1)}>
                + Add Offset
            </button>
            <div>
                Currest Offset: ({defaultOffset})
            </div>
        </>
    )
}

export default MyCounter