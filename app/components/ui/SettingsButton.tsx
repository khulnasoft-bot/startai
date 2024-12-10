import { memo } from 'react';
import { IconButton } from '~/components/ui/IconButton';

interface SettingsButtonProps {
  onClick: () => void;
}

export const SettingsButton = memo(({ onClick }: SettingsButtonProps) => {
  return (
    <IconButton
      onClick={onClick}
      icon="i-ph:gear"
      size="xl"
      title="Settings"
      className="text-[#666] hover:text-startgpt-elements-textPrimary hover:bg-startgpt-elements-item-backgroundActive/10 transition-colors"
    />
  );
});