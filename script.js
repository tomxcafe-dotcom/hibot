// script.js

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// เพิ่มสินค้าเข้าตะกร้า
function addToCart(product, price) {
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " ถูกเพิ่มเข้าตะกร้าแล้ว!");
}

// แสดงสินค้าในตะกร้า
function displayCart() {
  let cartDiv = document.getElementById("cart-items");
  let total = 0;

  if (!cartDiv) return;

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>ตะกร้าว่างเปล่า</p>";
    document.getElementById("total-price").innerText = "0";
    return;
  }

  cartDiv.innerHTML = "";
  cart.forEach((item, index) => {
    cartDiv.innerHTML += `
      <p>${item.product} - ${item.price} USD 
      <button onclick="removeItem(${index})">ลบ</button></p>`;
    total += item.price;
  });

  document.getElementById("total-price").innerText = total;
}

// ลบสินค้าออกจากตะกร้า
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

// จัดการฟอร์ม Checkout
function checkoutFormHandler() {
  const form = document.getElementById("checkout-form");
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("✅ ขอบคุณสำหรับการสั่งซื้อ! ระบบจะติดต่อกลับไปทางอีเมลที่คุณกรอกไว้");
    localStorage.removeItem("cart"); // เคลียร์ตะกร้า
    window.location.href = "index.html"; // กลับไปหน้าแรก
  });
}

// เรียกใช้งานเมื่อโหลดหน้า
window.onload = function() {
  if (document.getElementById("cart-items")) {
    displayCart();
  }
  checkoutFormHandler();
};
