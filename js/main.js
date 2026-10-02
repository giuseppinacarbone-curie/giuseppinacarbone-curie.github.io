// Tabs interattivi per definizioni.html
document.querySelectorAll('.tab-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
    document.querySelectorAll('.tab-content').forEach(function (c) { c.classList.remove('active'); });
    btn.classList.add('active');
    var target = document.getElementById(btn.dataset.tab);
    if (target) target.classList.add('active');
  });
});

// Se URL contiene #incapsulamento ecc., apri il tab giusto
(function () {
  var hash = window.location.hash.replace('#', '');
  var map = { incapsulamento: 't1', ereditarieta: 't2', polimorfismo: 't3', astrazione: 't4' };
  if (map[hash]) {
    var btn = document.querySelector('[data-tab="' + map[hash] + '"]');
    if (btn) btn.click();
  }
})();
