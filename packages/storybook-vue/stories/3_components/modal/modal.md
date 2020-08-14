# Modal

Modals help users focus their attention on a single task or piece of information. Therefore, modals are displayed as overlays on top of a page.

## General

### When to Use

**Immediate User Response Is Required**<br>
Use a modal dialog to request information that is preventing the system from continuing a user-initiated process.

**Notify the User of Urgent Information**<br>
Use a modal dialog to notify the user about urgent information concerning their current task. Modal dialogs are commonly used to report system errors or convey a consequence of a user’s action.

**Confirm a User Decision**<br>
Use a modal dialog to confirm user decisions. Clearly describe the action that is being confirmed and explain the potential consequences. Both title and button should indicate which action will occur. Never use a primary button if the action is destructive or irreversible.

## Elements

![Image Name](/assets/3_components/modal/image-20200812105039304.png)

### Title (1)

The modal must contain a title.

### Content (2)

The modal can hold all kinds of content. Once the modal reaches its maximum display height, the content starts scrolling.

#### Call To Action Bar (3)

The call to action bar features buttons relevant to the interaction. A primary button is used to proceeed with a positive action, a secondary button is used to cancel the action and close the modal— in addition to the x icon in the header. All buttons in the call to action bar have the same size. There is only one primary button, all other buttons are secondary.

#### Negative Actions

Use secondary buttons for negative actions like "delete" or "remove".

### Close Icon (4)

A click on the "close" icon will close the modal.

## Scrolling Modal

In the case of scrolling or as a custom option, an overlay on the action bar can be activated.

![Image Name](/assets/3_components/modal/image-20200812110102276.png)

## Sizes

On desktop, modals come in **S**, **L** and **XL**, spanning **6**, **8** or **12** columns respectively. On mobile, all modals become full width (**4** columns).

Select the modal size that best fits your use case and amount of content.

### Size S / 6 Columns (1)
### Size L / 8 Columns (2)
#### Size XL / 12 Columns (3)
### Mobile / 4 Columns (4)

![Image Name](/assets/3_components/modal/image-20200812212714272.png)

## Related Components

Alertbox, Global Notification

## Code
