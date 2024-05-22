/*başa dön butonu*/

var basadonButton = document.getElementById("basadonButton");


window.addEventListener("scroll", function() {
  
    if (window.pageYOffset > 100) { 
        basadonButton.classList.add("show");
    } else {
        basadonButton.classList.remove("show");
    }
});


basadonButton.addEventListener("click", function() {
    
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
});

/*klavye çiçekli*/
function placeOnTop(imageSrc) {
    const flowerContainer = document.getElementById('flower-container');
  
   
    const newImage = document.createElement('img');
    newImage.src = './resimler/'+imageSrc;
    newImage.classList.add('flower');
  
   
    newImage.style.position = 'absolute';
    newImage.style.left = '0';
    newImage.style.top = '0';
  
   
    flowerContainer.appendChild(newImage);
  }
  
  function refreshPage() {
    location.reload();
  }
  /*başka sayfa için*/
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            navigateTo(targetPage);
        });
    });
});

function navigateTo(page) {
    window.location.href = page;
}



/*metin daha koyu*/
function changeColor(element) {
    element.style.color = "rgb(143, 143, 143)"; 
    setTimeout(function() {
        element.style.color = "rgb(180, 180, 180)"; 
    }, 1000); 
}


 /*indir butonu*/
 function indir() {
   
    var dosyaURL = "C:\Users\SUDENUR\Desktop";

   
    var link = document.createElement("a");
    link.href = dosyaURL;

   
    link.download = "hello-kity";

  
    document.body.appendChild(link);
    link.click();

  
    document.body.removeChild(link);
}
/*rastgele çiçek isimleri*/

 var flowerNames = [
    "Gül", "Papatya", "Lavanta", "Menekşe", "Orkide", "Zambak", "Süsen", "Kardelen", "Ayçiçeği","Lale","Karanfil","İris Furcata","Kasımpatı","Sümbül","Zambak","Leylak","Plumeria"
  ];

  // Rastgele çiçek ismini seçen fonksiyon
  function getRandomFlowerName() {
    var randomIndex = Math.floor(Math.random() * flowerNames.length);
    return flowerNames[randomIndex];
  }

  // Butona tıklanınca çalışacak fonksiyon
  document.getElementById("generate-flower-btn").addEventListener("click", function() {
    var flowerNameInput = document.getElementById("flower-name");
    var randomFlowerName = getRandomFlowerName();
    flowerNameInput.value = randomFlowerName;
  });

/*alt alta dikdörgen*/

function redirectTo(app) {
    switch(app) {
        case 'whatsapp':
            window.location.href = 'https://web.whatsapp.com/';
            break;
        case 'instagram':
            window.location.href = 'https://www.instagram.com/';
            break;
        case 'pinterest':
            window.location.href = 'https://www.pinterest.com/';
            break;
        default:
            break;
    }
}
/*menü*/
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }





  




/*jquery*/
$(document).ready(function() {
    $(".çiçekler ").on("mouseenter", function() {
        $(this).css("transform", "scale(1.05)"); // Resmin üzerine gelindiğinde büyüt
    });

    $(".çiçekler").on("mouseleave", function() {
        $(this).css("transform", "scale(1)"); // Fare resmin üzerinden çekildiğinde orijinal boyuta dön
    });
});
 /*açılır kapanır*/
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");

     
    });
});
 /*arka plan rengi değiştirme*/

 $(document).ready(function() {
    $(".colorButton").click(function() {
       
        var color = $(this).attr("class").split(" ")[1];
        
       
        $("body").css("background-color",color);
    });
});
/*bulanıklaştırma*/

$(document).ready(function(){
    // Resim üzerine geldiğinde
    $('.image-with-text').hover(function(){
        $(this).css('filter', 'brightness(0.8)'); 
    }, function(){
        $(this).css('filter', '');
    });
});

/*kurdale butonu*/
function randomPosition() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    $(".kurdale").each(function(){
        var leftPos = Math.random() * (windowWidth - $(this).width());
        var topPos = Math.random() * (windowHeight - $(this).height());
        $(this).css({
           
            'left': leftPos ,
            'top': topPos ,
        });
    });
}

$(document).ready(function(){
    $("#repositionButton").click(function(){
        
        $(".kurdale").show();
        randomPosition();
    });

});   



