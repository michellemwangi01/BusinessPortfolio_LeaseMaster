const teamMembers = document.getElementById('memberSocials');
const teamMembersTitle = document.getElementById('meetTheTeam');

const memberSocials =  document.getElementsByClassName("memberSocials");

console.log(teamMembersTitle.textContent);


// for (element in teamMembers){
//   let textInImage = teamMembers[0].textContent;
//   textInImage.textContent = "hovered";
// }  

teamMembers.addEventListener("mouseover", ()=>{
  teamMembers.textContent = "Meet the Team";
})

  
