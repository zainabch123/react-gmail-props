function DisplaySelectedEmail(props) {
  return (
    <div className="displayed-email">
      <button
        onClick={() => {
          props.setSelectedEmail(null);
        }}
      >
        Back Button
      </button>
      <h1>{props.email.title}</h1>
      <h2>{props.email.sender}</h2>
    </div>
  );
}

export default DisplaySelectedEmail;
