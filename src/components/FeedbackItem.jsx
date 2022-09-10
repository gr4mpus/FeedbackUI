import { useState } from "react";
function FeedbackItem() {
  let [rating, setRating] = useState(7);
  const [text, setText] = useState("This is an example of a feeback Item");
  const handleClick = () => {
    setRating((prev) => {
      return prev + 1;
    });
  };
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>Something</button>
    </div>
  );
}

export default FeedbackItem;