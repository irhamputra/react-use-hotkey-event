import * as React from "react";
import useEvent from "react-use-event-hook";

const useHotKeys = (_ = "", cb: Function) => {
  if (typeof cb !== "function") throw new Error("Missing Callback");
  const [keysAvailable, setKeysAvailable] = React.useState({});

  const onKeyDown = useEvent((e: KeyboardEvent) => {
    setKeysAvailable((prev) => ({ ...prev, [e.key.toLowerCase()]: true }));
  });

  const onKeyUp = useEvent(() => {
    // TODO: specific hotkeys for Mac or Win
    console.log({ keysAvailable });

    setTimeout(() => {
      setKeysAvailable({});
    }, 1500);
  });

  React.useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [onKeyDown, onKeyUp]);
};

export default useHotKeys;
