import { CSSProperties, useEffect, useRef } from "react";

export const AnimatedGradientBorderTW: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxElement = boxRef.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);

  return (
    <div
      ref={boxRef}
      style={
        {
          "--angle": "0deg",
          "--border-color":
            "linear-gradient(var(--angle), rgba(239,123,173,0.3) 11.2%, rgba(128,162,245,1) 91.1%)",
          "--bg-color": "white",
        } as CSSProperties
      }
      className={`relative flex w-full bg-[var(--bg-color)] rounded-lg border-2 border-transparent cursor-pointer ${className}`}
    >
      <div
        className="absolute inset-0 rounded-lg border border-transparent [mask-image:linear-gradient(white,white)]
       [border-image-source:var(--border-color)] [border-image-slice:1] pointer-events-none"
      ></div>
      {children}
    </div>
  );
};
