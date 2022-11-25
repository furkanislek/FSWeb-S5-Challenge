import axios, { Axios } from "axios";

const Card = (makale) => {
  const divCard = document.createElement('div');
  divCard.classList.add("card");
  const divHeadline = document.createElement('div');
  divHeadline.classList.add("headline");
  divHeadline.textContent = makale.anabaslik;
  divCard.appendChild(divHeadline);

  const divAuthor = document.createElement('div');
  divAuthor.classList.add("author");
  const divImage = document.createElement('div');
  divImage.classList.add("img-container");

  const imgAuthor = document.createElement('img');
  imgAuthor.src = makale.yazarFoto;

  divImage.appendChild(imgAuthor);
  divAuthor.appendChild(divImage);


  const spanAuthor = document.createElement('span');
  spanAuthor.textContent = `${makale.yazarAdi} tarafından`;


  divAuthor.appendChild(spanAuthor);

  divCard.appendChild(divAuthor);

  divCard.addEventListener("click" , () => {
    console.log(makale.anabaslik);
  });

  return divCard;
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios
    .get("http://localhost:5001/api/makaleler")
    .then((resp) => {
      console.log(resp.data.makaleler);
      for(let i in resp.data.makaleler){
        resp.data.makaleler[i].forEach((element) => {
          let result = Card(element)
          document.querySelector(secici).appendChild(result)
        })
      }
    })
}

export { Card, cardEkleyici }
