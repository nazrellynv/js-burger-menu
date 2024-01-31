
let btn = document.getElementById('btn');

btn.addEventListener("click", toggleSidebar);
function toggleSidebar() {
  document.getElementById('text-container').style.marginLeft="250px"
  let sidebar = document.querySelector('.sidebar-content');
  sidebar.classList.toggle('active');
}

let btn2=document.getElementById('btn2');
btn2.addEventListener("click",toggleSidebar2);
function toggleSidebar2() {
  document.getElementById('text-container').style.marginLeft="0";
  let sidebar = document.querySelector('.sidebar-content');
  sidebar.classList.toggle('active');

}



