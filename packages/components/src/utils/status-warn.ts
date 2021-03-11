const tagTypes = {
  alpha: 'α',
  beta: 'β',
  WIP: '🛠 WIP',
  deprecated: 'Deprecation notice',
};

const defaultMessages = {
  deprecated: `This component is deprecated.`,
  WIP: `This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.`,
};

export default function statusWarn({
  tag = 'WIP',
  extraMessage = null,
  message = null,
  source = null,
}) {
  // tslint:disable-next-line
  console.warn(
    `%c scale – ${tagTypes[tag]} `,
    'background: #E20074; color: #FFF; border-radius: 4px',
    `\n\n${message ? message : defaultMessages[tag]} ${
      extraMessage ? '\n' + extraMessage : ''
    } ${source ? '\n\nsource: ' + source : ''}

    `
  );
}
