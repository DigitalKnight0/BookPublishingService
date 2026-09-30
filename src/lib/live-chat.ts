declare global {
  interface Window {
    __lc?: {
      asyncInit?: boolean | (() => void);
    };
    LiveChatWidget?: {
      call: (method: string, ...args: unknown[]) => void;
      get?: (property: string) => unknown;
      on: (event: string, callback: (payload: unknown) => void) => void;
      once: (event: string, callback: (payload: unknown) => void) => void;
      off: (event: string, callback: (payload: unknown) => void) => void;
    };
  }
}

export function openLiveChat(email?: string, messageDraft?: string) {
  if (typeof window === "undefined") return;

  const connect = (attempt = 0) => {
    const widget = window.LiveChatWidget;

    if (!widget) {
      if (attempt < 100) {
        window.setTimeout(() => connect(attempt + 1), 100);
      }
      return;
    }

    const open = () => {
      if (email) widget.call("set_customer_email", email);

      widget.call("maximize");

      if (messageDraft) {
        window.setTimeout(() => {
          widget.call("maximize", { messageDraft });
        }, 50);
      }
    };

    widget.once("ready", open);
  };

  connect();
}
