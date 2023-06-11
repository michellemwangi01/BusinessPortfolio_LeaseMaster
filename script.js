const teamMembers = document.querySelector('#memberSocials');
const memberSocials =  document.getElementsByClassName("memberSocials");

console.log(teamMembers);


// for (element in teamMembers){
//   let textInImage = teamMembers[0].textContent;
//   textInImage.textContent = "hovered";
// }  

teamMembers.addEventListener("mouseover", (e)=>{
  let textInImage = teamMembers.innerHTML;
  textInImage.innerHTML = "hovered";
})

  
