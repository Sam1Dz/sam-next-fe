import { Input } from '~/components/ui/input';

export function InputBasic() {
  return (
    <div className="max-w-xl">
      <p>Basic</p>
      <div className="mt-2 flex flex-row gap-2">
        <Input placeholder="Basic Input" />
      </div>
    </div>
  );
}
