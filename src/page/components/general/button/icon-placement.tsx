'use client';

import type { ButtonProps } from '~/components/ui/button';

import { LucideSearch } from 'lucide-react';
import React from 'react';

import { Button } from '~/components/ui/button';
import { ButtonGroup } from '~/components/ui/button/group';
import { Separator } from '~/components/ui/separator';

export function ButtonIconPlacement() {
  const [placement, setPlacement] =
    React.useState<ButtonProps['iconPlacement']>('start');

  return (
    <div className="flex flex-col gap-2">
      <p>Icon Placement</p>
      <ButtonGroup size="sm">
        <Button
          variant={placement === 'start' ? 'default' : 'outline'}
          onClick={() => setPlacement('start')}
        >
          Start
        </Button>
        <Button
          variant={placement === 'end' ? 'default' : 'outline'}
          onClick={() => setPlacement('end')}
        >
          End
        </Button>
      </ButtonGroup>

      <Separator className="my-2" />

      <div className="flex flex-row gap-2">
        <Button className="rounded-full" icon={<LucideSearch />} />
        <Button className="rounded-full" icon="A" />
        <Button icon={<LucideSearch />} iconPlacement={placement}>
          Search
        </Button>
        <Button
          className="rounded-full"
          icon={<LucideSearch />}
          iconPlacement={placement}
          variant="outline"
        />
        <Button icon={<LucideSearch />} variant="outline">
          Search
        </Button>
      </div>

      <div className="flex flex-row gap-2">
        <Button
          className="rounded-full"
          icon={<LucideSearch />}
          variant="outline"
        />
        <Button
          icon={<LucideSearch />}
          iconPlacement={placement}
          variant="outline"
        >
          Search
        </Button>
        <Button
          className="rounded-full"
          icon={<LucideSearch />}
          variant="destructive"
        />
        <Button
          icon={<LucideSearch />}
          iconPlacement={placement}
          variant="destructive"
        >
          Search
        </Button>
        <Button icon={<LucideSearch />} variant="outline" />
      </div>
    </div>
  );
}
