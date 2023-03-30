const avatar = document.getElementById("avatar");
const username = document.getElementById("name");
const text = document.getElementById("exampleFormControlTextarea1");
const resultDiv = document.querySelector("div.result");

function checkSpam() {
  let containerInf = document.createElement("div");
  containerInf.className = `information`;
  resultDiv.appendChild(containerInf);

  //Аватар
  const myImage = new Image();
  if (avatar.value != false) {
    myImage.src = avatar.value;
  } else {
    let userAvatar = Math.floor(Math.random() * 7) + 1;
    myImage.src =
      userAvatar === 1
        ? "https://i.pinimg.com/564x/bb/ac/4c/bbac4c4c79f1c1e7197b8c9c0203ca79.jpg"
        : userAvatar === 2
        ? "https://i.pinimg.com/564x/ff/f2/fe/fff2fe0cb9a1062e980723733fa2d515.jpg"
        : userAvatar === 3
        ? "https://i.pinimg.com/564x/c3/4e/d3/c34ed37c9b1e5ab183e8e9346534ae6b.jpg"
        : userAvatar === 4
        ? "https://i.pinimg.com/564x/a3/a9/01/a3a901c62abec69c4de4154f92f8ed6a.jpg"
        : userAvatar === 5
        ? "https://i.pinimg.com/564x/f4/e1/bb/f4e1bb55f60c0dc64f53397e6916774a.jpg"
        : userAvatar === 6
        ? "https://i.pinimg.com/564x/b0/58/9e/b0589e933d7b6dd89af7477b851ab7ec.jpg"
        : "https://i.pinimg.com/564x/36/3a/06/363a0676fc8b118b7562dba701469485.jpg";
  }
  containerInf.appendChild(myImage);

  //Имя
  let checkbox = document.getElementById("box");
  if (checkbox.checked) {
    const name = username.value.trim().toLowerCase();
    function capitalize(name) {
      return name.replace(/(^|\s)\S/g, function (a) {
        return a.toUpperCase();
      });
    }
    let finalName = document.createElement("div");
    finalName.textContent = ` ${capitalize(name)}`;
    containerInf.appendChild(finalName);
  } else {
    let finalName = document.createElement("div");
    finalName.textContent = `Username`;
    containerInf.appendChild(finalName);
  }

  //Дата
  let option = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  let finaldate = document.createElement("div");
  finaldate.textContent = new Date().toLocaleDateString("ru", option);
  containerInf.appendChild(finaldate);

  //Комментрайи
  const comment = text.value;
  let comment1 = comment.replace(/viagra/gi, "***");
  let comment2 = comment1.replace(/XXX/gi, "***");
  let finalComment = document.createElement("div");
  finalComment.className = "alert";
  finalComment.textContent = comment2;
  resultDiv.appendChild(finalComment);
}
