import React from "react";
import "./usercard.css";
export default function UserCards() {
  const users = [
    {
      id: "U101",
      name: "John Doe",
      salary: "$70,000",
      city: "New York",
      country: "USA",
      phone: "+1 234 567 890",
      degree: "Bachelor of Computer Science",
      college: "MIT",
    },
    {
      id: "U102",
      name: "Jane Smith",
      salary: "$60,000",
      city: "Los Angeles",
      country: "USA",
      phone: "+1 987 654 321",
      degree: "Master of Data Science",
      college: "Stanford University",
    },
    {
      id: "U103",
      name: "Alice Johnson",
      salary: "$55,000",
      city: "Chicago",
      country: "USA",
      phone: "+1 456 789 123",
      degree: "Bachelor of Marketing",
      college: "University of Chicago",
    },
    {
      id: "U104",
      name: "Bob Williams",
      salary: "$80,000",
      city: "San Francisco",
      country: "USA",
      phone: "+1 321 654 987",
      degree: "Bachelor of Engineering",
      college: "UC Berkeley",
    },
    {
      id: "U105",
      name: "Bob Williams",
      salary: "$75,000",
      city: "Seattle",
      country: "USA",
      phone: "+1 123 456 789",
      degree: "MBA",
      college: "Harvard Business School",
    },
    {
      id: "U106",
      name: "Bob Williams",
      salary: "$65,000",
      city: "Austin",
      country: "USA",
      phone: "+1 987 654 210",
      degree: "Bachelor of Arts",
      college: "University of Texas",
    },
    {
      id: "U107",
      name: "Bob Williams",
      salary: "$58,000",
      city: "Dallas",
      country: "USA",
      phone: "+1 345 678 901",
      degree: "Bachelor of Design",
      college: "Parsons School of Design",
    },
    {
      id: "U108",
      name: "Bob Williams",
      salary: "$72,000",
      city: "Miami",
      country: "USA",
      phone: "+1 765 432 109",
      degree: "Master of Finance",
      college: "University of Miami",
    },
    {
      id: "U109",
      name: "Bob Williams",
      salary: "$68,000",
      city: "Denver",
      country: "USA",
      phone: "+1 456 123 789",
      degree: "Bachelor of Science",
      college: "University of Colorado",
    },
    {
      id: "U110",
      name: "Bob Williams",
      salary: "$66,000",
      city: "Phoenix",
      country: "USA",
      phone: "+1 789 456 123",
      degree: "Bachelor of Architecture",
      college: "Arizona State University",
    },
    {
      id: "U111",
      name: "Isabella Hernandez",
      salary: "$73,000",
      city: "Boston",
      country: "USA",
      phone: "+1 987 123 456",
      degree: "Master of Psychology",
      college: "Boston University",
    },
    {
      id: "U112",
      name: "Mason Lee",
      salary: "$69,000",
      city: "San Diego",
      country: "USA",
      phone: "+1 654 321 789",
      degree: "Bachelor of Physics",
      college: "UC San Diego",
    },
    {
      id: "U113",
      name: "Ava Clark",
      salary: "$62,000",
      city: "Portland",
      country: "USA",
      phone: "+1 543 210 987",
      degree: "Bachelor of Fine Arts",
      college: "Oregon State University",
    },
    {
      id: "U114",
      name: "Logan Lewis",
      salary: "$79,000",
      city: "Houston",
      country: "USA",
      phone: "+1 789 654 321",
      degree: "Master of Mechanical Engineering",
      college: "Rice University",
    },
    {
      id: "U115",
      name: "Mia Robinson",
      salary: "$67,000",
      city: "Philadelphia",
      country: "USA",
      phone: "+1 432 987 654",
      degree: "Bachelor of Nursing",
      college: "University of Pennsylvania",
    },
    {
      id: "U116",
      name: "Ethan Walker",
      salary: "$74,000",
      city: "San Jose",
      country: "USA",
      phone: "+1 678 543 210",
      degree: "Bachelor of Economics",
      college: "San Jose State University",
    },
    {
      id: "U117",
      name: "Charlotte Young",
      salary: "$71,000",
      city: "Atlanta",
      country: "USA",
      phone: "+1 321 678 543",
      degree: "Master of Education",
      college: "Emory University",
    },
    {
      id: "U118",
      name: "Elijah Adams",
      salary: "$63,000",
      city: "Nashville",
      country: "USA",
      phone: "+1 567 890 123",
      degree: "Bachelor of Music",
      college: "Vanderbilt University",
    },
    {
      id: "U119",
      name: "Amelia Scott",
      salary: "$78,000",
      city: "Charlotte",
      country: "USA",
      phone: "+1 890 123 456",
      degree: "Master of Public Health",
      college: "UNC Chapel Hill",
    },
    {
      id: "U120",
      name: "Benjamin Perez",
      salary: "$64,000",
      city: "Orlando",
      country: "USA",
      phone: "+1 123 456 789",
      degree: "Bachelor of Tourism",
      college: "University of Central Florida",
    },
  ];

  return (
    <div className="user-cards-grid">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h2 className="user-card-title">{user.name}</h2>
          <p className="user-card-id">ID: {user.id}</p>
          <div className="user-card-details">
            <p>
              <span className="label">Salary:</span> {user.salary}
            </p>
            <p>
              <span className="label">City:</span> {user.city}
            </p>
            <p>
              <span className="label">Country:</span> {user.country}
            </p>
            <p>
              <span className="label">Phone:</span> {user.phone}
            </p>
            <p>
              <span className="label">Degree:</span> {user.degree}
            </p>
            <p>
              <span className="label">College:</span> {user.college}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
