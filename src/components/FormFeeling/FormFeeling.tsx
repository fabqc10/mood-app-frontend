import { FC, useState } from "react";
import "./FormFeeling.styles.css";
import { httpPostFeeling } from "../../http";
import { useNavigate } from 'react-router-dom';

type FormFeelingProps = {
  createFeeling: (feeling: Feeling) => void;
}

const initialFormData: FeelingForm = {
    date:"",
    mood:"happy",
    description: "",
  };

export const FormFeeling: FC<FormFeelingProps> = ({createFeeling}) => {
    const [formData, setFormData] = useState<FeelingForm>(initialFormData);
    const navigate = useNavigate();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();

        const serverResponse = await httpPostFeeling(formData);
        const newFeeling = await serverResponse.json();
        createFeeling(newFeeling);
        setFormData(initialFormData);
        navigate("/myboard");

    }

  return (
      <form className="form_container" onSubmit={handleSubmit}>
        <label htmlFor="data">Date</label>
        <input type="date" name="date" id="" onChange={handleChange} value={formData.date}/>

        <label htmlFor="mood">Mood</label>
        <select
          name="mood"
            value={formData.mood}
            onChange={handleChange}
        >
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="angry">Angry</option>
          <option value="anxious">Anxious</option>
          <option value="calm">Calm</option>
          <option value="stressed">Stressed</option>
          <option value="excited">Excited</option>
          <option value="tired">Tired</option>
          <option value="energetic">Energetic</option>
          <option value="confident">Confident</option>
        </select>

        <label htmlFor="">Description</label>
        <input className="form_description" type="text" name="description" onChange={handleChange} value={formData.description}/>

        <button className="form_btn-submit" type="submit">Submit</button>
      </form>
  );
};
