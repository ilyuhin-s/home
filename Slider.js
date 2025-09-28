function Slider() {
  const sliderRef = React.useRef(null);
  const [width, setWidth] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const isDraggingRef = React.useRef(isDragging);

  // Синхронизируем ref с состоянием
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
