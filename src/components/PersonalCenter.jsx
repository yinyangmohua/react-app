import React from 'react';

const PersonalCenter = () => {
  return (
    <div className="personal-center">
      <div className="profile-header">
        <h1>个人中心</h1>
      </div>
      <div className="profile-content">
        <div className="profile-section">
          <h2>个人信息</h2>
          <div className="info-item">
            <label>用户名：</label>
            <span>示例用户</span>
          </div>
          <div className="info-item">
            <label>邮箱：</label>
            <span>example@email.com</span>
          </div>
        </div>
        
        <div className="profile-section">
          <h2>我的统计</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>待办事项</h3>
              <span>0</span>
            </div>
            <div className="stat-item">
              <h3>已完成</h3>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCenter;