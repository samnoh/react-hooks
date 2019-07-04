const useNotification = (title, options) => {
    if (!('Notification' in window)) return;

    const triggerNoti = () => {
        if (Notification.permission !== 'granted') {
            // Ask permission
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    new Notification(title, options);
                } else {
                    return; // rejected
                }
            });
        } else {
            new Notification(title, options);
        }
    };

    return triggerNoti;
};

export default useNotification;
