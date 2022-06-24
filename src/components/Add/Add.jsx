import React from "react";

import { useContactContext } from "../../contexts/ContactsContextProvider";
import Form from "../Form/Form";

const Add = () => {
  const { addContact } = useContactContext();
  return (
    <div style={{ margin: " 0 auto" }}>
      <h2>ADD NEW CONTACT</h2>
      <br />
      <Form saveValues={addContact} compForEdit={false} />
    </div>
  );
};

export default Add;
