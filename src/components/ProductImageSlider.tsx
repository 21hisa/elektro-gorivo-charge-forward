import { useState, useRef, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: { src: string; alt: string }[];
  className?: string;
  imgClassName?: string;
  showDots?: boolean;
  showArrows?: boolean;
};

export function ProductImageSlider({
  images,
  className = "",
  imgClassName = "aspect-square w-full object-contain p-8",
  showDots = true,
  showArrows = true,
}: Props) {
  const [idx, setIdx] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = (dir: 1 | -1) =>
    setIdx((i) => (i + dir + images.length) % images.length);

  const onTouchStart = (e: TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${className}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${idx * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={img.src + i}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className={`shrink-0 ${imgClassName}`}
            style={{ width: "100%" }}
          />
        ))}
      </div>

      {showArrows && images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground opacity-0 backdrop-blur-md transition-all hover:bg-background group-hover:opacity-100 sm:left-4"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground opacity-0 backdrop-blur-md transition-all hover:bg-background group-hover:opacity-100 sm:right-4"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      {showDots && images.length > 1 && (
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                setIdx(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-electric" : "w-1.5 bg-foreground/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
