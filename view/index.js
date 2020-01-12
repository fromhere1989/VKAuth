const url = window.location.toString();
let from = url.search('=');
let to = url.search('&');
const token = window.location.toString().substring(from, to).slice(1);
localStorage.setItem(`token`, token);
console.log(localStorage.getItem("token"));

const script = document.createElement('SCRIPT');
script.src = `https://api.vk.com/method/users.get?access_token=${localStorage.getItem("token")}&v=5.103&callback=getUser`;
document.querySelector(".userInfo").appendChild(script);
function getUser(result) {
  let userName = result.response[0].first_name + " " + result.response[0].last_name;
  let name = document.createElement('p');
  name.className = 'newUser';
  name.innerHTML = userName;
  document.querySelector('.userInfo').append(name);
};

function FriendCard(name, count) {
  let friendName = document.createElement('p');
  friendName.className = `friend__card-N#${count}`;
  friendName.innerHTML = name;
  document.querySelector('.friend').append(friendName);
};

const friends = document.createElement('SCRIPT');
  friends.src = `https://api.vk.com/method/friends.get?order=hints&count=5&fields=nickname&access_token=${localStorage.getItem("token")}&v=5.103&callback=getFriends`;
  document.querySelector(".friend").appendChild(friends);
  function getFriends(result) {
    for (let i=0; i<result.response.items.length; i++) {
      let name = result.response.items[i].first_name + " " + result.response.items[i].last_name;
      let friend = new FriendCard(name, i+1)
    }
};
