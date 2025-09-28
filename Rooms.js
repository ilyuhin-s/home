function Rooms() {
  return (
    <div className="section">
      <div className="groups">
        <div className="group group--active">All</div>
        <div className="group">Bedroom</div>
        <div className="group">Kitchen</div>
        <div className="group">Living room</div>
        {/* <div className="group">Bathroom</div> */}
        {/* <div className="group">Hallway</div> */}
      </div>
      <div className="rooms">
        <div className="rooms-title">Light on bedroom</div>
        <div className="room-items">
          <div className="rooms-item rooms-item--active">
            <span className="material-icons">wb_incandescent</span>
            Spotlights
          </div>
          <div className="rooms-item">
            <span className="material-icons">wb_iridescent</span>
            LED strip
          </div>
          <div className="rooms-item">
            <span className="material-icons">ac_unit</span>
            Air conditioner
          </div>
          <div className="rooms-item">
            <span className="material-icons">clean_hands</span>
            Bathroom
          </div>
          <div className="rooms-item">
            <span className="material-icons">door_front</span>
            Hollway
          </div>
        </div>
      </div>
    </div>
  );
}
