import { useState, useEffect } from 'react';

export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  // will only be rendered in client
  useEffect(() => {
    setIsClient(true, []);
  });

  return isClient;
}
