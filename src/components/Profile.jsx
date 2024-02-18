/*
Необхідно створити компонент <Profile>, за допомогою
якого ми могли б відображати інформацію про користувача соціальної мережі.
*/

/*
        name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
*/
/*
name — ім'я користувача
tag — тег в соціальній мережі без @
location — місто і країна
image — посилання на зображення
stats — об'єкт з інформацією про активності
*/




export const Profile = props => {
    return (
    <div className="profile">
        <div className="description">
          <img
            src={props.image}
            alt="User avatar"
            className="avatar"
          />
          <p className="name">{props.name}</p>
          <p className="tag">{props.tag}</p>
          <p className="location">{props.location}</p>
        </div>
      
      
        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="value">{props.stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="value">{props.stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="value">{props.stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  };
 