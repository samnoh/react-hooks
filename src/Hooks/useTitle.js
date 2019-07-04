import { useState, useEffect } from 'react';

const useTitle = (initialTitle = 'My React App') => {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = () => {
        const htmlTitle = document.querySelector('title'); // <title>...</title>
        htmlTitle.innerText = title;
    };

    useEffect(updateTitle, [title]);

    return setTitle;
};

export default useTitle;
