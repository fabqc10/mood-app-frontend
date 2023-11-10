import "./BoardScreen.styles.css";
import { CardFeeling } from "../../components/CardFeeling/CardFeeling";
import { FC } from "react";

type BoardScreenProps = {
    feelings: Feeling[];
    deleteFeeling: (id: string) => void;
}

export const BoardScreen: FC<BoardScreenProps> = ({feelings,deleteFeeling}) => {
  
  return (
    <div className="boardScreen_container">
      <h1 className="boardScreen_title">
        This is how you have been feeling lately...
      </h1>
      <div className="boardScreen_cards-container">
        {feelings.map((feeling: Feeling) => (
          <CardFeeling key={feeling.id} feeling={feeling} deleteFeeling={deleteFeeling}/>
        ))}
      </div>
    </div>
  );
};
