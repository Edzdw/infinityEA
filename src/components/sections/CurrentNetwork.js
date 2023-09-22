import React, { useState } from "react";

function CurrentNetwork({ networks }) {
    const [currentLevel] = useState(1);
    const [currentList, setCurrentList] = useState([]);

    React.useEffect(() => {
        networks.forEach((item) => {
            if (item.level === currentLevel) {
                setCurrentList([...currentList, item]);
            }
        });
    }, []);

    return (
        <div>
            <ul>
                {currentList.map((item, index) => (
                    <li key={index}>
                        <span>{item.email}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CurrentNetwork;
