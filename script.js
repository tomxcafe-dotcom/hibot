function selectPlan(plan) {
  document.getElementById('plan').value = plan;
  window.location.href = "#order";
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const plan = document.getElementById('plan').value;

  document.getElementById('result').innerHTML =
    `✅ ขอบคุณคุณ <b>${name}</b><br>
     แพ็กเกจ: <b>${plan}</b><br>
     เราจะติดต่อกลับทาง ${email}`;
});
