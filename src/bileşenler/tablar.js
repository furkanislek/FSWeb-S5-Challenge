import axios, { Axios } from "axios";


const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const divTopics = document.createElement("div");
  divTopics.classList.add("topics");

  konu.forEach((element) => {
    var divTab = document.createElement("div");
    divTab.classList.add("tab");
    divTab.textContent = element;
    divTopics.appendChild(divTab);
  })

  // for (var i = 0; i < konu.length; i++) {
  //   const divTab = document.createElement("div");
  //   divTab.classList.add("tab");
  //   divTab.textContent = konu[i];
  //   divTopics.appendChild(divTab);
  // }

  return divTopics;
};


const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  //resp.data.konular =  ['javascript', 'bootstrap', 'teknoloji', 'jquery', 'node.js']
  axios
    .get("http://localhost:5001/api/konular")
    .then((resp) => {
      // console.log(resp.data.konular);
      const tablar = Tablar(resp.data.konular);
      // console.log(tablar);
      const tabSecici = document.querySelector(secici);
      tabSecici.appendChild(tablar);
    })

};

export { Tablar, tabEkleyici };
