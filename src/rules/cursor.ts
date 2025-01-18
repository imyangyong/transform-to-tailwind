export const cursor: [string, (((val: string) => string) | Record<string, string>)][] = [
  [
    'cursor',
    {
      'auto': 'cursor-auto',
      'default': 'cursor-default',
      'pointer': 'cursor-pointer',
      'wait': 'cursor-wait',
      'text': 'cursor-text',
      'move': 'cursor-move',
      'help': 'cursor-help',
      'not-allowed': 'cursor-not-allowed',
    },
  ],
  [
    'pointer-events',
    {
      none: 'pointer-events-none',
      auto: 'pointer-events-auto',
    },
  ],
]
