import React from "react";

import { useNavigate } from "react-router-dom";

import { useContactContext } from "../../contexts/ContactsContextProvider";
import Form from "../Form/Form";

const Edit = () => {
  const navigate = useNavigate();
  const { oneContact, getOneContact, saveEditedContact } = useContactContext();
  return (
    <div style={{ textAlign: "center", margin: " 0 auto" }}>
      <h1>Edit Contact</h1>
      <br />
      <Form
        saveValues={saveEditedContact}
        contactForEdit={true}
        oneContact={oneContact}
        getOneContact={getOneContact}
      />
    </div>
  );
};

export default Edit;
