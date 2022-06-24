import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContactContext } from "../../contexts/ContactsContextProvider";
import "./User.scss";

const User = () => {
  const { id } = useParams();
  const { getOneContact, oneContact, deleteContact } = useContactContext();
  const navigate = useNavigate();
  useEffect(() => {
    getOneContact(id);
  }, []);

  return (
    <>
      {oneContact ? (
        <div className="user_details">
          <h1>Contact</h1> <br />
          <h3>
            {oneContact.first_name}
            <span className="last_name">{oneContact.last_name}</span>
          </h3>
          <br />
          <p>Date of birth: {oneContact.birth_date}</p> <br />
          <p>Gender: {oneContact.gender}</p> <br />
          <p>Job:{oneContact.job}</p> <br />
          <p>Biography:{oneContact.biography} </p> <br />
          <p>
            Active:
            {oneContact.is_active ? <span>ON</span> : <span>OFF</span>}
          </p>
          <br />
          <button
            className="action_btn"
            onClick={() => navigate(`/contact/edit/${oneContact.id}`)}
          >
            🖊️
          </button>
          <button
            className="action_btn"
            onClick={() => {
              deleteContact(oneContact);
            }}
          >
            ✖️
          </button>
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </>
  );
};

export default User;
