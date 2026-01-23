'use client';

import { LucideSearch } from 'lucide-react';

import { Button } from '~/components/ui/button';

export function ButtonIcon() {
  return (
    <div className="flex flex-col gap-2">
      <p>Icon</p>
      <div className="flex flex-row gap-2">
        <Button
          aria-label="Search"
          className="rounded-full"
          icon={<LucideSearch />}
        />
        <Button aria-label="Sort by A" className="rounded-full" icon="A" />
        <Button icon={<LucideSearch />}>Search</Button>
        <Button
          aria-label="Search"
          className="rounded-full"
          icon={<LucideSearch />}
          variant="outline"
        />
        <Button icon={<LucideSearch />} variant="outline">
          Search
        </Button>
      </div>

      <div className="flex flex-row gap-2">
        <Button
          aria-label="Search"
          className="rounded-full"
          icon={<LucideSearch />}
          variant="outline"
        />
        <Button icon={<LucideSearch />} variant="outline">
          Search
        </Button>
        <Button
          aria-label="Delete"
          className="rounded-full"
          icon={<LucideSearch />}
          variant="destructive"
        />
        <Button icon={<LucideSearch />} variant="destructive">
          Search
        </Button>
        <Button aria-label="Search" icon={<LucideSearch />} variant="outline" />
      </div>
    </div>
  );
}
