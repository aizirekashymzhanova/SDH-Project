import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useContactContext } from "../../contexts/ContactsContextProvider";
import "./List.scss";

const List = () => {
  const { contacts, getContacts, deleteContact } = useContactContext();
  const navigate = useNavigate();
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div style={{ margin: " 0 auto" }}>
      <h1 style={{ marginLeft: "10px" }}>Contacts List</h1>
      <br />
      {contacts && contacts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birth Date</th>
              <th>Job</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td onClick={() => navigate(`/contact/${contact.id}`)}>
                  {contact.first_name}
                </td>
                <td>{contact.last_name}</td>
                <td>{contact.birth_date}</td>
                <td>{contact.job}</td>
                <td className="del-btn">
                  <button onClick={() => deleteContact(contact)}>✖️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>Loading</h2>
      )}
      <NavLink to="/add">
        <button className="add__newContact_btn">ADD NEW CONTACT</button>
      </NavLink>
    </div>
  );
};

export default List;
