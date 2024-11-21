import * as Dialog from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const MyDialog = () => (
  <Dialog.Root>
    <Dialog.Trigger>Open Dialog</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="dialog-overlay" />
      <Dialog.Content className="dialog-content">
      <Dialog.Title>
        <VisuallyHidden>Title of the Dialog</VisuallyHidden>
        </Dialog.Title>
        <Dialog.Description>
          This is a description for the dialog content.
        </Dialog.Description>
        <button onClick={() => console.log('Close dialog')}>
          Close
        </button>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default MyDialog;
