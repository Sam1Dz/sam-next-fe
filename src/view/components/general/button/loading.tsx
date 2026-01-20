'use client';

import { Power } from 'lucide-react';
import React from 'react';

import { Button } from '~/components/ui/button';

export function ButtonLoading() {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClick = () => {
    setIsLoading(true);

    setTimeout(() => {
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
        <Button loading />
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
        <Button icon={<Power />} loading={isLoading} onClick={handleClick} />
      </div>
    </div>
  );
}
