import { FC } from "react";
import { FormFeeling } from "../../components/FormFeeling/FormFeeling";
import "./FormScreen.styles.css";

type CreateFeelingProps = {
  createFeeling:(feeling: Feeling) => void;
}

export const FormScreen: FC<CreateFeelingProps> = ({createFeeling}) => {
  return (
    <div className="formscreen_container">
        <img className="logo" src="src/assets/p1.png" alt="logo" />
      <h1 className="formscreen_title">Hey, how are you feeling today?</h1>
      <FormFeeling createFeeling={createFeeling}/>
    </div>
  );
};
