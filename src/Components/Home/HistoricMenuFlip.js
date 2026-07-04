import React, { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";

const FlipPage = forwardRef(({ children, className = "" }, ref) => {
  return (
    <div className={`flip-page ${className}`} ref={ref}>
      {children}
    </div>
  );
});

function HistoricMenuFlip({ onNavigate }) {
  return (
    <div className="historic-flip-wrap">
      <HTMLFlipBook
        width={360}
        height={520}
        size="stretch"
        minWidth={300}
        maxWidth={430}
        minHeight={430}
        maxHeight={620}
        showCover={true}
        mobileScrollSupport={true}
        className="historic-flip-book"
      >
        <FlipPage className="historic-cover-page">
          <h2>Taste of the Himalayas</h2>
          <p>Historic Sonoma Menu</p>
          <span>Turn the page</span>
        </FlipPage>

        <FlipPage>
          <h3>See Today’s Menu</h3>
          <button onClick={() => onNavigate("/lunch-menu")}>Lunch Menu</button>
          <button onClick={() => onNavigate("/dinner-menu")}>Dinner Menu</button>
          <button onClick={() => onNavigate("/to-go-menu")}>To-Go Menu</button>
        </FlipPage>
      </HTMLFlipBook>
    </div>
  );
}

export default HistoricMenuFlip;