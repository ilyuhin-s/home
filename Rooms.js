function Rooms() {
  return (
    <div className="section">
      <div className="rooms">
        <div className="rooms-title">Rooms</div>
        <div className="room-items">
          <div className="rooms-item rooms-item--active">
            Спальня
            <span className="material-icons">king_bed</span>
          </div>
          <div className="rooms-item">
            Кухня
            <span className="material-icons">restaurant</span>
          </div>
          <div className="rooms-item">
            Гостинная
            <span className="material-icons">weekend</span>
          </div>
          <div className="rooms-item">
            Ванная
            <span className="material-icons">clean_hands</span>
          </div>
          <div className="rooms-item">
            Коридор
            <span className="material-icons">door_front</span>
          </div>
        </div>
      </div>
    </div>
  );
}
