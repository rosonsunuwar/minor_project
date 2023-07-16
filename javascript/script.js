
  // window.onscroll = function();
  
  // var header = document.getElementById("myHeader");
  // var sticky = header.offsetTop;
  // var hold = header.offsetTop;
  // var search = document.getElementById("mySearchbar");
  
  // function myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("sticky");
  //     search.classList.add("hold")
  //   } else {
  //     header.classList.remove("sticky");
  //     search.classList.remove("hold")
  //   }
  // }

    function toggleMenulists() {
      var menuItem = document.getElementById("toogle-menu-lists");
      if (menuItem.style.display === "none") {
          menuItem.style.display = "block";
      } else {
        menuItem.style.display = "none";
      }
    }



