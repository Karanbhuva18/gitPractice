import React from "react";
import "./usercard.css";
import { users } from "../constentData/index.js";

export default function UserCards() {
  return (
    <div className="user-cards-container">
      <h1 className="user-title">User Profiles</h1>
      <div className="user-cards-grid">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            {/* Profile Picture (Online Image) */}
            <div className="user-avatar">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="User Avatar"
              />
            </div>

            {/* Header - Name & ID */}
            <div className="user-card-header">
              <h2 className="user-card-title">{user.name}</h2>
              <p className="user-card-id">ID: {user.id}</p>
            </div>

            {/* User Details */}
            <div className="user-card-details">
              <p>
                <span className="label">💰 Income:</span> {user.salary}
              </p>
              <p>
                <span className="label">🏙 City:</span> {user.city}
              </p>
              <p>
                <span className="label">🌍 Country:</span> {user.country}
              </p>
              <p>
                <span className="label">📞 Phone:</span> {user.phone}
              </p>
              <p>
                <span className="label">🎓 Degree:</span> {user.degree}
              </p>
              <p>
                <span className="label">🏫 College:</span> {user.college}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
