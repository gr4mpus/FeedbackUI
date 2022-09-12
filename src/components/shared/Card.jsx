function Card({ children, reverse }) {
  // conditional class
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
  return (
    <div
      className="card"
      //   conditional styling
      style={{
        backgroundColor: reverse ? "rgba(0,0,0, 0.4)" : "#fff",
        color: reverse ? "#fff" : "rgba(0,0,0, 0.4)",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
