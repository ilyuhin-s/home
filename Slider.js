function Slider() {
  const sliderRef = React.useRef(null);
  const [width, setWidth] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const isDraggingRef = React.useRef(isDragging);

  React.useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  const updateWidth = React.useCallback((clientX) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const rect = slider.getBoundingClientRect();
    const newWidth = Math.max(0, Math.min(rect.width, clientX - rect.left));
    setWidth(newWidth);
  }, []);

  // 👇 Эффект для обновления фона body
  React.useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const percent = (width / slider.offsetWidth) * 100; // 0–100%
    // Яркость: например, от 20% (тёмный) до 80% (светлый)
    const lightness = 20 + percent * 0.6; // 20 → 80 при 0% → 100%

    const gradient = `linear-gradient(
      180deg,
      #0044ff 0%,
      hsl(224, 100%, ${lightness}%) 40%,
      hsla(0, 0%, 0%, 1) 100%
    )`;

    document.body.style.background = gradient;
    document.body.style.backgroundSize = "100% 200px";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }, [width]);

  const handleMouseDown = React.useCallback(
    (e) => {
      setIsDragging(true);
      updateWidth(e.clientX);
    },
    [updateWidth]
  );

  const handleTouchStart = React.useCallback(
    (e) => {
      setIsDragging(true);
      updateWidth(e.touches[0].clientX);
    },
    [updateWidth]
  );

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDraggingRef.current) updateWidth(e.clientX);
    };

    const handleMouseUp = () => {
      if (isDraggingRef.current) setIsDragging(false);
    };

    const handleTouchMove = (e) => {
      if (isDraggingRef.current) updateWidth(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
      if (isDraggingRef.current) setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [updateWidth]);

  return (
    <div
      className={`slider ${isDragging ? "dragging" : ""}`}
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="slider-fill" style={{ width: `${width}px` }} />
      <div className="slider-thumb" style={{ left: `${width}px` }} />
    </div>
  );
}
