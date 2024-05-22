/*başa dön butonu*/
// Başa dön butonunu seçme
var basadonButton = document.getElementById("basadonButton");

// Sayfa scroll olayını dinleme
window.addEventListener("scroll", function() {
    // Sayfanın aşağı kaydırılma miktarını kontrol etme
    if (window.pageYOffset > 100) { // Örneğin, 100 piksel aşağı kaydırıldığında göster
        basadonButton.classList.add("show");
    } else {
        basadonButton.classList.remove("show");
    }
});

// Başa dön butonuna tıklama olayını dinleme
basadonButton.addEventListener("click", function() {
    // Sayfanın en üstüne git
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Yumuşak kaydırma efekti için
    });
});

/*klavye çiçekli*/
function placeOnTop(imageSrc) {
    const flowerContainer = document.getElementById('flower-container');
  
    // Yeni bir resim öğesi oluştur
    const newImage = document.createElement('img');
    newImage.src = './resimler/'+imageSrc;
    newImage.classList.add('flower');
  
    // Tüm resimlerin üst üste gelmesini sağla
    newImage.style.position = 'absolute';
    newImage.style.left = '0';
    newImage.style.top = '0';
  
    // Çiçek konteynerine ekle
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
    element.style.color = "rgb(143, 143, 143)"; // Metin rengini değiştir
    setTimeout(function() {
        element.style.color = "rgb(180, 180, 180)"; // Belirli bir süre sonra metin rengini varsayılan olarak geri yükle
    }, 1000); // 1000 milisaniye (1 saniye) sonra rengi geri yükle
}


 /*indir butonu*/
 function indir() {
    // İndirilecek dosyanın URL'si
    var dosyaURL = "C:\Users\SUDENUR\Desktop";

    // Dosyanın indirilmesi için bir bağlantı oluşturulması
    var link = document.createElement("a");
    link.href = dosyaURL;

    // Dosyanın adı (isteğe bağlı)
    link.download = "hello-kity";

    // Bağlantının tıklanması
    document.body.appendChild(link);
    link.click();

    // Bağlantının temizlenmesi
    document.body.removeChild(link);
}
/*rastgele çiçek isimleri*/
 // Çiçek isimlerini bir dizi içinde tutalım
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
        // Butonun sınıfından rengi alın
        var color = $(this).attr("class").split(" ")[1];
        
        // Sayfanın arka plan rengini değiştirin
        $("body").css("background-color",color);
    });
});
/*bulanıklaştırma*/

$(document).ready(function(){
    // Resim üzerine geldiğinde
    $('.image-with-text').hover(function(){
        $(this).css('filter', 'brightness(0.8)'); // Parlaklığı azalt
    }, function(){
        $(this).css('filter', ''); // Normal haline geri dön
    });
});


