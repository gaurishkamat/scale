const tagTypes = {
  beta: 'β',
  WIP: '🛠 WIP',
  deprecated: '⚰️ Deprecation notice',
};

const defaultMessages = {
  beta:
    'This component is currently in beta status. Some things may be refactored. Watch the change log for now.',
  WIP: `This component is currently under development and is prone to change. Please wait for its release.\nIt will be available in Storybook once it's finished and documented.`,
  deprecated: `This component is deprecated.`,
};

interface StatusInterface {
  tag?: string;
  extraMessage?: string;
  message?: string;
  source?: object | string;
}

export default function statusWarn({
  tag = 'WIP',
  extraMessage = null,
  message = null,
  source = null,
}: StatusInterface) {
  // tslint:disable-next-line
  console.warn(
    `%c scale – ${tagTypes[tag]} `,
    'background: #E20074; color: #FFF; border-radius: 4px',
    `\n\n${message ? message : defaultMessages[tag]} ${
      extraMessage ? '\n' + extraMessage : ''
    }
    `,
    source !== null ? '\nsource:' : '',
    // typeof source === 'object' ? '\n' : `\nsource: ${source}`,
    typeof source === 'object' ? source : `${source}`,
    source !== null ? '\n\n' : ''
  );
}
