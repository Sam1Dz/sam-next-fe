import { MoreHorizontalIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { ButtonGroup } from '~/components/ui/button/group';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';

export function ButtonMultiple() {
  return (
    <div className="flex flex-col gap-2">
      <p>Multiple Buttons</p>
      <div className="flex flex-row gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <ButtonGroup>
          <Button variant="outline">Actions</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button icon={<MoreHorizontalIcon />} variant="outline" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
              <DropdownMenuItem>1st item</DropdownMenuItem>
              <DropdownMenuItem>2nd item</DropdownMenuItem>
              <DropdownMenuItem>3rd item</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </ButtonGroup>
      </div>
    </div>
  );
}
