import React, { useEffect, useState } from 'react';

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleOnline = () => {
    setIsOnline(true);
  }

  const handleOffline = () => {
    setIsOnline(false);
  }

  useEffect(() => {
    console.log('mounted');
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      console.log('unmounted');
      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)
    }
  },
  []
  );

  if (isOnline) {
    return (
      <p>Všechno v pořádku</p>
    )
  };

  return (
    <p>Jste offline!</p>
  );
};

export default Offline;