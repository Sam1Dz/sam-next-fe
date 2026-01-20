'use client';

import React from 'react';

import { Button, type ButtonProps } from '~/components/ui/button';
import { ButtonGroup } from '~/components/ui/button/group';
import { Separator } from '~/components/ui/separator';

export function ButtonSize() {
  const [size, setSize] = React.useState<ButtonProps['size']>('default');

  return (
    <div className="flex flex-col gap-2">
      <p>Size</p>
      <ButtonGroup size="sm">
        <Button
          variant={size === 'lg' ? 'default' : 'outline'}
          onClick={() => setSize('lg')}
        >
          Large
        </Button>
        <Button
          variant={size === 'default' ? 'default' : 'outline'}
          onClick={() => setSize('default')}
        >
          Default
        </Button>
        <Button
          variant={size === 'sm' ? 'default' : 'outline'}
          onClick={() => setSize('sm')}
        >
          Small
        </Button>
      </ButtonGroup>
      <Separator className="my-2" />
      <div className="flex flex-row gap-2">
        <Button size={size}>Default</Button>
        <Button size={size} variant="secondary">
          Secondary
        </Button>
        <Button size={size} variant="outline">
          Outline
        </Button>
        <Button size={size} variant="ghost">
          Ghost
        </Button>
        <Button size={size} variant="destructive">
          Destructive
        </Button>
        <Button size={size} variant="link">
          Link
        </Button>
      </div>
    </div>
  );
}
