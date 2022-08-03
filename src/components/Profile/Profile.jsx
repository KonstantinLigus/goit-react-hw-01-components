export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <div>
        <img src={avatar} alt={username} />
        <p></p>
        <p></p>
        <p></p>
      </div>
      <ul>
        <li>
          <span></span>
          <span></span>
        </li>
        <li>
          <span></span>
          <span></span>
        </li>
        <li>
          <span></span>
          <span></span>
        </li>
      </ul>
    </>
  );
};
