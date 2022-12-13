/**
 * @description this function takes care of seeing if the latest data is better than the second to last to congratulate the user.
 */
export default function UserData(props) {
  let userData = props.userData.userInfos.firstName;
  let sessionData = props.sessionsData.sessions;
  let ReportText = () => {
    if (sessionData[6].sessionLength >= sessionData[5].sessionLength) {
      return <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>;
    }
  };
  ReportText();
  return (
    <div className="userData">
      <h1>
        Bonjour <b>{userData}</b>
      </h1>
      <ReportText />
    </div>
  );
}
