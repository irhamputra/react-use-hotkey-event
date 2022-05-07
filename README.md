# react-use-hotkey-event

> React Hotkeys Hook combine with React useEvent RFC (not yet in production)

[![NPM](https://img.shields.io/npm/v/react-use-hotkey-event.svg)](https://www.npmjs.com/package/react-use-hotkey-event) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-use-hotkey-event
```

## Usage

### Single Hotkeys

you can pass single array or a string

```tsx
import * as React from "react";

import { useHotkeys } from "react-use-hotkey-event";

const Example = () => {
  const [count, setCount] = React.useState(0);

  useMyHook(["ctrl+k"], () => {
    // execute code
    setCount((prev) => prev + 1);
  });

  return <div>{example}</div>;
};
```

### Multiple Hotkeys
add array to enable more hotkey
```tsx
import * as React from "react";

import { useHotkeys } from "react-use-hotkey-event";

const Example = () => {
  const [count, setCount] = React.useState(0);

  useMyHook(["ctrl+k", "shift+a"], () => {
    // execute code
    setCount((prev) => prev + 1);
  });

  return <div>{count}</div>;
};
```

## License

MIT © [irhamputra](https://github.com/irhamputra)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
