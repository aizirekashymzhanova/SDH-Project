import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { ACTIONS, API } from "../helpers/consts";

export const contactContext = createContext();

export const useContactContext = () => {
  return useContext(contactContext);
};

const INIT_STATE = {
  contacts: [],
  oneContact: false,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTIONS.GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload.data,
      };
    case ACTIONS.GET_ONE_CONTACT:
      return { ...state, oneContact: action.payload };
    default:
      return state;
  }
}

const ContactsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  const getContacts = async () => {
    try {
      let res = await axios.get(API);
      dispatch({
        type: ACTIONS.GET_CONTACTS,
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getOneContact = async (id) => {
    try {
      let { data } = await axios(`${API}/${id}`);
      dispatch({
        type: ACTIONS.GET_ONE_CONTACT,
        payload: data,
      });
    } catch (err) {
      alert(err);
    }
  };

  const addContact = async (newContact) => {
    try {
      await axios.post(API, newContact);
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  const deleteContact = async (contact) => {
    try {
      await axios.delete(`${API}/${contact.id}`);
      getContacts();
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  const saveEditedContact = async (editedContact) => {
    try {
      await axios.put(`${API}/${editedContact.id}`, editedContact);
      navigate("/");
      getContacts();
    } catch (err) {
      alert(err);
    }
  };
  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        oneContact: state.oneContact,
        getOneContact,
        getContacts,
        addContact,
        deleteContact,
        saveEditedContact,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};

export default ContactsContextProvider;
