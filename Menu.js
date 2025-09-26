function Menu() {
  const { HomeOutlined, SettingOutlined, UsergroupAddOutlined } = icons;

  return (
    <div className="menu">
      <div className="menu-item">
        <HomeOutlined />
      </div>
      <div className="menu-item">
        <UsergroupAddOutlined />
      </div>
      <div className="menu-item">
        <SettingOutlined />
      </div>
    </div>
  );
}
