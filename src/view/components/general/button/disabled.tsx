import { Button } from '~/components/ui/button';

export function ButtonDisabled() {
  return (
    <div className="flex flex-col gap-2">
      <p>Disabled</p>
      <div className="flex flex-row gap-2">
        <Button disabled>Default</Button>
        <Button disabled variant="secondary">
          Secondary
        </Button>
        <Button disabled variant="outline">
          Outline
        </Button>
        <Button disabled variant="ghost">
          Ghost
        </Button>
        <Button disabled variant="destructive">
          Destructive
        </Button>
        <Button disabled variant="link">
          Link
        </Button>
      </div>
    </div>
  );
}
