const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const headerDiv = document.createElement('div');
  const spanDate = document.createElement('span');
  const h1Baslik = document.createElement('h1');
  const spanYazi = document.createElement('span');

  headerDiv.classList.add("header");
  spanDate.classList.add("date");
  spanYazi.classList.add("temp");

  spanDate.textContent = tarih;
  h1Baslik.textContent = baslik;
  spanYazi.textContent = yazi;

  headerDiv.append(spanDate,h1Baslik,spanYazi);  //Deneme. Çalıştı 🎉🎉🎉

  // headerDiv.appendChild(spanDate);
  // headerDiv.appendChild(h1Baslik);
  // headerDiv.appendChild(spanYazi);

  return headerDiv;
}


const headerEkleyici = (secici) => {

  const headerContainer = document.querySelector(secici);

  const myHeader = Header("Teknoloji Zamanı", "11 Kasım 2022", "sağdaki yazı");

  headerContainer.appendChild(myHeader);

  // return headerContainer;  Bir değişkene bir şey eklemediği için return gerekmiyor.


  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 
}
export { Header, headerEkleyici }
