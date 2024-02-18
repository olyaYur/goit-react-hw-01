
/*import { Product } from './Product';*/
import { Profile } from './Profile';
import {FriendList} from './FriendList';
/*
export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product name="Tacos With Lime"
               imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
               price={10.99}
      />
      <Product name="Fries and Burger"
               imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
               price={14.29}
      />
      <Product name="Fries and Burger"
                imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
                price={15.30}
      
      />
    </div>
  );
}
*/


const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};


export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};




const friends = [
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    name: "Mango",
    isOnline: true,
    id: 1812
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
    name: "Kiwi",
    isOnline: false,
    id: 1137
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
    name: "Ajax",
    isOnline: true,
    id: 1213
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
    name: "Jay",
    isOnline: true,
    id: 1714
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
    name: "Poly",
    isOnline: false,
    id: 1284
  }
];


const Appp = () => {
  return (
    <>
      <FriendList friends={friends} />
    </>
  );
};
