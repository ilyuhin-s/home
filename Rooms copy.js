function Rooms() {
  return (
    <div className="section">
      <div className="rooms">
        <div className="rooms-title">Rooms</div>
        <div className="room-items">
          <div className="rooms-item rooms-item--active">
            <span className="material-icons">king_bed</span>
            Спальня
          </div>
          <div className="rooms-item">
            <span className="material-icons">restaurant</span>
            Кухня
          </div>
          <div className="rooms-item">
            <span className="material-icons">weekend</span>
            Гостинная
          </div>
          <div className="rooms-item">
            <span className="material-icons">clean_hands</span>
            Ванная
          </div>
          <div className="rooms-item">
            <span className="material-icons">door_front</span>
            Коридор
          </div>
        </div>
      </div>
    </div>
  );
}
