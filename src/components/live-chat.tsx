"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const promoArtwork = "/assets/figma/livechat-promo/author-chat-promo.svg";

export function LiveChat() {
  const [isPromoVisible, setIsPromoVisible] = useState(false);

  useEffect(() => {
    let openDelay: number | undefined;

    const openChat = () => {
      const widget = window.LiveChatWidget;
      if (!widget) return;

      openDelay = window.setTimeout(() => {
        widget.call("maximize");
      }, 1000);
    };

    if (window.LiveChatWidget) {
      openChat();
    }

    const handleChatTrigger = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const trigger = event.target.closest<HTMLElement>("[data-live-chat]");
      if (!trigger) return;

      event.preventDefault();
      window.LiveChatWidget?.call("maximize");
    };

    document.addEventListener("click", handleChatTrigger);

    return () => {
      if (openDelay) window.clearTimeout(openDelay);
      document.removeEventListener("click", handleChatTrigger);
    };
  }, []);

  useEffect(() => {
    let promoDelay: number | undefined;
    let statePoll: number | undefined;
    let readyFallback: number | undefined;
    let lastVisibility: string | undefined;

    const syncVisibility = (payload: unknown) => {
      let visibility: unknown = payload;

      if (payload && typeof payload === "object") {
        const data = payload as {
          visibility?: unknown;
          state?: { visibility?: unknown };
          data?: { visibility?: unknown };
        };
        visibility =
          data.visibility ?? data.state?.visibility ?? data.data?.visibility;
      }

      if (typeof visibility !== "string") return;

      lastVisibility = visibility;

      if (visibility === "minimized") {
        if (!promoDelay) {
          promoDelay = window.setTimeout(() => {
            setIsPromoVisible(true);
            promoDelay = undefined;
          }, 250);
        }
        return;
      }

      if (visibility !== "maximized" && visibility !== "hidden") return;

      if (promoDelay) {
        window.clearTimeout(promoDelay);
        promoDelay = undefined;
      }
      setIsPromoVisible(false);
    };

    const handleReady = (payload: unknown) => {
      syncVisibility(payload);

      try {
        syncVisibility(window.LiveChatWidget?.get?.("state"));
      } catch {
        // The state getter is unavailable until LiveChat finishes loading.
      }
    };

    const handleVisibilityChanged = (payload: unknown) => {
      syncVisibility(payload);
    };

    window.LiveChatWidget?.on("ready", handleReady);
    window.LiveChatWidget?.on("visibility_changed", handleVisibilityChanged);

    const readCurrentState = () => {
      try {
        syncVisibility(window.LiveChatWidget?.get?.("state"));
      } catch {
        // Keep waiting for the asynchronously loaded widget.
      }

      statePoll = window.setTimeout(readCurrentState, 300);
    };

    readCurrentState();

    readyFallback = window.setTimeout(() => {
      if (!lastVisibility) setIsPromoVisible(true);
    }, 2500);

    return () => {
      if (promoDelay) window.clearTimeout(promoDelay);
      if (statePoll) window.clearTimeout(statePoll);
      if (readyFallback) window.clearTimeout(readyFallback);
      window.LiveChatWidget?.off("ready", handleReady);
      window.LiveChatWidget?.off(
        "visibility_changed",
        handleVisibilityChanged,
      );
    };
  }, []);

  return (
    <>
      {isPromoVisible ? (
        <button
          type="button"
          data-live-chat
          aria-label="Open live chat"
          className="livechat-promo fixed right-[3.625rem] bottom-14 z-[2147483646] block w-[10rem] cursor-pointer border-0 bg-transparent p-0 drop-shadow-[0_10px_14px_rgba(2,48,71,.18)] md:right-14 md:bottom-12 md:w-[11.5rem] lg:right-12 lg:bottom-14 lg:w-[12.5rem]"
        >
          <Image
            src={promoArtwork}
            alt="An author reading a book"
            width={304}
            height={335}
            sizes="(max-width: 767px) 160px, (max-width: 1023px) 184px, 200px"
            className="h-auto w-full"
          />
        </button>
      ) : null}

      <noscript>
        <a href="https://www.livechat.com/chat-with/19839776/" rel="nofollow">
          Chat with us
        </a>
        , powered by{" "}
        <a
          href="https://www.livechat.com/?welcome"
          rel="noopener nofollow"
          target="_blank"
        >
          LiveChat
        </a>
      </noscript>
    </>
  );
}
