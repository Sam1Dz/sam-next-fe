import {
  ButtonBlock,
  ButtonDisabled,
  ButtonIcon,
  ButtonIconPlacement,
  ButtonLoading,
  ButtonMultiple,
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
      <ButtonDisabled />
      <ButtonLoading />
      <ButtonMultiple />
      <ButtonBlock />
    </div>
  );
}
