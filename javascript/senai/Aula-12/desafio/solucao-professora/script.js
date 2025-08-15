function openNav(){

  let x = document.getElementById('navigation')
  if (x.className === 'navigation'){
      x.className += " menujs";
      document.getElementById('treeline-icon').innerHTML = "&Cross";
  }else{
    x.className = 'navigation';
    document.getElementById('treeline-icon').innerHTML = "&#9776;";
  }


}