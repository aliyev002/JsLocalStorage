const selectedGoods = JSON.parse(localStorage.getItem("selectedGoods")) ;
const selectedGoodsContainer = document.getElementById("selected-goods");

if (selectedGoods.length === 0) {
  selectedGoodsContainer.innerHTML = "<p>Heç bir mal seçilməyib.</p>";
} else {
  selectedGoods.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${item.product_name}</h3>
      <p>${item.product_description}</p>
      <p>Qiymət: ${item.product_price} AZN</p>
      <p>Mağaza: ${item.store_name}</p>
      <p>Ünvan: ${item.store_address}</p>
    `;
    selectedGoodsContainer.appendChild(div);
  });
}
