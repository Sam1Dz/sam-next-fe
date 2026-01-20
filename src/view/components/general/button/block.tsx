import { Button } from '~/components/ui/button';

export function ButtonBlock() {
  return (
    <div className="max-w-lg">
      <p>Block</p>
      <div className="mt-2 flex flex-col gap-2">
        <Button block>Default</Button>
        <Button block variant="secondary">
          Secondary
        </Button>
        <Button block variant="outline">
          Outline
        </Button>
        <Button block variant="ghost">
          Ghost
        </Button>
        <Button block variant="destructive">
          Destructive
        </Button>
        <Button block variant="link">
          Link
        </Button>
      </div>
    </div>
  );
}
