/* ============================================================
   International Agro Business Forum — interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- HERO SLIDER ---------- */
  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var dotsWrap = document.getElementById("dots");
  var current = 0;
  var timer = null;

  if (slides.length && dotsWrap) {
    slides.forEach(function (_, i) {
      var b = document.createElement("button");
      b.className = "dot" + (i === 0 ? " is-active" : "");
      b.setAttribute("aria-label", "Slayd " + (i + 1));
      b.addEventListener("click", function () { go(i); });
      dotsWrap.appendChild(b);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);

    function go(i) {
      slides[current].classList.remove("is-active");
      dots[current].classList.remove("is-active");
      current = (i + slides.length) % slides.length;
      slides[current].classList.add("is-active");
      dots[current].classList.add("is-active");
      restart();
    }
    function next() { go(current + 1); }
    function prev() { go(current - 1); }
    function restart() { clearInterval(timer); timer = setInterval(next, 6500); }

    var nextBtn = document.getElementById("next");
    var prevBtn = document.getElementById("prev");
    if (nextBtn) nextBtn.addEventListener("click", next);
    if (prevBtn) prevBtn.addEventListener("click", prev);
    restart();
  }

  /* ---------- MOBILE NAV ---------- */
  var toggle = document.getElementById("navToggle");
  var navlist = document.getElementById("navlist");
  if (toggle && navlist) {
    toggle.addEventListener("click", function () {
      navlist.classList.toggle("is-open");
    });
    navlist.addEventListener("click", function (e) {
      if (e.target.tagName === "A") navlist.classList.remove("is-open");
    });
  }

  /* ---------- STICKY NAV STATE ---------- */
  var nav = document.getElementById("mainnav");
  var totop = document.getElementById("totop");
  window.addEventListener("scroll", function () {
    var y = window.pageYOffset;
    if (nav) nav.classList.toggle("is-stuck", y > 260);
    if (totop) totop.classList.toggle("is-visible", y > 600);
  });
  if (totop) totop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- SCROLLSPY (active nav link) ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll(".navlist a"));
  var sections = links
    .map(function (l) { return document.querySelector(l.getAttribute("href")); })
    .filter(Boolean);
  function spy() {
    var pos = window.pageYOffset + 140;
    var idx = 0;
    sections.forEach(function (s, i) { if (s.offsetTop <= pos) idx = i; });
    links.forEach(function (l) { l.classList.remove("is-active"); });
    if (links[idx]) links[idx].classList.add("is-active");
  }
  window.addEventListener("scroll", spy);
  spy();

  /* ---------- SPEAKER TABS ---------- */
  var tabWrap = document.getElementById("speakerTabs");
  if (tabWrap) {
    tabWrap.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      Array.prototype.slice.call(tabWrap.children).forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      document.querySelectorAll(".speaker-group").forEach(function (g) { g.classList.remove("is-active"); });
      var target = document.getElementById(btn.dataset.group);
      if (target) target.classList.add("is-active");
    });
  }

  /* ---------- GALLERY LIGHTBOX ---------- */
  var figures = Array.prototype.slice.call(document.querySelectorAll("#gallery-grid figure, .panel-slide__media[data-src]"));
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbIndex = 0;
  if (figures.length && lb) {
    var srcs = figures.map(function (f) { return f.dataset.src; });
    function open(i) {
      lbIndex = (i + srcs.length) % srcs.length;
      lbImg.src = srcs[lbIndex];
      lb.classList.add("is-open");
    }
    function close() { lb.classList.remove("is-open"); }
    figures.forEach(function (f, i) { f.addEventListener("click", function () { open(i); }); });
    document.getElementById("lbClose").addEventListener("click", close);
    document.getElementById("lbNext").addEventListener("click", function () { open(lbIndex + 1); });
    document.getElementById("lbPrev").addEventListener("click", function () { open(lbIndex - 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") open(lbIndex + 1);
      if (e.key === "ArrowLeft") open(lbIndex - 1);
    });
  }

  /* ---------- REVEAL ON SCROLL ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add("is-in"); });
  }

  /* ---------- PANEL SLIDER (transform track: drag + arrows) ---------- */
  Array.prototype.slice.call(document.querySelectorAll(".panel-slider-wrap")).forEach(function (wrap) {
    var slider = wrap.querySelector(".panel-slider");
    var track = wrap.querySelector(".panel-track");
    if (!slider || !track) return;
    var offset = 0, down = false, startX = 0, startOffset = 0, moved = false;

    function maxOffset() { return Math.max(0, track.scrollWidth - slider.clientWidth); }
    function step() {
      var card = track.querySelector(".panel-slide");
      return card ? card.getBoundingClientRect().width + 22 : 320;
    }
    function clamp(v) { return Math.min(maxOffset(), Math.max(0, v)); }
    function render() { track.style.transform = "translateX(" + (-offset) + "px)"; }
    function go(v) { offset = clamp(v); render(); }

    var prev = wrap.querySelector(".pslider-arrow--prev");
    var next = wrap.querySelector(".pslider-arrow--next");
    if (prev) prev.addEventListener("click", function () { go(offset - step()); });
    if (next) next.addEventListener("click", function () { go(offset + step()); });

    track.addEventListener("pointerdown", function (e) {
      if (e.button != null && e.button !== 0) return;
      down = true; moved = false; startX = e.clientX; startOffset = offset;
      track.classList.add("is-dragging");
    });
    document.addEventListener("pointermove", function (e) {
      if (!down) return;
      var dx = e.clientX - startX;
      if (Math.abs(dx) > 6) moved = true;
      offset = clamp(startOffset - dx);
      render();
    });
    function release() { if (!down) return; down = false; track.classList.remove("is-dragging"); }
    document.addEventListener("pointerup", release);
    document.addEventListener("pointercancel", release);
    // suppress lightbox click if it was a drag
    track.addEventListener("click", function (e) {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);
    window.addEventListener("resize", function () { go(offset); });
  });
})();
