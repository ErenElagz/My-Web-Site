"use client";

import React, { useEffect, useReducer } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const SLIDE_DURATION = 4200; // 4.2 seconds
const TICK_INTERVAL = 50; // 50ms tick for fluid progress

const slides = [
  {
    title: "YoFi · Mobile App Store Showcase",
    tag: "yofi.dev",
    href: "https://yofi.dev",
    image:
      "https://cdn.dribbble.com/userupload/49131341/file/76ce95519be53234e05e467b52836cd8.png",
  },
  {
    title: "SectorOps · Industry-Specific Business OS",
    tag: "sectorops.com",
    href: "https://sectorops.com",
    image: "/sectorops-preview.png",
  },
  {
    title: "Belen App · AI & AR Tourism Assistant",
    tag: "TEKNOFEST Finalist",
    href: "#work",
    image: "/belen-preview.jpg",
  },
  {
    title: "AgroSphere · Autonomous Farming Robotics",
    tag: "TÜBİTAK 1812",
    href: "https://agrospheree.vercel.app/",
    image: "/agrosphere-preview.jpg",
  },
  {
    title: "CoreFound · CoFounder Community App",
    tag: "Play Store",
    href: "https://play.google.com/store/apps/details?id=com.corefound",
    image:
      "https://cdn.dribbble.com/userupload/46564852/file/4b9cc980085e894b9b0c5c7e34fe7c98.png",
  },
  {
    title: "YoFi.dev · Landing Page UI",
    tag: "Web Design",
    href: "https://dribbble.com/shots/27750603-Yofi-dev-Mobile-App-Landing-Page-Design",
    image:
      "https://cdn.dribbble.com/userupload/49094121/file/e0100f860e4e9fbb71db101550f6e04a.png",
  },
];

type CarouselStatus = "playing" | "paused" | "hovered";

interface CarouselState {
  index: number;
  progress: number;
  status: CarouselStatus;
}

type CarouselAction =
  | { type: "TICK"; step: number; total: number }
  | { type: "NEXT"; total: number }
  | { type: "PREV"; total: number }
  | { type: "GO_TO"; index: number }
  | { type: "TOGGLE_PLAY_PAUSE" }
  | { type: "MOUSE_ENTER" }
  | { type: "MOUSE_LEAVE" };

function carouselReducer(state: CarouselState, action: CarouselAction): CarouselState {
  switch (action.type) {
    case "TICK": {
      if (state.status !== "playing") return state;
      const nextProgress = state.progress + action.step;
      if (nextProgress >= 100) {
        return {
          ...state,
          index: (state.index + 1) % action.total,
          progress: 0,
        };
      }
      return {
        ...state,
        progress: nextProgress,
      };
    }
    case "NEXT": {
      return {
        ...state,
        index: (state.index + 1) % action.total,
        progress: 0,
      };
    }
    case "PREV": {
      return {
        ...state,
        index: (state.index - 1 + action.total) % action.total,
        progress: 0,
      };
    }
    case "GO_TO": {
      return {
        ...state,
        index: action.index,
        progress: 0,
      };
    }
    case "TOGGLE_PLAY_PAUSE": {
      return {
        ...state,
        status: state.status === "paused" ? "playing" : "paused",
      };
    }
    case "MOUSE_ENTER": {
      if (state.status === "playing") {
        return { ...state, status: "hovered" };
      }
      return state;
    }
    case "MOUSE_LEAVE": {
      if (state.status === "hovered") {
        return { ...state, status: "playing" };
      }
      return state;
    }
    default:
      return state;
  }
}

export default function HeroPreview() {
  const [state, dispatch] = useReducer(carouselReducer, {
    index: 0,
    progress: 0,
    status: "playing",
  });

  const isPaused = state.status === "paused";

  // Single ticker effect - only active when playing
  useEffect(() => {
    if (state.status !== "playing") return;

    const step = (TICK_INTERVAL / SLIDE_DURATION) * 100;
    const timer = setInterval(() => {
      dispatch({ type: "TICK", step, total: slides.length });
    }, TICK_INTERVAL);

    return () => clearInterval(timer);
  }, [state.status]);

  // Keyboard navigation for carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      dispatch({ type: "NEXT", total: slides.length });
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      dispatch({ type: "PREV", total: slides.length });
    } else if (e.key === " " && e.target === e.currentTarget) {
      e.preventDefault();
      dispatch({ type: "TOGGLE_PLAY_PAUSE" });
    }
  };

  const current = slides[state.index];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Highlighted Projects Carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => dispatch({ type: "MOUSE_ENTER" })}
      onMouseLeave={() => dispatch({ type: "MOUSE_LEAVE" })}
      data-state={state.status}
      data-active-index={state.index}
      data-total-slides={slides.length}
      data-progress={Math.round(state.progress)}
      className="relative overflow-hidden rounded-[28px] border border-border bg-surface-subtle p-3 sm:p-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
    >
      {/* Live Preview Screen with smooth crossfade */}
      <a
        href={current.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-border bg-surface"
      >
        {slides.map((s, i) => (
          <div
            key={s.title}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === state.index
                ? "z-10 opacity-100"
                : "pointer-events-none z-0 opacity-0"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              priority={i === 0}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/95 via-black/70 via-50% to-transparent px-5 pb-5 pt-24 text-white sm:px-6 sm:pb-6">
              <div className="space-y-1.5">
                <span className="inline-block rounded-full bg-white/20 px-3 py-0.5 font-mono text-xs font-medium backdrop-blur-md">
                  {s.tag}
                </span>
                <p className="text-base font-semibold tracking-tight sm:text-lg">
                  {s.title}
                </p>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/25 backdrop-blur-md transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                <Icon
                  icon="lucide:arrow-up-right"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
        ))}
      </a>

      {/* Segmented Timeline & Controls (Minimalist Slim Bars on Same Row) */}
      <div className="mt-3 flex items-center gap-2.5 px-0.5">
        {/* 6 Slim Segmented Progress Bars */}
        <div className="grid flex-1 grid-cols-6 gap-1.5" role="tablist" aria-label="Slides">
          {slides.map((s, i) => {
            const isActive = i === state.index;
            const isPast = i < state.index;
            return (
              <button
                key={s.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                data-state={isActive ? "active" : "inactive"}
                onClick={() => dispatch({ type: "GO_TO", index: i })}
                aria-label={`Jump to slide ${i + 1}: ${s.title}`}
                className="group relative flex py-2 text-left focus:outline-none"
              >
                {/* Progress Track (slim & clean) */}
                <div className="relative h-[2.5px] w-full overflow-hidden rounded-full bg-border transition-colors group-hover:bg-border-hover">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-accent"
                    style={{
                      width: isActive ? `${state.progress}%` : isPast ? "100%" : "0%",
                      transition: isActive ? "width 50ms linear" : "none",
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Prev / Play / Next Controls on the same line */}
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            onClick={() => dispatch({ type: "TOGGLE_PLAY_PAUSE" })}
            data-state={isPaused ? "paused" : "playing"}
            aria-label={isPaused ? "Play autoplay" : "Pause autoplay"}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition-colors hover:border-border-hover hover:text-text-primary"
            title={isPaused ? "Resume autoplay" : "Pause autoplay"}
          >
            <Icon
              icon={isPaused ? "lucide:play" : "lucide:pause"}
              className="h-2.5 w-2.5"
              aria-hidden="true"
            />
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "PREV", total: slides.length })}
            aria-label="Previous slide"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition-colors hover:border-border-hover hover:text-text-primary"
            title="Previous slide"
          >
            <Icon icon="lucide:chevron-left" className="h-3 w-3" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: "NEXT", total: slides.length })}
            aria-label="Next slide"
            className="flex h-6 w-6 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition-colors hover:border-border-hover hover:text-text-primary"
            title="Next slide"
          >
            <Icon icon="lucide:chevron-right" className="h-3 w-3" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
