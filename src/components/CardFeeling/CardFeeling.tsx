import { FC } from "react";
import "./CardFeeling.styles.css";
import { httpDeleteFeeling } from "../../http";

type CardFeelingProps = {
  feeling: Feeling;
  deleteFeeling: (id: string) => void;
};

const generateIcon = (mood: string) => {
  switch (mood) {
    case "happy":
      return "😁";
    case "sad":
      return "😥";
    case "angry":
        return "😠";
    case "anxious":
        return "😰"
    case "calm":
        return "😌";
    case "stressed":
        return "😟"
    case "excited":
        return "🤩";
    case "tired":
        return "😫";
    case "energetic":
        return "💪"
    case "confident":
        return "😎";
  }
};

function formatDateString(dateString: string) {
    const options:any = { weekday: 'long', day: 'numeric', month: 'short' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }

export const CardFeeling: FC<CardFeelingProps> = ({ feeling,deleteFeeling }) => {

  const handleDelete = async (id: string) => {
    const serverResponse = await httpDeleteFeeling(id);

    if (!serverResponse.ok) {
      const responseText = await serverResponse.text();
      throw new Error(`Server response: ${responseText}`);
    }

    const feelingDeleted = await serverResponse.json();
    deleteFeeling(feelingDeleted.id);
  };

  return (
    <div className="cardFeeling_container">
      <p className="cardFeeling_btn-delete" onClick={()=>handleDelete(feeling.id)}>X</p>
      <p className="cardFeeling_icon">{generateIcon(feeling.mood)}</p>
      <p className="cardFeeling_date">{formatDateString(feeling.date)}</p>
      <p className="cardFeeling_mood">{feeling.mood}</p>
      <p className="cardFeeling_description">{feeling.description}</p>
    </div>
  );
};
