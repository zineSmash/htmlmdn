const myImage = document.querySelector("img");
const myButton = document.querySelector("#userChangeButton");
const myHeading = document.querySelector("h1");
const listItems = document.querySelectorAll('li');

/// 이미지 클릭시 변경
myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "test-site/images/image0.jpg") {
        myImage.setAttribute("src", "test-site/images/image1.jpg");
    } else {
        myImage.setAttribute("src", "test-site/images/image0.jpg");
    }
});


/// 버튼 클릭시 이름 변경
function setUserName() {
    const myName = prompt("이름을 입력하세요.");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    if(storedName === null) {
        storedName = "사용자";
    }
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});



/// list item 클릭시 줄긋기
function toggleDone(e) {
    if(!e.target.className) {
        e.target.className = 'done';
    } else {
        e.target.className = '';
    }
}

listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});