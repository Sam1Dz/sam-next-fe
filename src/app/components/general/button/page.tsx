import {
  ButtonIcon,
  ButtonIconPlacement,
  ButtonSize,
  ButtonVariant,
} from '~/view/components/general/button';

export default function Page() {
  return (
    <div className="flex flex-col gap-4 py-4">
      <ButtonVariant />
      <ButtonIcon />
      <ButtonIconPlacement />
      <ButtonSize />
    </div>
  );
}
