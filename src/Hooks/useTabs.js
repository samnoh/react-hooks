import React, { useState } from 'react';

const useTabs = (initialTab = 0, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

export default useTabs;
