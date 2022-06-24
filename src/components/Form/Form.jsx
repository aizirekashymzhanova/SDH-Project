import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.scss";

const initValues = {
  first_name: "",
  last_name: "",
  birth_date: "",
  gender: "male",
  job: "",
  biography: "",
  is_active: false,
};

const Form = ({ saveValues, contactForEdit, oneContact, getOneContact }) => {
  const [inpValues, setInpValues] = useState(initValues);
  const { id } = useParams();

  useEffect(() => {
    if (contactForEdit) {
      getOneContact(id);
    }
  }, []);
  useEffect(() => {
    if (contactForEdit && oneContact) {
      setInpValues(oneContact);
    }
  }, [oneContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      ...inpValues,
    };
    console.log(obj);
    saveValues(obj);
  };

  return (
    <div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form_label_input">
          <label className="form_labels">First Name</label>
          <input
            className="form_input"
            name="first_name"
            value={inpValues.first_name}
            onChange={(e) =>
              setInpValues({ ...inpValues, first_name: e.target.value })
            }
            maxLength="256"
            required
          />
        </div>
        <div className="form_label_input">
          <label className="form_labels">Last Name</label>
          <input
            className="form_input"
            name="last_name"
            value={inpValues.last_name}
            onChange={(e) =>
              setInpValues({ ...inpValues, last_name: e.target.value })
            }
            maxLength="256"
            required
          />
        </div>
        <div className="form_label_input">
          <label className="form_labels">Birth Date</label>
          <input
            className="form_input date"
            id="date"
            type="date"
            name="birth_date"
            value={inpValues.birth_date}
            onChange={(e) =>
              setInpValues({ ...inpValues, birth_date: e.target.value })
            }
            required
          />
        </div>
        <div className="form_label_input">
          <label className="form_labels">Gender</label>
          <select
            className="form_input"
            name="gender"
            value={inpValues.gender}
            onChange={(e) =>
              setInpValues({ ...inpValues, gender: e.target.value })
            }
            required
          >
            <option value={"male"}>male</option>
            <option value={"female"}>female</option>
          </select>
        </div>
        <div className="form_label_input">
          <label className="form_labels">Job</label>
          <input
            className="form_input "
            name="job"
            value={inpValues.job}
            onChange={(e) =>
              setInpValues({ ...inpValues, job: e.target.value })
            }
            maxLength="256"
            required
          />
        </div>
        <div className="form_label_input">
          <label className="form_labels">Biography</label>
          <textarea
            className="form_input"
            name="biography"
            value={inpValues.biography}
            onChange={(e) =>
              setInpValues({ ...inpValues, biography: e.target.value })
            }
            maxLength="1024"
            required
          />
        </div>
        <div className="form_label_input">
          <label className="form_labels">Is active</label>
          <input
            typeof="boolean"
            className="active"
            type="checkbox"
            name="is_active"
            defaultChecked={inpValues.is_active}
            onChange={(e) => {
              setInpValues({ ...inpValues, is_active: e.target.checked });
            }}
          />
        </div>
        <button type="submit" className="add__newContact_btn">
          SAVE
        </button>
      </form>
    </div>
  );
};

export default Form;
