import React from "react";
import "./usercard.css";
import { users } from "../constentData/index.js";
export default function UserCards() {
  return (
    <div className="user-cards-grid">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h2 className="user-card-title">{user.name}</h2>
          <p className="user-card-id">ID: {user.id}</p>
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
  );
}
