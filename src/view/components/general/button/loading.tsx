'use client';

import { Power } from 'lucide-react';
import React from 'react';

import { Button } from '~/components/ui/button';

export function ButtonLoading() {
  const [isLoading, setIsLoading] = React.useState(false);

  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsLoading(true);

    timeoutRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-2">
      <p>Loading</p>
      <div className="flex flex-row gap-2">
        <Button loading>Loading</Button>
        <Button loading size="sm">
          Loading
        </Button>
        <Button loading aria-label="Loading" />
      </div>
      <div className="flex flex-row gap-2">
        <Button loading={isLoading} onClick={handleClick}>
          Icon Start
        </Button>
        <Button iconPlacement="end" loading={isLoading} onClick={handleClick}>
          Icon End
        </Button>
        <Button icon={<Power />} loading={isLoading} onClick={handleClick}>
          Icon Replace
        </Button>
        <Button
          aria-label="Power"
          icon={<Power />}
          loading={isLoading}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
