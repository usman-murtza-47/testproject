// HERE ARE ALL THE VARIABLES WE ARE FOING TO USE IN THE PROGRAM

// 1.NAVBAR VARIABLES
const headerOne = document.getElementById("header1");
const headerTwo = document.getElementById("header2");
const postButton = document.getElementById("postbtn");
const backButton = document.getElementById("backbtn");
const UserButton=document.getElementById("userid");

// 2.HERO-SECTION VARIABLES
const pageOne = document.getElementById("section1");
const pageTwo = document.getElementById("section2");
const pageThree = document.getElementById("section3");
const pageFour=document.getElementById("section4");
const pageFive=document.getElementById("section5");
const pageSix=document.getElementById("section6");
const sharePostButton = document.getElementById("sharepostbtn");
const nameChangeButton=document.getElementById("namebtn");


// HERE ARE THE DEFAULT CONDITIONS OF THE PAGE WHEN THE PAGE IS FIRST OPENED BY THE USER
headerOne.style.display = "none";
headerTwo.style.display = "flex";
pageOne.style.display = "none";
pageTwo.style.display = "none";
pageThree.style.display="flex";
pageFour.style.display="none";
pageFive.style.display="none";
pageSix.style.display="none";


// Here is what happens if a user clicks on any button:

// 1.Post Button
postButton.addEventListener('click', function () {
  headerOne.style.display = "none";
  headerTwo.style.display = "flex";
  pageOne.style.display = "none";
  pageTwo.style.display = "flex";
  pageThree.style.display="none";
});

// 2.BACK BUTTON
backButton.addEventListener('click', function () {
  headerOne.style.display = "flex";
  headerTwo.style.display = "none";
  pageOne.style.display = "flex";
  pageTwo.style.display = "none";
  pageThree.style.display="none";
})

// 3.Share Post Button
sharePostButton.addEventListener('click', function () {
  let userInput = document.getElementById("postmsg").value;
  if (userInput === "") {
    console.log("Write a valid message");
    const msgString=  `<p>Message cannot be empty</p>`;
    document.getElementById("postmsg").insertAdjacentHTML('afterend',msgString);
  }
  else {
    const htmlstring = `
          <div class="message">
        <p class="username">StickMan-47</p>
        <p class="msginfo">${userInput}</p>
        <div class="interaction">
          <button class="likebtn"><img src="Images/heart-outline.svg" class="btnimg" alt="">Like</button>
          <button class="commentbtn"> <img src="Images/chatbubble-outline.svg" class="btnimg" alt="">Comment</button>
          <button class="sharebtn"><img src="Images/share-social-outline.svg" class="btnimg" alt=""> Share</button>
        </div>
      </div>`

    pageOne.insertAdjacentHTML('afterbegin', htmlstring);


    headerOne.style.display = "flex";
    headerTwo.style.display = "none";
    pageOne.style.display = "flex";
    pageTwo.style.display = "none";
    pageThree.style.display="none";

    document.getElementById("postmsg").value = "";
  }
})

// 4.User Button
UserButton.addEventListener('click',function(){
    headerOne.style.display = "none";
    headerTwo.style.display = "flex";
    pageOne.style.display = "none";
    pageTwo.style.display = "none";
    pageThree.style.display="flex";
});
// 5.nameChangeButton
nameChangeButton.addEventListener('click',function(){
  pageThree.style.display="none";
  pageFour.style.display="flex";
})
