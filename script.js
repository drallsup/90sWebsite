  function closeBox(boxId) {
    const box = document.getElementById(boxId);
    box.style.right = "-300px";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
  const contentBox = document.getElementById("content-box");
  const aboutBox = document.getElementById("about-box");
  const contactBox = document.getElementById("contact-box");

  // });

 

 function toggleVerticalNav() {
    const verticalNav = document.querySelector('.vertical-nav');
    verticalNav.style.display = (verticalNav.style.display === 'none' || verticalNav.style.display === '') ? 'block' : 'none';
       }

       document.querySelector(".header-tab").addEventListener("click", function (e) {
        e.preventDefault();
        toggleVerticalNav();
      });
  
   
document.querySelector("a[href='#section1']").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById('content-box').style.right = "0";
        document.getElementById('about-box').style.right = "-300px";
        document.getElementById('contact-box').style.right = "-300px";
      });
      
      document.querySelector("a[href='#section2']").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById('content-box').style.right = "-300px";
        document.getElementById('about-box').style.right = "0";
        document.getElementById('contact-box').style.right = "-300px";
      });
      
      document.querySelector("a[href='#contact']").addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById('content-box').style.right = "-300px";
        document.getElementById('about-box').style.right = "-300px";
        document.getElementById('contact-box').style.right = "0";
      });    

    });
   
  