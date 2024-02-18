export const FriendList = props => {
    return (
        <ul className="friend-list">
        {/* Кількість li залежить від кількості об'єктів в масиві */}
        <li>
            <FriendListItem />
        </li>
    </ul>
    );
  };