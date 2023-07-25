// TODO: add code here
window.addEventListener("load", function () {
    //this.alert("window");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
      response.json().then(function (json) {
        const astronaut = document.getElementById("astronaut");
        let index = 0;
        const totalastronauts=document.getElementById("totalastronauts");
        totalastronauts.innerHTML=`<h3>Total Astronauts Count:${json.length} </h3>`;
       // alert(json.length);
      
        json.sort(GetSortOrder("hoursInSpace")); 
        
        while(index<json.length)
        {
       // astronaut.addEventListener("click", function () {
            //alert("click");
            //astronaut.innerHTML+=`<br>`;
           astronaut.innerHTML += `
          <div class='bio'>
             <h3> ${json[index].firstName + json[index].lastname}</h3>
             <ul>
             <li>Hours in space: ${json[index].hoursInSpace}</li>
             <li style='${(json[index].active)? 'color:green': 'color:black'}'>Active: ${json[index].active}</li>
             <li>Skills: ${json[index].skills}</li>
          </ul>
     
   
             <img class="avatar"  src=${json[index].picture} height=250></img>
             </div> 
       `;

      
       index = (index + 1);

       //   index = (index + 1) % json.length;
        }
      //  });
     
      });
     
    });
  });

  //Comparer Function    
function GetSortOrder(prop) {    
  return function(a, b) {    
      if (b[prop] >a[prop]) {    
          return 1;    
      } else if (b[prop] < a[prop]) {    
          return -1;    
      }    
      return 0;    
  }    
}    
