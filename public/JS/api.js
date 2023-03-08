// user Github
const gitUser = "https://api.github.com/users/";
const Contain = document.querySelector(".container");
const modalError = document.querySelector(".modal-error");
const User = document.querySelector(".user");

//fetch request
function GetUser(Username) {
  fetch(gitUser + `${Username}`)
    .then((res) => {
      return res.json();
    })

    .then((Data) => {
      console.log(Data);

      return (Contain.innerHTML = `
      <div class="profile-box">
      <div class="img-profile">
        <picture
          ><img
            style="width: 80px; height: 80px"
            src="${Data.avatar_url}"
            alt=""
        /></picture>
      </div>
      <div class="profile">
       <div>
        <h2 style="margin-bottom: 0;">${
          Data.name === null ? `${Data.login}` : Data.name
        }</h2>
        <h4  class="link-git" class="Id-user">@${Data.login}</h4>
      </div>

        <p> Joined ${Data.created_at.slice(0, 10)}</p>
      </div>
    </div>

   <div class="bio-profile">
      <p>${Data.bio === null ? "the user has no bio" : Data.bio}</p>
    </div>

     <div class="status">
      <div>
        <h3>repos</h3>
        <p>${Data.public_repos}</p>
      </div>
      <div>
        <h3>followers</h3>
        <p>${Data.followers}</p>
      </div>
      <div>
        <h3>following</h3>
        <p>${Data.following}</p>
      </div>
    </div>

    <div class="info-profile">
      <div>
        <i><img  src="/assets/map.png" alt="" /></i>
        <p>${Data.location === null ? "no location" : Data.location}</p>
      </div>
      <div>
        <i><img  src="/assets/social-media.png" alt="" /></i>
        <p>${
          Data.twitter_username === null
            ? "Not Available"
            : Data.twitter_username
        }</p>
      </div>
      <div>
        <i><img src="/assets/link.png" alt="" /></i>
        <a href="${Data.repos_url}">https://github/repos</a>
      </div>
      <div>
        <i><img src="/assets/github.png" alt="" /></i>
        <a href=" ${Data.html_url}">@github</a>
      </div>
    </div>
         `);
    })
    .catch((err) => {
      console.log("invalid " + err);
      modalError.style.display = "block";
      modalError.style.animationName = "error";
    });
}

//event keyboard ()=> executing function
window.addEventListener("keydown", (event) => {
  const isEnterKey = event.key === "Enter";
  if (isEnterKey & (User.value != "")) {
    GetUser(User.value);
  }
});

//disable => btn /// our execute fuction
const BtnSearch = document.querySelector(".btn-test");
function locateUser() {
  if (User.value == "") {
    BtnSearch.setAttribute("", "disabled");
  } else {
    BtnSearch.innerHTML = `<div class="loader"></div>`;
    setTimeout(() => {
      GetUser(User.value);
      BtnSearch.innerHTML = "Search";
    }, 2500);
  }
}

//RemoveError => modal
const input = document.querySelector(".user");
input.addEventListener("keydown", (event) => {
  if (event) {
    modalError.style.display = "none";
  }
});
