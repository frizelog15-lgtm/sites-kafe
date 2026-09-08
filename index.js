<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Магия вкуса — Доставка еды</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
:root {
  --primary: #e63946;
  --primary-dark: #c1121f;
  --dark: #1d1d1f;
  --dark-2: #2b2b2e;
  --light: #f8f9fa;
  --gold: #f4a261;
  --green: #2a9d8f;
  --radius: 14px;
  --shadow: 0 4px 20px rgba(0,0,0,.08);
}
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: var(--light);
  color: var(--dark);
  min-height: 100vh;
}
a { text-decoration: none; color: inherit; }

/* ===== HEADER ===== */
header {
  background: linear-gradient(135deg, var(--dark) 0%, #3a0d0d 100%);
  color: #fff;
  padding: 18px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(0,0,0,.3);
}
.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.logo { display: flex; align-items: center; gap: 10px; font-size: 1.5rem; font-weight: 800; }
.logo span { color: var(--gold); }
.nav { display: flex; gap: 8px; flex-wrap: wrap; }
.nav a {
  padding: 8px 14px;
  border-radius: 30px;
  font-weight: 600;
  font-size: .9rem;
  transition: .2s;
}
.nav a:hover, .nav a.active { background: var(--primary); }
.header-actions { display: flex; align-items: center; gap: 12px; }
.cart-btn {
  background: var(--primary);
  border: none;
  color: #fff;
  padding: 10px 18px;
  border-radius: 30px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: .95rem;
  transition: .2s;
}
.cart-btn:hover { background: var(--primary-dark); transform: translateY(-2px); }
.cart-count {
  background: #fff;
  color: var(--primary);
  border-radius: 50%;
  min-width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: .8rem;
  font-weight: 800;
}
.admin-toggle {
  background: transparent;
  border: 2px solid rgba(255,255,255,.4);
  color: #fff;
  padding: 8px 14px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  font-size: .85rem;
  transition: .2s;
}
.admin-toggle:hover { border-color: var(--gold); color: var(--gold); }

/* ===== HERO ===== */
.hero {
  background: linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="30" r="18" fill="%23e63946" opacity="0.3"/><circle cx="80" cy="70" r="22" fill="%23f4a261" opacity="0.3"/><circle cx="50" cy="20" r="10" fill="%232a9d8f" opacity="0.3"/></svg>');
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 90px 20px;
}
.hero h1 { font-size: 2.8rem; margin-bottom: 12px; text-shadow: 0 2px 10px rgba(0,0,0,.4); }
.hero p { font-size: 1.2rem; max-width: 600px; margin: 0 auto 24px; opacity: .95; }
.hero .btn {
  background: var(--primary);
  color: #fff;
  padding: 14px 34px;
  border-radius: 40px;
  font-weight: 700;
  font-size: 1.05rem;
  display: inline-block;
  transition: .2s;
  border: none;
  cursor: pointer;
}
.hero .btn:hover { background: var(--primary-dark); transform: translateY(-3px); }

/* ===== SECTIONS ===== */
section { max-width: 1200px; margin: 0 auto; padding: 50px 20px; }
.section-title {
  font-size: 1.9rem;
  margin-bottom: 8px;
  text-align: center;
}
.section-sub { text-align: center; color: #666; margin-bottom: 30px; }

/* ===== CATEGORY TABS ===== */
.categories {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.cat-btn {
  background: #fff;
  border: 2px solid #e0e0e0;
  padding: 10px 22px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  font-size: .95rem;
  transition: .2s;
}
.cat-btn:hover { border-color: var(--primary); color: var(--primary); }
.cat-btn.active { background: var(--primary); border-color: var(--primary); color: #fff; }

/* ===== MENU GRID ===== */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}
.product-card {
  background: #fff;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: .25s;
  display: flex;
  flex-direction: column;
}
.product-card:hover { transform: translateY(-6px); box-shadow: 0 8px 30px rgba(0,0,0,.15); }
.product-img {
  height: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background: linear-gradient(135deg, #fff5f0, #ffe8d6);
}
.product-body { padding: 16px; display: flex; flex-direction: column; flex: 1; }
.product-name { font-size: 1.15rem; font-weight: 700; margin-bottom: 6px; }
.product-desc { color: #777; font-size: .88rem; margin-bottom: 12px; flex: 1; }
.product-bottom { display: flex; align-items: center; justify-content: space-between; }
.product-price { font-size: 1.25rem; font-weight: 800; color: var(--primary); }
.add-btn {
  background: var(--primary);
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 700;
  transition: .2s;
}
.add-btn:hover { background: var(--primary-dark); }

/* ===== CART MODAL ===== */
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,.55);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 20px;
}
.modal-overlay.open { display: flex; }
.modal {
  background: #fff;
  border-radius: 18px;
  max-width: 520px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 28px;
  box-shadow: 0 20px 60px rgba(0,0,0,.3);
  position: relative;
}
.modal h2 { margin-bottom: 18px; font-size: 1.5rem; }
.close-modal {
  position: absolute;
  top: 14px; right: 18px;
  background: none;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  color: #888;
}
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  gap: 10px;
}
.cart-item-info { flex: 1; }
.cart-item-name { font-weight: 600; }
.cart-item-price { color: #888; font-size: .85rem; }
.qty-controls { display: flex; align-items: center; gap: 8px; }
.qty-btn {
  width: 28px; height: 28px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1;
}
.qty-btn:hover { background: #f0f0f0; }
.cart-total { display: flex; justify-content: space-between; font-size: 1.2rem; font-weight: 800; margin: 18px 0; }
.form-group { margin-bottom: 14px; }
.form-group label { display: block; font-weight: 600; margin-bottom: 5px; font-size: .9rem; }
.form-group input, .form-group textarea, .form-group select {
  width: 100%;
  padding: 11px 14px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: .95rem;
  font-family: inherit;
  transition: .2s;
}
.form-group input:focus, .form-group textarea:focus, .form-group select:focus {
  outline: none;
  border-color: var(--primary);
}
.btn-primary {
  background: var(--primary);
  color: #fff;
  border: none;
  padding: 13px 24px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: .2s;
}
.btn-primary:hover { background: var(--primary-dark); }
.btn-secondary {
  background: #eee;
  color: var(--dark);
  border: none;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  transition: .2s;
}
.btn-secondary:hover { background: #ddd; }
.empty-cart { text-align: center; color: #888; padding: 30px 0; }
.empty-cart .emoji { font-size: 3rem; display: block; margin-bottom: 10px; }

/* ===== ADMIN PANEL ===== */
.admin-panel {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,.55);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 300;
  padding: 20px;
}
.admin-panel.open { display: flex; }
.admin-modal {
  background: #fff;
  border-radius: 18px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 28px;
  box-shadow: 0 20px 60px rgba(0,0,0,.3);
  position: relative;
}
.admin-modal h2 { margin-bottom: 20px; font-size: 1.5rem; }
.admin-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
  margin-bottom: 24px;
}
.stat-card {
  background: var(--light);
  border-radius: 12px;
  padding: 14px;
  text-align: center;
}
.stat-card .stat-num { font-size: 1.8rem; font-weight: 800; }
.stat-card .stat-label { font-size: .85rem; color: #666; }
.stat-card.new .stat-num { color: var(--primary); }
.stat-card.cooking .stat-num { color: var(--gold); }
.stat-card.delivery .stat-num { color: var(--green); }
.stat-card.done .stat-num { color: #2a9d8f; }
.stat-card.total .stat-num { color: var(--dark); }
.orders-list { display: flex; flex-direction: column; gap: 16px; }
.order-card {
  border: 2px solid #e0e0e0;
  border-radius: 14px;
  padding: 16px;
  background: #fff;
}
.order-card.status-new { border-left: 6px solid var(--primary); }
.order-card.status-cooking { border-left: 6px solid var(--gold); }
.order-card.status-delivery { border-left: 6px solid var(--green); }
.order-card.status-done { border-left: 6px solid #2a9d8f; }
.order-card.status-cancelled { border-left: 6px solid #999; opacity: .7; }
.order-top { display: flex; justify-content: space-between; margin-bottom: 10px; }
.order-id { font-weight: 800; }
.order-time { color: #888; font-size: .85rem; }
.order-items { margin-bottom: 10px; }
.order-item-line { display: flex; justify-content: space-between; padding: 3px 0; }
.order-item-line .qty { color: #888; }
.order-customer { background: var(--light); border-radius: 8px; padding: 10px; margin-bottom: 10px; font-size: .9rem; }
.order-customer .label { font-weight: 600; }
.order-total { font-weight: 800; font-size: 1.1rem; margin-bottom: 10px; }
.order-actions { display: flex; gap: 10px; align-items: center; }
.status-select {
  padding: 8px 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: .9rem;
  font-family: inherit;
  cursor: pointer;
}
.delete-order {
  background: #ffebee;
  color: var(--primary);
  border: none;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: .2s;
}
.delete-order:hover { background: #ffcdd2; }
.no-orders { text-align: center; color: #888; padding: 30px 0; }
.no-orders .emoji { font-size: 3rem; display: block; margin-bottom: 10px; }

/* ===== TOAST ===== */
.toast {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%) translateY(100px);
  background: var(--dark);
  color: #fff;
  padding: 14px 24px;
  border-radius: 30px;
  font-weight: 600;
  box-shadow: 0 8px 30px rgba(0,0,0,.3);
  z-index: 400;
  transition: .3s;
  opacity: 0;
  pointer-events: none;
  white-space: nowrap;
}
.toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .header-inner { flex-direction: column; gap: 10px; }
  .hero h1 { font-size: 2rem; }
  .hero p { font-size: 1rem; }
  .menu-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
  .admin-modal { padding: 20px; }
}

/* ===== EXTENDED APP ===== */
.badge { display:inline-flex; align-items:center; gap:5px; padding:5px 9px; border-radius:20px; font-size:.78rem; font-weight:800; background:#f1f3f5; }
.badge.ok { background:#e8f7f3; color:#187d6e; }
.badge.off { background:#fff0f0; color:#c1121f; }
.account-box { background:#fff; border-radius:14px; padding:18px; margin-bottom:18px; box-shadow:var(--shadow); }
.tabs { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:20px; }
.tab { border:0; padding:10px 15px; border-radius:10px; background:#eee; cursor:pointer; font-weight:700; }
.tab.active { background:var(--primary); color:#fff; }
.toolbar { display:flex; gap:10px; flex-wrap:wrap; align-items:center; margin-bottom:18px; }
.toolbar .btn-secondary { width:auto; margin:0; }
.table-wrap { overflow:auto; border:1px solid #eee; border-radius:12px; }
table { width:100%; border-collapse:collapse; min-width:680px; }
th,td { padding:11px; border-bottom:1px solid #eee; text-align:left; vertical-align:middle; }
th { background:#fafafa; font-size:.85rem; }
.small-btn { border:0; border-radius:8px; padding:7px 10px; cursor:pointer; font-weight:700; }
.small-btn.primary { background:var(--primary); color:#fff; }
.small-btn.gray { background:#eee; }
.small-btn.danger { background:#ffebee; color:var(--primary); }
.shift-active { border:2px solid var(--green); background:#f1fbf9; }
.report-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(150px,1fr)); gap:12px; margin-bottom:18px; }
.product-card.unavailable { opacity:.58; }
.product-card.unavailable .add-btn { background:#aaa; cursor:not-allowed; }
.product-img { position:relative; }
.soldout { position:absolute; top:10px; right:10px; background:#1d1d1f; color:#fff; padding:5px 9px; border-radius:20px; font-size:.75rem; font-weight:800; }
.role-card { border:2px solid #eee; border-radius:12px; padding:12px; margin:8px 0; }
.role-card strong { display:block; margin-bottom:4px; }
.notice { padding:12px; border-radius:10px; background:#fff8e8; margin-bottom:15px; }

/* ===== EDIT MENU MODAL ===== */
.edit-modal-overlay {
  position:fixed; top:0; left:0; right:0; bottom:0;
  background:rgba(0,0,0,.55);
  display:none; align-items:center; justify-content:center;
  z-index:350; padding:20px;
}
.edit-modal-overlay.open { display:flex; }
.edit-modal {
  background:#fff; border-radius:18px; max-width:480px; width:100%;
  padding:28px; box-shadow:0 20px 60px rgba(0,0,0,.3); position:relative;
}
.edit-modal h3 { margin-bottom:18px; font-size:1.3rem; }
.edit-modal .form-group { margin-bottom:14px; }
.edit-modal .form-group label { display:block; font-weight:600; margin-bottom:5px; font-size:.9rem; }
.edit-modal .form-group input, .edit-modal .form-group select {
  width:100%; padding:11px 14px; border:2px solid #e0e0e0; border-radius:10px;
  font-size:.95rem; font-family:inherit; transition:.2s;
}
.edit-modal .form-group input:focus, .edit-modal .form-group select:focus {
  outline:none; border-color:var(--primary);
}
.edit-modal .form-row { display:flex; gap:12px; }
.edit-modal .form-row .form-group { flex:1; }
.edit-modal .modal-actions { display:flex; gap:10px; margin-top:18px; }
.edit-modal .modal-actions button { flex:1; }
.edit-modal .emoji-picker { display:flex; gap:8px; flex-wrap:wrap; margin-top:6px; }
.edit-modal .emoji-option {
  width:40px; height:40px; border:2px solid #e0e0e0; border-radius:10px;
  display:flex; align-items:center; justify-content:center; font-size:1.3rem;
  cursor:pointer; transition:.2s; background:#fff;
}
.edit-modal .emoji-option:hover { border-color:var(--primary); }
.edit-modal .emoji-option.selected { border-color:var(--primary); background:#fff5f0; }

/* ===== DELIVERY / PICKUP TOGGLE ===== */
.delivery-toggle {
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
}
.delivery-option {
  flex: 1;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  text-align: center;
  transition: .2s;
  background: #fff;
}
.delivery-option:hover { border-color: var(--primary); }
.delivery-option.selected { border-color: var(--primary); background: #fff5f0; }
.delivery-option .icon { font-size: 1.5rem; display: block; margin-bottom: 4px; }
.delivery-option .label { font-weight: 700; font-size: .9rem; }
.delivery-hidden { display: none; }

/* ===== ORDER TRACKING ===== */
.tracking-result {
  background: var(--light);
  border-radius: 14px;
  padding: 20px;
  margin-top: 16px;
}
.tracking-timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 18px 0;
}
.timeline-step {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 10px 0;
  position: relative;
}
.timeline-dot {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .9rem;
  flex-shrink: 0;
  background: #e0e0e0;
  color: #999;
}
.timeline-step.active .timeline-dot {
  background: var(--primary);
  color: #fff;
  box-shadow: 0 0 0 4px rgba(230,57,70,.2);
}
.timeline-step.done .timeline-dot {
  background: var(--green);
  color: #fff;
}
.timeline-line {
  position: absolute;
  left: 15px;
  top: 44px;
  width: 2px;
  height: calc(100% - 20px);
  background: #e0e0e0;
}
.timeline-step.done .timeline-line { background: var(--green); }
.timeline-step:last-child .timeline-line { display: none; }
.timeline-info { flex: 1; }
.timeline-title { font-weight: 700; font-size: .95rem; }
.timeline-time { font-size: .8rem; color: #888; }
.tracking-order-info {
  background: #fff;
  border-radius: 10px;
  padding: 14px;
  margin-top: 14px;
}
.tracking-order-info .row {
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  font-size: .9rem;
}
.tracking-order-info .row .val { font-weight: 700; }
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: .85rem;
  font-weight: 700;
}
.status-badge.new { background: #ffebee; color: var(--primary); }
.status-badge.cooking { background: #fff8e1; color: var(--gold); }
.status-badge.delivery { background: #e8f7f3; color: var(--green); }
.status-badge.done { background: #e8f5e9; color: #2a9d8f; }
.status-badge.cancelled { background: #f5f5f5; color: #999; }
.tracking-search-box {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.tracking-search-box input { flex: 1; }
.tracking-search-box button { width: auto; flex-shrink: 0; }
.no-tracking-result {
  text-align: center;
  color: #888;
  padding: 20px 0;
}
.no-tracking-result .emoji { font-size: 3rem; display: block; margin-bottom: 10px; }

</style>
</head>
<body>

<!-- ===== HEADER ===== -->
<header>
  <div class="header-inner">
    <div class="logo">🍕 Магия <span>вкуса</span></div>
    <nav class="nav">
      <a href="#menu">Меню</a>
      <a href="#tracking" onclick="openTracking(event)">Отследить</a>
      <a href="#about">О нас</a>
      <a href="#contacts">Контакты</a>
    </nav>
    <div class="header-actions">
      <button class="cart-btn" onclick="openCart()">🛒 Корзина <span class="cart-count" id="cartCount">0</span></button>
      <button class="admin-toggle" onclick="openAccount()">👤 Войти</button>
    </div>
  </div>
</header>
<!-- ===== AUTH / ACCOUNT ===== -->
<div class="modal-overlay" id="authModal">
  <div class="modal">
    <button class="close-modal" onclick="closeAuth()">×</button>
    <h2 id="authTitle">👤 Вход</h2>
    <div id="authBody"></div>
  </div>
</div>

<!-- ===== STAFF / DIRECTOR PANEL ===== -->
<div class="admin-panel" id="staffPanel">
  <div class="admin-modal">
    <button class="close-modal" onclick="closeStaff()">×</button>
    <div id="staffContent"></div>
  </div>
</div>

<!-- ===== PROFILE BUTTON ===== -->


<!-- ===== HERO ===== -->
<div class="hero">
  <h1>Доставка вкусной еды</h1>
  <p>Пицца, роллы, обеды, чай, кофе и лимонады — всё свежее и с любовью!</p>
  <button class="btn" onclick="document.getElementById('menu').scrollIntoView({behavior:'smooth'})">Смотреть меню</button>
</div>

<!-- ===== MENU ===== -->
<section id="menu">
  <h2 class="section-title">Наше меню</h2>
  <p class="section-sub">Выберите категорию и добавьте блюда в корзину</p>
  <div class="categories" id="categories"></div>
  <div class="menu-grid" id="menuGrid"></div>
</section>

<!-- ===== ABOUT ===== -->
<section id="about">
  <h2 class="section-title">О нас</h2>
  <p class="section-sub">Мы готовим из свежих продуктов и доставляем быстро!</p>
  <div style="text-align:center;margin-top:18px">
    <button class="btn-primary" style="max-width:320px;display:inline-block" onclick="openAccount()">👤 Личный кабинет</button>
  </div>
</section>

<!-- ===== CONTACTS ===== -->
<section id="contacts">
  <h2 class="section-title">Контакты</h2>
  <p class="section-sub">Телефон: +7 (900) 123-45-67</p>
</section>

<!-- ===== ORDER TRACKING ===== -->
<section id="tracking">
  <h2 class="section-title">📦 Отследить заказ</h2>
  <p class="section-sub">Введите номер заказа, чтобы узнать статус</p>
  <div style="max-width:500px;margin:0 auto;">
    <div class="tracking-search-box">
      <input type="text" id="trackingOrderId" placeholder="Номер заказа (например: ORD-123456)">
      <button class="btn-primary" style="width:auto;padding:11px 22px;" onclick="trackOrder()">Найти</button>
    </div>
    <div id="trackingResult"></div>
  </div>
</section>

<!-- ===== CART MODAL ===== -->
<div class="modal-overlay" id="cartModal">
  <div class="modal">
    <button class="close-modal" onclick="closeCart()">×</button>
    <h2>🛒 Ваша корзина</h2>
    <div id="cartItems"></div>
    <div class="cart-total" id="cartTotal">Итого: 0 ₽</div>
    <div class="form-group">
      <label>Имя</label>
      <input type="text" id="custName" placeholder="Ваше имя">
    </div>
    <div class="form-group">
      <label>Телефон</label>
      <input type="tel" id="custPhone" placeholder="+7 (___) ___-__-__">
    </div>
    <label style="display:block;font-weight:600;margin-bottom:8px;font-size:.9rem;">Способ получения</label>
    <div class="delivery-toggle">
      <div class="delivery-option selected" id="deliveryOption" onclick="setDeliveryType('delivery')">
        <span class="icon">🛵</span>
        <span class="label">Доставка</span>
      </div>
      <div class="delivery-option" id="pickupOption" onclick="setDeliveryType('pickup')">
        <span class="icon">🏪</span>
        <span class="label">Самовывоз</span>
      </div>
    </div>
    <div class="form-group" id="addressGroup">
      <label>Адрес доставки</label>
      <input type="text" id="custAddress" placeholder="Улица, дом, квартира">
    </div>
    <div class="form-group delivery-hidden" id="pickupGroup">
      <label>Время самовывоза</label>
      <select id="custPickupTime">
        <option value="asap">Как можно скорее</option>
        <option value="15">Через 15 минут</option>
        <option value="30">Через 30 минут</option>
        <option value="45">Через 45 минут</option>
        <option value="60">Через 1 час</option>
      </select>
    </div>
    <div class="form-group">
      <label>Способ оплаты</label>
      <select id="custPayment">
        <option value="cash">Наличные</option>
        <option value="card">Карта</option>
      </select>
    </div>
    <div class="form-group">
      <label>Комментарий</label>
      <textarea id="custComment" rows="2" placeholder="Пожелания к заказу"></textarea>
    </div>
    <button class="btn-primary" onclick="placeOrder()">Оформить заказ</button>
    <button class="btn-secondary" onclick="closeCart()">Продолжить покупки</button>
  </div>
</div>

<!-- ===== ADD STAFF MODAL ===== -->
<div class="modal-overlay" id="staffUserModal">
  <div class="modal">
    <button class="close-modal" type="button" onclick="closeStaffUserModal()">×</button>
    <h2>👤 Выдать должность</h2>
    <div class="form-group"><label for="staffUserName">Имя сотрудника</label><input id="staffUserName" type="text" placeholder="Например, Анна"></div>
    <div class="form-group"><label for="staffUserPhone">Номер телефона</label><input id="staffUserPhone" type="tel" placeholder="+7 (___) ___-__-__"></div>
    <div class="form-group"><label for="staffUserLogin">Логин</label><input id="staffUserLogin" type="text" placeholder="Логин для входа"></div>
    <div class="form-group"><label for="staffUserPassword">Пароль</label><input id="staffUserPassword" type="password" placeholder="Пароль"></div>
    <div class="form-group"><label for="staffUserRole">Должность</label>
      <select id="staffUserRole">
        <option value="worker">👷 Работник</option>
        <option value="bartender">🍸 Бармен</option>
        <option value="sushi">🍣 Сушист</option>
      </select>
    </div>
    <button class="btn-primary" type="button" onclick="submitStaffUser()">Выдать должность</button>
    <button class="btn-secondary" type="button" onclick="closeStaffUserModal()">Отмена</button>
  </div>
</div>

<!-- ===== EDIT MENU ITEM MODAL ===== -->
<div class="edit-modal-overlay" id="editMenuModal">
  <div class="edit-modal">
    <button class="close-modal" type="button" onclick="closeEditMenuModal()">×</button>
    <h3 id="editMenuTitle">✏️ Редактировать товар</h3>
    <div class="form-group"><label for="editMenuName">Название</label><input id="editMenuName" type="text" placeholder="Название товара"></div>
    <div class="form-group"><label for="editMenuDesc">Описание</label><input id="editMenuDesc" type="text" placeholder="Описание товара"></div>
    <div class="form-row">
      <div class="form-group"><label for="editMenuPrice">Цена (₽)</label><input id="editMenuPrice" type="number" placeholder="0" min="0"></div>
      <div class="form-group"><label for="editMenuCategory">Категория</label>
        <select id="editMenuCategory">
          <option value="pizza">🍕 Пицца</option>
          <option value="rolls">🍣 Роллы</option>
          <option value="lunch">🍱 Обеды</option>
          <option value="tea">🫖 Чай</option>
          <option value="coffee">☕ Кофе</option>
          <option value="lemonade">🍹 Лимонады</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label>Эмодзи</label>
      <div class="emoji-picker" id="editMenuEmojiPicker">
        <button type="button" class="emoji-option" data-emoji="🍕">🍕</button>
        <button type="button" class="emoji-option" data-emoji="🍣">🍣</button>
        <button type="button" class="emoji-option" data-emoji="🍱">🍱</button>
        <button type="button" class="emoji-option" data-emoji="☕">☕</button>
        <button type="button" class="emoji-option" data-emoji="🫖">🫖</button>
        <button type="button" class="emoji-option" data-emoji="🍹">🍹</button>
        <button type="button" class="emoji-option" data-emoji="🍝">🍝</button>
        <button type="button" class="emoji-option" data-emoji="🍗">🍗</button>
        <button type="button" class="emoji-option" data-emoji="🍲">🍲</button>
        <button type="button" class="emoji-option" data-emoji="🧀">🧀</button>
        <button type="button" class="emoji-option" data-emoji="🍍">🍍</button>
        <button type="button" class="emoji-option" data-emoji="🍓">🍓</button>
        <button type="button" class="emoji-option" data-emoji="🍋">🍋</button>
        <button type="button" class="emoji-option" data-emoji="🍊">🍊</button>
        <button type="button" class="emoji-option" data-emoji="🍦">🍦</button>
        <button type="button" class="emoji-option" data-emoji="🥛">🥛</button>
        <button type="button" class="emoji-option" data-emoji="🌿">🌿</button>
        <button type="button" class="emoji-option" data-emoji="🌶️">🌶️</button>
        <button type="button" class="emoji-option" data-emoji="🔥">🔥</button>
        <button type="button" class="emoji-option" data-emoji="🍽️">🍽️</button>
      </div>
    </div>
    <div class="form-group">
      <label><input type="checkbox" id="editMenuAvailable" checked> В наличии</label>
    </div>
    <div class="modal-actions">
      <button class="btn-primary" type="button" onclick="saveMenuItem()">💾 Сохранить</button>
      <button class="btn-secondary" type="button" onclick="closeEditMenuModal()">Отмена</button>
    </div>
  </div>
</div>

<!-- ===== ADMIN PANEL ===== -->
<div class="admin-panel" id="legacyAdminPanel">
  <div class="admin-modal">
    <button class="close-modal" onclick="closeAdmin()">×</button>
    <h2>⚙️ Панель управления заказами</h2>
    <div class="admin-stats">
      <div class="stat-card new"><div class="stat-num" id="statNew">0</div><div class="stat-label">Новые</div></div>
      <div class="stat-card cooking"><div class="stat-num" id="statCooking">0</div><div class="stat-label">Готовятся</div></div>
      <div class="stat-card delivery"><div class="stat-num" id="statDelivery">0</div><div class="stat-label">В доставке</div></div>
      <div class="stat-card done"><div class="stat-num" id="statDone">0</div><div class="stat-label">Выполнено</div></div>
      <div class="stat-card total"><div class="stat-num" id="statTotal">0</div><div class="stat-label">Всего</div></div>
    </div>
    <div class="orders-list" id="ordersList"></div>
  </div>
</div>

<!-- ===== TOAST ===== -->
<div class="toast" id="toast"></div>

<script>
// ==================== DATA ====================
const CATEGORIES = [
  { key: 'pizza', label: '🍕 Пицца' },
  { key: 'rolls', label: '🍣 Роллы' },
  { key: 'lunch', label: '🍱 Обеды' },
  { key: 'tea', label: '🫖 Чай' },
  { key: 'coffee', label: '☕ Кофе' },
  { key: 'lemonade', label: '🍹 Лимонады' }
];

const MENU = {
  pizza: [
    { id: 'p1', name: 'Маргарита', desc: 'Томатный соус, моцарелла, базилик', price: 450, emoji: '🍕' },
    { id: 'p2', name: 'Пепперони', desc: 'Пепперони, моцарелла, томатный соус', price: 550, emoji: '🍕' },
    { id: 'p3', name: 'Гавайская', desc: 'Курица, ананас, моцарелла', price: 520, emoji: '🍍' },
    { id: 'p4', name: 'Четыре сыра', desc: 'Моцарелла, пармезан, горгонзола, чеддер', price: 600, emoji: '🧀' }
  ],
  rolls: [
    { id: 'r1', name: 'Филадельфия', desc: 'Лосось, сливочный сыр, огурец', price: 350, emoji: '🍣' },
    { id: 'r2', name: 'Калифорния', desc: 'Краб, авокадо, икра тобико', price: 320, emoji: '🍣' },
    { id: 'r3', name: 'Запечённый ролл', desc: 'Лосось, сыр, соус унаги', price: 380, emoji: '🔥' },
    { id: 'r4', name: 'Спайси тунец', desc: 'Тунец, острый соус, огурец', price: 340, emoji: '🌶️' }
  ],
  lunch: [
    { id: 'l1', name: 'Бизнес-ланч', desc: 'Суп, салат, горячее, напиток', price: 450, emoji: '🍱' },
    { id: 'l2', name: 'Паста карбонара', desc: 'Спагетти, бекон, сливочный соус', price: 420, emoji: '🍝' },
    { id: 'l3', name: 'Куриный стейк', desc: 'Куриное филе, овощи гриль', price: 380, emoji: '🍗' },
    { id: 'l4', name: 'Борщ с пампушками', desc: 'Классический борщ, чесночные пампушки', price: 250, emoji: '🍲' }
  ],
  tea: [
    { id: 't1', name: 'Зелёный чай', desc: 'Свежезаваренный, с жасмином', price: 120, emoji: '🫖' },
    { id: 't2', name: 'Чёрный чай', desc: 'Классический, с бергамотом', price: 100, emoji: '🫖' },
    { id: 't3', name: 'Фруктовый чай', desc: 'Ягодный микс, мёд', price: 150, emoji: '🍓' },
    { id: 't4', name: 'Имбирный чай', desc: 'Имбирь, лимон, мёд', price: 140, emoji: '🍋' }
  ],
  coffee: [
    { id: 'c1', name: 'Эспрессо', desc: 'Крепкий, насыщенный', price: 150, emoji: '☕' },
    { id: 'c2', name: 'Капучино', desc: 'Молоко, молочная пенка', price: 200, emoji: '☕' },
    { id: 'c3', name: 'Латте', desc: 'Молоко, нежная пенка', price: 220, emoji: '🥛' },
    { id: 'c4', name: 'Раф', desc: 'Сливочный, ванильный', price: 250, emoji: '🍦' }
  ],
  lemonade: [
    { id: 'lm1', name: 'Классический лимонад', desc: 'Лимон, сахар, газировка', price: 180, emoji: '🍹' },
    { id: 'lm2', name: 'Мохито', desc: 'Лайм, мята, содовая', price: 200, emoji: '🌿' },
    { id: 'lm3', name: 'Ягодный лимонад', desc: 'Клубника, малина, лёд', price: 220, emoji: '🍓' },
    { id: 'lm4', name: 'Апельсиновый фреш', desc: 'Свежевыжатый апельсин', price: 190, emoji: '🍊' }
  ]
};

const STATUSES = {
  new: '🆕 Новый',
  cooking: '👨‍🍳 Готовится',
  delivery: '🛵 В доставке',
  done: '✅ Выполнен',
  cancelled: '❌ Отменён'
};

// ==================== STATE ====================
let cart = [];
let currentCategory = 'pizza';
let orders = JSON.parse(localStorage.getItem('magiyaOrders') || '[]');

// ==================== RENDER MENU ====================
function renderCategories() {
  const container = document.getElementById('categories');
  container.innerHTML = CATEGORIES.map(c =>
    `<button class="cat-btn ${c.key === currentCategory ? 'active' : ''}" onclick="setCategory('${c.key}')">${c.label}</button>`
  ).join('');
}

function setCategory(key) {
  currentCategory = key;
  renderCategories();
  renderMenu();
}

function renderMenu() {
  const grid = document.getElementById('menuGrid');
  const items = MENU[currentCategory] || [];
  grid.innerHTML = items.map(item => {
    const available = item.available !== false;
    return `
    <div class="product-card ${available?'':'unavailable'}">
      <div class="product-img">${item.emoji}${available?'':'<span class="soldout">Нет в наличии</span>'}</div>
      <div class="product-body">
        <div class="product-name">${item.name}</div>
        <div class="product-desc">${item.desc}</div>
        <div class="product-bottom">
          <span class="product-price">${item.price} ₽</span>
          <button class="add-btn" ${available?'':'disabled'} onclick="${available?`addToCart('${item.id}')`:''}">${available?'В корзину':'Нет в наличии'}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ==================== CART ====================
function findProduct(id) {
  for (const key in MENU) {
    const found = MENU[key].find(p => p.id === id);
    if (found) return found;
  }
  return null;
}

function addToCart(id) {
  const product = findProduct(id);
  if (!product || product.available === false) { showToast('⚠️ Товар сейчас недоступен'); return; }
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, emoji: product.emoji, qty: 1 });
  }
  updateCart();
  showToast(`✅ ${product.name} добавлен в корзину`);
}

function updateCart() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cartItems');
  if (cart.length === 0) {
    container.innerHTML = `<div class="empty-cart"><span class="emoji">🛒</span>Корзина пуста<br>Добавьте что-нибудь вкусное!</div>`;
    document.getElementById('cartTotal').textContent = 'Итого: 0 ₽';
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.emoji} ${item.name}</div>
        <div class="cart-item-price">${item.price} ₽</div>
      </div>
      <div class="qty-controls">
        <button class="qty-btn" onclick="changeQty('${item.id}', -1)">−</button>
        <span style="min-width:24px; text-align:center; font-weight:700;">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}', 1)">+</button>
      </div>
      <span style="font-weight:700; min-width:60px; text-align:right;">${item.price * item.qty} ₽</span>
    </div>
  `).join('');
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = `Итого: ${total} ₽`;
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  updateCart();
}

function openCart() {
  renderCart();
  document.getElementById('cartModal').classList.add('open');
}

function closeCart() {
  document.getElementById('cartModal').classList.remove('open');
}

// ==================== DELIVERY / PICKUP ====================
let deliveryType = 'delivery';

function setDeliveryType(type) {
  deliveryType = type;
  const deliveryOpt = document.getElementById('deliveryOption');
  const pickupOpt = document.getElementById('pickupOption');
  const addressGroup = document.getElementById('addressGroup');
  const pickupGroup = document.getElementById('pickupGroup');

  if (type === 'delivery') {
    deliveryOpt.classList.add('selected');
    pickupOpt.classList.remove('selected');
    addressGroup.classList.remove('delivery-hidden');
    pickupGroup.classList.add('delivery-hidden');
  } else {
    pickupOpt.classList.add('selected');
    deliveryOpt.classList.remove('selected');
    addressGroup.classList.add('delivery-hidden');
    pickupGroup.classList.remove('delivery-hidden');
  }
}

// ==================== ORDER TRACKING ====================
function openTracking(e) {
  if (e) e.preventDefault();
  document.getElementById('tracking').scrollIntoView({ behavior: 'smooth' });
}

function trackOrder() {
  const orderId = document.getElementById('trackingOrderId').value.trim().toUpperCase();
  const resultDiv = document.getElementById('trackingResult');

  if (!orderId) {
    resultDiv.innerHTML = '<div class="no-tracking-result"><span class="emoji">⚠️</span>Введите номер заказа</div>';
    return;
  }

  const order = orders.find(o => o.id.toUpperCase() === orderId);

  if (!order) {
    resultDiv.innerHTML = '<div class="no-tracking-result"><span class="emoji">🔍</span>Заказ не найден. Проверьте номер и попробуйте снова.</div>';
    return;
  }

  const statusOrder = ['new', 'cooking', 'delivery', 'done', 'cancelled'];
  const currentStatusIndex = statusOrder.indexOf(order.status);

  let timelineHTML = '';
  const statusIcons = { new: '🆕', cooking: '👨‍🍳', delivery: '🛵', done: '✅', cancelled: '❌' };
  const statusLabels = STATUSES;

  statusOrder.forEach((statusKey, index) => {
    const isActive = index === currentStatusIndex;
    const isDone = index < currentStatusIndex;
    const isCancelled = order.status === 'cancelled' && statusKey === 'cancelled';
    let stepClass = '';
    if (isCancelled) stepClass = 'active';
    else if (isDone) stepClass = 'done';
    else if (isActive) stepClass = 'active';

    timelineHTML += `
      <div class="timeline-step ${stepClass}">
        <div class="timeline-dot">${statusIcons[statusKey]}</div>
        <div class="timeline-info">
          <div class="timeline-title">${statusLabels[statusKey]}</div>
          ${isActive ? '<div class="timeline-time" style="color:var(--primary);font-weight:600;">Текущий статус</div>' : ''}
        </div>
        ${index < statusOrder.length - 1 ? '<div class="timeline-line"></div>' : ''}
      </div>`;
  });

  const deliveryLabel = order.deliveryType === 'pickup' ? '🏪 Самовывоз' : '🛵 Доставка';
  const deliveryDetail = order.deliveryType === 'pickup'
    ? (order.pickupTime === 'asap' ? 'Как можно скорее' : `Через ${order.pickupTime} минут`)
    : order.customer.address;

  resultDiv.innerHTML = `
    <div class="tracking-result">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:10px;">
        <h3 style="font-size:1.2rem;">📦 Заказ ${order.id}</h3>
        <span class="status-badge ${order.status}">${statusIcons[order.status]} ${statusLabels[order.status]}</span>
      </div>
      <div style="color:#888;font-size:.85rem;margin-bottom:14px;">🕐 ${order.time}</div>
      <div class="tracking-timeline">${timelineHTML}</div>
      <div class="tracking-order-info">
        <div class="row"><span>👤 Клиент</span><span class="val">${order.customer.name}</span></div>
        <div class="row"><span>📞 Телефон</span><span class="val">${order.customer.phone}</span></div>
        <div class="row"><span>🚚 Получение</span><span class="val">${deliveryLabel}</span></div>
        <div class="row"><span>📍 Детали</span><span class="val">${deliveryDetail}</span></div>
        <div class="row"><span>💳 Оплата</span><span class="val">${order.customer.payment}</span></div>
        ${order.customer.comment ? `<div class="row"><span>📝 Комментарий</span><span class="val">${order.customer.comment}</span></div>` : ''}
        <div class="row" style="border-top:2px solid #eee;padding-top:8px;margin-top:6px;"><span style="font-weight:700;">Итого</span><span class="val" style="color:var(--primary);font-size:1.1rem;">${order.total} ₽</span></div>
      </div>
      <div style="margin-top:14px;">
        <h4 style="margin-bottom:8px;font-size:.95rem;">Состав заказа:</h4>
        ${order.items.map(i => `<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:.9rem;"><span>${i.emoji} ${i.name} × ${i.qty}</span><span style="font-weight:600;">${i.price * i.qty} ₽</span></div>`).join('')}
      </div>
    </div>`;
}

// ==================== ORDER ====================
function placeOrder() {
  if (cart.length === 0) {
    showToast('⚠️ Корзина пуста');
    return;
  }
  const logged = currentUser();
  const name = document.getElementById('custName').value.trim() || (logged?.role === 'customer' ? logged.name : '');
  const phone = document.getElementById('custPhone').value.trim() || (logged?.role === 'customer' ? logged.phone : '');
  const address = document.getElementById('custAddress').value.trim();

  if (!name || !phone) {
    showToast('⚠️ Заполните имя и телефон');
    return;
  }
  if (deliveryType === 'delivery' && !address) {
    showToast('⚠️ Укажите адрес доставки');
    return;
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const order = {
    id: 'ORD-' + Date.now().toString().slice(-6),
    time: new Date().toLocaleString('ru-RU'),
    items: cart.map(i => ({ name: i.name, qty: i.qty, price: i.price, emoji: i.emoji })),
    total: total,
    deliveryType: deliveryType,
    pickupTime: deliveryType === 'pickup' ? document.getElementById('custPickupTime').value : null,
    customer: {
      name: name,
      phone: phone,
      address: address,
      payment: document.getElementById('custPayment').value === 'cash' ? 'Наличные' : 'Карта',
      comment: document.getElementById('custComment').value.trim()
    },
    status: 'new',
    customerId: currentUser()?.role === 'customer' ? currentUser().id : null
  };

  orders.unshift(order);
  saveOrders();
  cart = [];
  updateCart();
  closeCart();

  // Clear form
  document.getElementById('custName').value = '';
  document.getElementById('custPhone').value = '';
  document.getElementById('custAddress').value = '';
  document.getElementById('custComment').value = '';

  const deliveryMsg = deliveryType === 'pickup' ? 'ожидает вашего визита' : 'Ждите доставку.';
  showToast(`🎉 Заказ ${order.id} оформлен! ${deliveryMsg}`);
}

// ==================== ACCOUNTS / SHIFTS / MANAGEMENT ====================
const USERS_KEY = 'magiyaUsersV2';
const SHIFT_KEY = 'magiyaShiftsV2';
const SESSION_KEY = 'magiyaSessionV2';
const MENU_KEY = 'magiyaMenuV2';

let users = JSON.parse(localStorage.getItem(USERS_KEY) || 'null') || [];
// Проверяем, есть ли директор. Если нет — помечаем, что нужна регистрация
let directorExists = users.some(u => u.role === 'director');
let shifts = JSON.parse(localStorage.getItem(SHIFT_KEY) || '[]');
let savedMenu = JSON.parse(localStorage.getItem(MENU_KEY) || 'null');
let session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');

if (savedMenu) {
  for (const key of Object.keys(MENU)) {
    if (savedMenu[key]) MENU[key] = savedMenu[key];
  }
}

function saveUsers(){ localStorage.setItem(USERS_KEY, JSON.stringify(users)); }
function saveShifts(){ localStorage.setItem(SHIFT_KEY, JSON.stringify(shifts)); }
function saveMenu(){ localStorage.setItem(MENU_KEY, JSON.stringify(MENU)); }
function saveSession(){ localStorage.setItem(SESSION_KEY, JSON.stringify(session)); }

function currentUser(){ return session ? users.find(u => u.id === session.userId) : null; }
function roleLabel(role){
  return ({
    director:'👑 Директор',
    worker:'👷 Работник',
    bartender:'🍸 Бармен',
    sushi:'🍣 Сушист',
    customer:'👤 Клиент',
    staff:'👷 Работник'
  })[role] || role;
}
function isEmployee(role){ return ['worker','bartender','sushi','staff'].includes(role); }
function roleFullName(role){
  return ({
    director:'👑 Директор',
    worker:'👷 Работник',
    bartender:'🍸 Бармен',
    sushi:'🍣 Сушист'
  })[role] || role;
}


function openAccount(){
  const user=currentUser();
  if(!user){ openAuth('login'); return; }
  if(user.role==='director' || isEmployee(user.role)){ openStaff(); return; }
  const myOrders = orders.filter(o => o.customerId === user.id || o.customer.phone === user.phone);
  document.getElementById('authModal').classList.add('open');
  document.getElementById('authTitle').textContent='👤 Личный кабинет';
  document.getElementById('authBody').innerHTML=`
    <div class="account-box"><h3>${user.name}</h3><p>📞 ${user.phone}</p><p>🔑 Логин: ${user.login}</p></div>
    <h4 style="margin:14px 0 10px;font-size:1rem;">📦 Мои заказы (${myOrders.length})</h4>
    ${myOrders.length ? myOrders.slice(0,5).map(o => `
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px;border:1px solid #eee;border-radius:10px;margin-bottom:8px;">
        <div>
          <strong>${o.id}</strong> <span style="color:#888;font-size:.85rem;">${o.time}</span><br>
          <span style="font-size:.85rem;">${o.items.length} поз. · ${o.total} ₽</span>
        </div>
        <span class="status-badge ${o.status}">${STATUSES[o.status]}</span>
      </div>`).join('') : '<p style="color:#888;margin:14px 0;">Заказов пока нет</p>'}
    <button class="btn-primary" onclick="closeAuth();openCart()">🛒 Открыть корзину</button>
    <button class="btn-secondary" onclick="logout()">Выйти из аккаунта</button>`;
}
function closeAuth(){ document.getElementById('authModal').classList.remove('open'); }

function openAuth(mode='login'){
  document.getElementById('authModal').classList.add('open');
  const body = document.getElementById('authBody');
  if(mode === 'register'){
    document.getElementById('authTitle').textContent='📝 Регистрация клиента';
    body.innerHTML=`
      <div class="form-group"><label>Имя</label><input id="regName" placeholder="Ваше имя"></div>
      <div class="form-group"><label>Телефон</label><input id="regPhone" placeholder="+7 ..."></div>
      <div class="form-group"><label>Логин</label><input id="regLogin" placeholder="Логин"></div>
      <div class="form-group"><label>Пароль</label><input id="regPassword" type="password" placeholder="Пароль"></div>
      <button class="btn-primary" onclick="registerClient()">Зарегистрироваться</button>
      <button class="btn-secondary" onclick="openAuth('login')">У меня уже есть аккаунт</button>`;
  } else if(mode === 'staff'){
    if(!directorExists){
      // Директора нет — сразу показываем регистрацию
      openAuth('staffRegister');
      return;
    }
    document.getElementById('authTitle').textContent='🔐 Вход сотрудника';
    body.innerHTML=`
      <div class="form-group"><label>Логин</label><input id="staffLogin" placeholder="Логин"></div>
      <div class="form-group"><label>Пароль</label><input id="staffPassword" type="password" placeholder="Пароль"></div>
      <button class="btn-primary" onclick="loginUser(true)">Войти</button>
      <button class="btn-secondary" onclick="openAuth('staffRegister')">Регистрация директора</button>`;
  } else if(mode === 'staffRegister'){
    document.getElementById('authTitle').textContent='📝 Регистрация директора';
    body.innerHTML=`
      <div class="notice">Создайте аккаунт директора для доступа к админ-панели</div>
      <div class="form-group"><label>Имя</label><input id="dirName" placeholder="Ваше имя"></div>
      <div class="form-group"><label>Логин</label><input id="dirLogin" placeholder="Логин для входа"></div>
      <div class="form-group"><label>Пароль</label><input id="dirPassword" type="password" placeholder="Пароль"></div>
      <div class="form-group"><label>Повторите пароль</label><input id="dirPassword2" type="password" placeholder="Повторите пароль"></div>
      <button class="btn-primary" onclick="registerDirector()">Зарегистрировать директора</button>
      <button class="btn-secondary" onclick="openAuth('staff')">У меня уже есть аккаунт</button>`;
  } else {
    document.getElementById('authTitle').textContent='👤 Вход в аккаунт';
    body.innerHTML=`
      <div class="form-group"><label>Логин</label><input id="loginName" placeholder="Логин"></div>
      <div class="form-group"><label>Пароль</label><input id="loginPassword" type="password" placeholder="Пароль"></div>
      <button class="btn-primary" onclick="loginUser(false)">Войти</button>
      <button class="btn-secondary" onclick="openAuth('register')">Регистрация клиента</button>
      <button class="btn-secondary" onclick="openAuth('staff')">Вход сотрудника / директора</button>`;
  }
}

function registerClient(){
  const name=document.getElementById('regName').value.trim();
  const phone=document.getElementById('regPhone').value.trim();
  const login=document.getElementById('regLogin').value.trim();
  const password=document.getElementById('regPassword').value;
  if(!name||!phone||!login||!password){ showToast('⚠️ Заполните все поля'); return; }
  if(users.some(u=>u.login.toLowerCase()===login.toLowerCase())){ showToast('⚠️ Такой логин уже существует'); return; }
  const user={id:'u-'+Date.now(),name,phone,login,password,role:'customer'};
  users.push(user); saveUsers();
  session={userId:user.id}; saveSession(); closeAuth(); updateHeader();
  showToast('🎉 Аккаунт создан');
}

function registerDirector(){
  const name=document.getElementById('dirName').value.trim();
  const login=document.getElementById('dirLogin').value.trim();
  const password=document.getElementById('dirPassword').value;
  const password2=document.getElementById('dirPassword2').value;
  if(!name||!login||!password){ showToast('⚠️ Заполните все поля'); return; }
  if(password!==password2){ showToast('⚠️ Пароли не совпадают'); return; }
  if(users.some(u=>u.login.toLowerCase()===login.toLowerCase())){ showToast('⚠️ Такой логин уже существует'); return; }
  const user={id:'u-'+Date.now(),name,login,password,role:'director',phone:''};
  users.push(user); saveUsers();
  directorExists = true;
  session={userId:user.id}; saveSession(); closeAuth(); updateHeader();
  showToast('🎉 Директор зарегистрирован!');
  setTimeout(()=>openStaff(), 500);
}

function loginUser(staffMode){
  const login=document.getElementById(staffMode?'staffLogin':'loginName').value.trim();
  const password=document.getElementById(staffMode?'staffPassword':'loginPassword').value;
  const user=users.find(u=>String(u.login).toLowerCase()===login.toLowerCase() && u.password===password);
  if(!user){ showToast('❌ Неверный логин или пароль'); return; }
  if(staffMode && !isEmployee(user.role) && user.role!=='director'){ showToast('⛔ Только директор может войти в панель управления'); return; }
  session={userId:user.id}; saveSession(); closeAuth(); updateHeader();
  showToast(`👋 Добро пожаловать, ${user.name}`);
  if(isEmployee(user.role) || user.role==='director') openStaff();
}

function logout(){
  session=null; saveSession(); closeStaff(); updateHeader(); showToast('Вы вышли из аккаунта');
}

function updateHeader(){
  const btn=document.querySelector('.admin-toggle');
  const user=currentUser();
  btn.textContent=user ? `👤 ${user.name} · ${roleLabel(user.role)}` : '👤 Войти';
}

function openStaff(){
  const user=currentUser();
  if(!user){ openAuth('login'); return; }
  document.getElementById('staffPanel').classList.add('open');
  renderStaff('dashboard');
}
function closeStaff(){ document.getElementById('staffPanel').classList.remove('open'); }

function activeShift(){
  const user=currentUser();
  return shifts.find(s=>s.userId===user?.id && !s.end);
}
function startShift(){
  const user=currentUser();
  if(!user) return;
  if(activeShift()){ showToast('⚠️ Смена уже начата'); return; }
  shifts.unshift({id:'S-'+Date.now().toString().slice(-7),userId:user.id,userName:user.name,start:new Date().toISOString(),end:null,orders:0,total:0});
  saveShifts(); renderStaff('dashboard'); showToast('🟢 Смена начата');
}
function closeShift(){
  const s=activeShift();
  if(!s){ showToast('⚠️ Активной смены нет'); return; }
  s.end=new Date().toISOString();
  const shiftStart = new Date(s.start);
  const shiftEnd = new Date(s.end);
  // Считаем заказы, созданные за время смены
  const shiftOrders = orders.filter(o => {
    const orderTime = new Date(o.time.replace(/(\d{2})\.(\d{2})\.(\d{4}) (\d{2}:\d{2}:\d{2})/, '$3-$2-$1 $4'));
    return orderTime >= shiftStart && orderTime <= shiftEnd;
  });
  const done = shiftOrders.filter(o => o.status === 'done');
  s.orders = done.length;
  s.total = done.reduce((a, o) => a + o.total, 0);
  // Также считаем все заказы за текущий день
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayStr = today.toLocaleDateString('ru-RU');
  const todayOrders = orders.filter(o => {
    return o.time.includes(todayStr) || new Date(o.time.replace(/(\d{2})\.(\d{2})\.(\d{4}) (\d{2}:\d{2}:\d{2})/, '$3-$2-$1 $4')) >= today;
  });
  const todayDone = todayOrders.filter(o => o.status === 'done');
  s.dayOrders = todayDone.length;
  s.dayTotal = todayDone.reduce((a, o) => a + o.total, 0);
  saveShifts(); renderStaff('dashboard'); showToast('🔴 Смена закрыта, отчёт сохранён');
}

function renderStaff(tab='dashboard'){
  const user=currentUser();
  if(!user) return;
  const root=document.getElementById('staffContent');
  root.innerHTML=`
    <h2>⚙️ Админ-панель — ${roleLabel(user.role)}</h2>
    <div class="tabs">
      <button class="tab ${tab==='dashboard'?'active':''}" onclick="renderStaff('dashboard')">Смена</button>
      <button class="tab ${tab==='orders'?'active':''}" onclick="renderStaff('orders')">Заказы</button>
      <button class="tab ${tab==='menu'?'active':''}" onclick="renderStaff('menu')">Меню</button>
      <button class="tab ${tab==='reports'?'active':''}" onclick="renderStaff('reports')">Отчётность</button>
      ${user.role==='director'?'<button class="tab '+(tab==='users'?'active':'')+'" onclick="renderStaff(\'users\')">Сотрудники</button>':''}
      <button class="tab" onclick="logout()">Выйти</button>
    </div>
    <div id="staffTabBody"></div>`;
  const body=document.getElementById('staffTabBody');
  if(tab==='dashboard') renderShiftTab(body);
  if(tab==='orders') renderOrdersTab(body);
  if(tab==='menu') renderMenuTab(body);
  if(tab==='reports') renderReportsTab(body);
  if(tab==='users' && user.role==='director') renderUsersTab(body);
}

function renderShiftTab(body){
  const s=activeShift(), u=currentUser();
  body.innerHTML=`
    <div class="account-box ${s?'shift-active':''}">
      <h3>${s?'🟢 Смена активна':'⚪ Смена не начата'}</h3>
      <p><span class="badge ok">${roleLabel(u.role)}</span> — доступ к админ-панели разрешён.</p>
      <p>${s?'Начало: '+new Date(s.start).toLocaleString('ru-RU'):'Начните смену перед работой с кассой.'}</p>
      <div class="toolbar">
        ${s?'<button class="small-btn danger" onclick="closeShift()">🔴 Закрыть смену</button>':'<button class="small-btn primary" onclick="startShift()">🟢 Начать смену</button>'}
      </div>
    </div>
    <div class="report-grid">
      <div class="stat-card"><div class="stat-num">${orders.filter(o=>o.status==='new').length}</div><div class="stat-label">Новые заказы</div></div>
      <div class="stat-card"><div class="stat-num">${orders.filter(o=>o.status==='cooking').length}</div><div class="stat-label">Готовятся</div></div>
      <div class="stat-card"><div class="stat-num">${orders.filter(o=>o.status==='done').length}</div><div class="stat-label">Выполнено</div></div>
      <div class="stat-card"><div class="stat-num">${orders.reduce((a,o)=>a+o.total,0)} ₽</div><div class="stat-label">Оборот</div></div>
    </div>`;
}

function renderOrdersTab(body){
  const count=s=>orders.filter(o=>o.status===s).length;
  body.innerHTML=`
    <div class="admin-stats">
      <div class="stat-card new"><div class="stat-num">${count('new')}</div><div class="stat-label">Новые</div></div>
      <div class="stat-card cooking"><div class="stat-num">${count('cooking')}</div><div class="stat-label">Готовятся</div></div>
      <div class="stat-card delivery"><div class="stat-num">${count('delivery')}</div><div class="stat-label">В доставке</div></div>
      <div class="stat-card done"><div class="stat-num">${count('done')}</div><div class="stat-label">Выполнено</div></div>
      <div class="stat-card total"><div class="stat-num">${orders.reduce((a,o)=>a+o.total,0)} ₽</div><div class="stat-label">Оборот</div></div>
    </div>
    <div class="orders-list" id="staffOrdersList"></div>`;
  const list=document.getElementById('staffOrdersList');
  list.innerHTML=orders.length?orders.map(o=>{
    const deliveryLabel = o.deliveryType === 'pickup' ? '🏪 Самовывоз' : '🛵 Доставка';
    const deliveryDetail = o.deliveryType === 'pickup'
      ? (o.pickupTime === 'asap' ? 'Как можно скорее' : `Через ${o.pickupTime} мин`)
      : o.customer.address;
    return `
    <div class="order-card status-${o.status}">
      <div class="order-top"><span class="order-id">📦 ${o.id}</span><span class="order-time">🕐 ${o.time}</span></div>
      <div class="order-items">${o.items.map(i=>`<div class="order-item-line"><span>${i.emoji} ${i.name} × ${i.qty}</span><span>${i.price*i.qty} ₽</span></div>`).join('')}</div>
      <div class="order-customer"><b>👤 ${o.customer.name}</b><br>📞 ${o.customer.phone}<br>🚚 ${deliveryLabel}: ${deliveryDetail}<br>💳 ${o.customer.payment}${o.customer.comment?'<br>📝 '+o.customer.comment:''}</div>
      <div class="order-total">Итого: ${o.total} ₽</div>
      <div class="order-actions">
        <select class="status-select" onchange="updateOrderStatus('${o.id}',this.value)">
          ${Object.entries(STATUSES).map(([k,v])=>`<option value="${k}" ${o.status===k?'selected':''}>${v}</option>`).join('')}
        </select>
        <button class="delete-order" onclick="deleteOrder('${o.id}')">🗑️ Удалить</button>
      </div>
    </div>`;
  }).join(''):'<div class="no-orders">📭 Заказов пока нет</div>';
}

function renderMenuTab(body){
  let rows=[];
  for(const key in MENU){
    for(const item of MENU[key]) rows.push({...item,category:key});
  }
  body.innerHTML=`
    <div class="toolbar">
      <button class="small-btn primary" onclick="openAddMenuItem()">➕ Добавить товар</button>
      <button class="small-btn gray" onclick="saveMenu();showToast('💾 Меню сохранено')">💾 Сохранить</button>
    </div>
    <div class="table-wrap"><table><thead><tr><th>Категория</th><th>Товар</th><th>Цена</th><th>Статус</th><th>Действия</th></tr></thead><tbody>
    ${rows.map(item=>`<tr>
      <td>${(CATEGORIES.find(c=>c.key===item.category)||{}).label||item.category}</td>
      <td>${item.emoji} ${item.name}<br><small>${item.desc}</small></td>
      <td>${item.price} ₽</td>
      <td><span class="badge ${item.available===false?'off':'ok'}">${item.available===false?'Нет в наличии':'В наличии'}</span></td>
      <td>
        <button class="small-btn gray" onclick="editMenuItem('${item.id}')">✏️</button>
        <button class="small-btn ${item.available===false?'primary':'danger'}" onclick="toggleMenuItem('${item.id}')">${item.available===false?'Показать':'Скрыть'}</button>
        <button class="small-btn danger" onclick="deleteMenuItem('${item.id}')">🗑️</button>
      </td>
    </tr>`).join('')}
    </tbody></table></div>`;
}

function findMenuLocation(id){
  for(const key in MENU){ const index=MENU[key].findIndex(p=>p.id===id); if(index>=0)return {key,index,item:MENU[key][index]}; }
  return null;
}
function toggleMenuItem(id){
  const loc=findMenuLocation(id); if(!loc)return;
  loc.item.available=loc.item.available===false;
  saveMenu(); renderStaff('menu'); renderMenu(); showToast(loc.item.available?'🟢 Товар снова доступен':'🔴 Товар скрыт');
}
function deleteMenuItem(id){
  if(!confirm('Удалить товар из меню?'))return;
  const loc=findMenuLocation(id); if(!loc)return;
  MENU[loc.key].splice(loc.index,1); saveMenu(); renderStaff('menu'); renderMenu(); showToast('🗑️ Товар удалён');
}
let editingMenuId = null;
let selectedEmoji = '🍽️';

function openEditMenuItem(id){
  const loc=findMenuLocation(id); if(!loc)return;
  editingMenuId = id;
  selectedEmoji = loc.item.emoji || '🍽️';
  document.getElementById('editMenuTitle').textContent = '✏️ Редактировать товар';
  document.getElementById('editMenuName').value = loc.item.name;
  document.getElementById('editMenuDesc').value = loc.item.desc;
  document.getElementById('editMenuPrice').value = loc.item.price;
  document.getElementById('editMenuCategory').value = loc.key;
  document.getElementById('editMenuAvailable').checked = loc.item.available !== false;
  updateEmojiSelection();
  document.getElementById('editMenuModal').classList.add('open');
}

function openAddMenuItem(){
  editingMenuId = null;
  selectedEmoji = '🍽️';
  document.getElementById('editMenuTitle').textContent = '➕ Добавить товар';
  document.getElementById('editMenuName').value = '';
  document.getElementById('editMenuDesc').value = '';
  document.getElementById('editMenuPrice').value = '';
  document.getElementById('editMenuCategory').value = 'pizza';
  document.getElementById('editMenuAvailable').checked = true;
  updateEmojiSelection();
  document.getElementById('editMenuModal').classList.add('open');
}

function updateEmojiSelection(){
  document.querySelectorAll('#editMenuEmojiPicker .emoji-option').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.emoji === selectedEmoji);
  });
}

function saveMenuItem(){
  const name = document.getElementById('editMenuName').value.trim();
  const desc = document.getElementById('editMenuDesc').value.trim();
  const price = Math.max(0, Number(document.getElementById('editMenuPrice').value) || 0);
  const category = document.getElementById('editMenuCategory').value;
  const available = document.getElementById('editMenuAvailable').checked;

  if(!name){ showToast('⚠️ Введите название товара'); return; }
  if(price <= 0){ showToast('⚠️ Укажите корректную цену'); return; }
  if(!MENU[category]){ showToast('⚠️ Неизвестная категория'); return; }

  if(editingMenuId){
    const loc = findMenuLocation(editingMenuId);
    if(!loc) return;
    loc.item.name = name;
    loc.item.desc = desc;
    loc.item.price = price;
    loc.item.emoji = selectedEmoji;
    loc.item.available = available;
    showToast('✏️ Товар обновлён');
  } else {
    MENU[category].push({
      id: 'x-' + Date.now(),
      name, desc, price,
      emoji: selectedEmoji,
      available: true
    });
    showToast('➕ Товар добавлен');
  }

  saveMenu();
  closeEditMenuModal();
  renderStaff('menu');
  renderMenu();
}

function editMenuItem(id){
  openEditMenuItem(id);
}

function deleteMenuItem(id){
  if(!confirm('Удалить товар из меню?'))return;
  const loc=findMenuLocation(id); if(!loc)return;
  MENU[loc.key].splice(loc.index,1); saveMenu(); renderStaff('menu'); renderMenu(); showToast('🗑️ Товар удалён');
}

function renderReportsTab(body){
  const done=orders.filter(o=>o.status==='done');
  const revenue=done.reduce((a,o)=>a+o.total,0);
  const allRevenue=orders.reduce((a,o)=>a+o.total,0);
  const avg=done.length?Math.round(revenue/done.length):0;
  body.innerHTML=`
    <div class="report-grid">
      <div class="stat-card"><div class="stat-num">${orders.length}</div><div class="stat-label">Всего заказов</div></div>
      <div class="stat-card"><div class="stat-num">${done.length}</div><div class="stat-label">Завершено</div></div>
      <div class="stat-card"><div class="stat-num">${revenue} ₽</div><div class="stat-label">Выручка</div></div>
      <div class="stat-card"><div class="stat-num">${avg} ₽</div><div class="stat-label">Средний чек</div></div>
    </div>
    <div class="account-box"><h3>📊 Сводка по сменам</h3>
      <div class="table-wrap"><table><thead><tr><th>Сотрудник</th><th>Начало</th><th>Конец</th><th>Заказов (смена)</th><th>Сумма (смена)</th><th>Заказов (день)</th><th>Сумма (день)</th></tr></thead><tbody>
      ${shifts.map(s=>`<tr><td>${s.userName}</td><td>${new Date(s.start).toLocaleString('ru-RU')}</td><td>${s.end?new Date(s.end).toLocaleString('ru-RU'):'🟢 Активна'}</td><td>${s.orders}</td><td>${s.total} ₽</td><td>${s.dayOrders||s.orders}</td><td>${s.dayTotal?s.dayTotal+' ₽':s.total+' ₽'}</td></tr>`).join('')||'<tr><td colspan="7">Смен пока нет</td></tr>'}
      </tbody></table></div>
    </div>
    <div class="account-box"><h3>💰 Оборот всех заказов</h3><p><b>${allRevenue} ₽</b> — включая заказы, которые ещё не завершены.</p></div>`;
}

function renderUsersTab(body){
  const staff=users.filter(u=>u.role!=='customer');
  body.innerHTML=`
    <div class="toolbar"><button class="small-btn primary" type="button" onclick="openStaffUserModal()">➕ Выдать должность</button></div>
    <div class="table-wrap"><table><thead><tr><th>Имя</th><th>Телефон</th><th>Логин</th><th>Должность</th><th>Действия</th></tr></thead><tbody>
    ${staff.map(u=>`<tr><td>${u.name}</td><td>${u.phone||'—'}</td><td>${u.login}</td><td>${roleLabel(u.role)}</td><td>${u.id!=='u-director'?`<button class="small-btn danger" onclick="deleteStaffUser('${u.id}')">Удалить</button>`:'Основной аккаунт'}</td></tr>`).join('')}
    </tbody></table></div>`;
}
function openStaffUserModal(){
  const user=currentUser();
  if(!user || user.role!=='director'){ showToast('⛔ Выдать должность может только директор'); return; }
  document.getElementById('staffUserName').value='';
  document.getElementById('staffUserPhone').value='';
  document.getElementById('staffUserLogin').value='';
  document.getElementById('staffUserPassword').value='';
  document.getElementById('staffUserRole').value='worker';
  document.getElementById('staffUserModal').classList.add('open');
  setTimeout(()=>document.getElementById('staffUserName').focus(),50);
}
function closeStaffUserModal(){
  const modal=document.getElementById('staffUserModal');
  if(modal) modal.classList.remove('open');
}

function closeEditMenuModal(){
  const modal=document.getElementById('editMenuModal');
  if(modal) modal.classList.remove('open');
  editingMenuId = null;
}

function closeAdmin(){
  document.getElementById('legacyAdminPanel').classList.remove('open');
}
function submitStaffUser(){
  const name=document.getElementById('staffUserName').value.trim();
  const phone=document.getElementById('staffUserPhone').value.trim();
  const login=document.getElementById('staffUserLogin').value.trim();
  const password=document.getElementById('staffUserPassword').value;
  const role=document.getElementById('staffUserRole').value;
  if(!name || !phone || !login || !password){ showToast('⚠️ Заполните все поля: имя, телефон, логин и пароль'); return; }
  if(password.length < 4){ showToast('⚠️ Пароль должен быть не короче 4 символов'); return; }
  if(!['worker','bartender','sushi'].includes(role)){ showToast('⚠️ Выберите корректную должность'); return; }
  if(users.some(u=>String(u.login).toLowerCase()===login.toLowerCase())){ showToast('⚠️ Такой логин уже занят'); return; }
  users.push({id:'u-'+Date.now(),name,login,password,role,phone});
  saveUsers();
  closeStaffUserModal();
  renderStaff('users');
  showToast('✅ Должность выдана');
}
function deleteStaffUser(id){
  if(!confirm('Удалить сотрудника?'))return;
  users=users.filter(u=>u.id!==id); saveUsers(); renderStaff('users'); showToast('🗑️ Пользователь удалён');
}

function updateOrderStatus(id,status){
  const order=orders.find(o=>o.id===id);
  if(order){ order.status=status; saveOrders(); renderStaff('orders'); showToast(`Статус заказа ${id}: ${STATUSES[status]}`); }
}
function deleteOrder(id){
  if(confirm(`Удалить заказ ${id}?`)){ orders=orders.filter(o=>o.id!==id); saveOrders(); renderStaff('orders'); showToast('🗑️ Заказ удалён'); }
}
function saveOrders(){ localStorage.setItem('magiyaOrders',JSON.stringify(orders)); }

// ==================== TOAST ====================
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

// ==================== INIT ====================
for (const key in MENU) MENU[key].forEach(p => { if (typeof p.available === 'undefined') p.available = true; });
saveMenu();
renderCategories();
renderMenu();
updateCart();
updateHeader();

// Close modal on overlay click
document.getElementById('staffUserModal').addEventListener('click', function(e) {
  if (e.target === this) closeStaffUserModal();
});
document.getElementById('cartModal').addEventListener('click', function(e) {
  if (e.target === this) closeCart();
});
document.getElementById('editMenuModal').addEventListener('click', function(e) {
  if (e.target === this) closeEditMenuModal();
});

// Emoji picker
document.getElementById('editMenuEmojiPicker').addEventListener('click', function(e) {
  const btn = e.target.closest('.emoji-option');
  if (btn) {
    selectedEmoji = btn.dataset.emoji;
    updateEmojiSelection();
  }
});

// Escape key closes modals
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeCart();
    closeAdmin();
    closeEditMenuModal();
  }
});
</script>
</body>
</html>