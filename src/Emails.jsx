import Email from "./Email";

function Emails(props) {
  return (
    <main className="emails">
      <ul>
        {props.filteredEmails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleRead={props.toggleRead}
            toggleStar={props.toggleStar}
            setSelectedEmail={props.setSelectedEmail}
          />
        ))}
      </ul>
    </main>
  );
}

export default Emails;
