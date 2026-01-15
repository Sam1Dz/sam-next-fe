import { Button } from '~/components/ui/button';

export function ButtonVariant() {
  return (
    <div className="flex flex-col gap-2">
      <p>Variant</p>
      <div className="flex flex-row gap-2">
        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  );
}
