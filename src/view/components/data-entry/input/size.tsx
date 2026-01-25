import { User } from 'lucide-react';

import { Input } from '~/components/ui/input';

export function InputSize() {
  return (
    <div className="max-w-xl">
      <p>Size</p>
      <div className="mt-2 flex flex-col gap-2">
        <Input placeholder="Small Size" prefix={<User />} size="sm" />
        <Input placeholder="Default Size" prefix={<User />} />
        <Input placeholder="Large Size" prefix={<User />} size="lg" />
      </div>
    </div>
  );
}
