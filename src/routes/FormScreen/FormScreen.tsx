import { FormFeeling } from "../../components/FormFeeling/FormFeeling";
import "./FormScreen.styles.css";

export const FormScreen = () => {
  return (
    <div className="formscreen_container">
        <img className="logo" src="src/assets/p1.png" alt="logo" />
      <h1 className="formscreen_title">Hey, how are you feeling today?</h1>
      <FormFeeling />
    </div>
  );
};
