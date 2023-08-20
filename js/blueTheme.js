function blueThemeOn(){
    navbar.style.backgroundColor="#04345C";
    document.getElementById("logo-nav").style.backgroundColor="#007";
    document.getElementById("rajkiya").style.color="white";
    slider.style.backgroundColor="#BAD3E4";
    document.getElementById("col-notice").style.border="2px solid #04345C";
    document.getElementById("col-buttons").style.border="2px solid #04345C";

    var btn = document.querySelectorAll(".btn-14");
    btn.forEach(butt => {
        butt.style.background="#145DA0";
    });

// Marquee
    document.getElementsByClassName("free")[0].style.border="2px dashed #1E77BD";

    var marq = document.querySelectorAll(".marq-a");
    marq.forEach(marqu => {
        marqu.style.color="#10564F";
    }); //marquee end


// profile
    var photo = document.querySelectorAll(".profile-photos");
    photo.forEach(profile => {
        profile.style.boxShadow = "1px -1px 4px #04345C";
    });

    //profile Image
    var image = document.querySelectorAll(".img");
    image.forEach(img => {
        img.style.border="2px solid #1E77BD";
    });
    

// SEC 2

sec2.style.backgroundColor="#BFD7ED";

for(var i=0; i<=3; i++){
    document.querySelectorAll(".profile-photos")[i].style.backgroundImage="linear-gradient(#BFD7ED, #fff)";
}

about.style.backgroundColor="#007";
document.querySelectorAll(".abt")[0].style.backgroundColor="#007";
document.querySelectorAll("#imp-links")[0].style.backgroundColor="#bfd7ed";
document.querySelectorAll("#imp-links")[0].style.width="29%";

for(var i=0; i<=17; i++){
    document.querySelectorAll('#imp-links a')[i].style.color="#04345C";
}


document.querySelectorAll('#imp-links-h2')[0].style.color="#04345C";
document.querySelectorAll('.about-content h2')[0].style.color="#75E6DA";
document.querySelectorAll('.about-content .read-more')[0].style.backgroundColor="#0F4A6F";
document.querySelectorAll('.about-content .read-more')[0].style.color="#75e6da";



var link = document.querySelectorAll(".nav-link");

    link.forEach(element => {
              element.addEventListener('mouseover', () => {
    element.style.backgroundColor = '#1e77bd';
  });

  element.addEventListener('mouseout', () => {
    element.style.backgroundColor = '';
  });
    });




var link = document.querySelectorAll(".dropdown-item");

    link.forEach(element => {
              element.addEventListener('mouseover', () => {
    element.style.backgroundColor = '#1e77bd';
  });

  element.addEventListener('mouseout', () => {
    element.style.backgroundColor = '';
  });
    });




// SEC 3
sec3.style.backgroundColor="#007";



// dropdown
for(var i=0; i<=9; i++){
    document.querySelectorAll('.dropdown-menu')[i].style.animation="dropdownAnimateBlue 0.5s ease forwards";
}


// testimonial
document.getElementsByClassName("testimonial-name")[0].style.background="#145DA0";

} //function closing

function defaultTheme(){
    navbar.style.backgroundColor="";
    document.getElementById("logo-nav").style.backgroundColor="";
    document.getElementById("rajkiya").style.color="";
    slider.style.backgroundColor="";
    document.getElementById("col-notice").style.border="";
    document.getElementById("col-buttons").style.border="";

    var btn = document.querySelectorAll(".btn-14");
    btn.forEach(butt => {
        butt.style.background="";
    });

    document.getElementsByClassName("free")[0].style.border="";

    var marq = document.querySelectorAll(".marq-a");
    marq.forEach(marqu => {
        marqu.style.color="";
    });


// profile
    var photo = document.querySelectorAll(".profile-photos");
    photo.forEach(profile => {
        profile.style.boxShadow = "";
    })

    //profile Image
    var image = document.querySelectorAll(".img");
    image.forEach(img => {
        img.style.border="";
    })
}



