const Notification = (props) => {
  const { className, name, url } = props;
  return (
    <li className={className}>
      <img src={url} />
      <p>{name}</p>
    </li>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <ul>
      <Notification
        className="box1"
        name="information-message"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="box2"
        name="Success-message"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="box1"
        name="Warning-message"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="box1"
        name="Error-message"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
