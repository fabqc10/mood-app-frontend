import { useEffect, useState } from "react";
import "./BoardScreen.styles.css";
import { httpGetFeelings } from "../../http";
import { CardFeeling } from "../../components/CardFeeling/CardFeeling";
export const BoardScreen = () => {
  const [feelings, setFeelings] = useState<Feeling[]>([]);
  useEffect(() => {
    let subscribed = true;

    httpGetFeelings().then((data) => {
      if (subscribed) {
        setFeelings(data);
      }
    });

    return () => {
      subscribed = false;
    };
  }, []);

  return (
    <div className="boardScreen_container">
      <h1 className="boardScreen_title">
        This is how you have been feeling lately...
      </h1>
      <div className="boardScreen_cards-container">
        {feelings.map((feeling: Feeling) => (
          <CardFeeling key={feeling.id} feeling={feeling} />
        ))}
      </div>
    </div>
  );
};
