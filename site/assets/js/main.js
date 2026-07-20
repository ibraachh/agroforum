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

    // swipe (arrows are hidden on phones)
    var sliderEl = document.querySelector(".slider");
    if (sliderEl) {
      var swipeX = null;
      sliderEl.addEventListener("pointerdown", function (e) { swipeX = e.clientX; });
      sliderEl.addEventListener("pointerup", function (e) {
        if (swipeX == null) return;
        var dx = e.clientX - swipeX;
        swipeX = null;
        if (Math.abs(dx) < 45) return;
        if (dx < 0) next(); else prev();
      });
      sliderEl.addEventListener("pointercancel", function () { swipeX = null; });
    }
  }

  /* ---------- MOBILE NAV ---------- */
  var toggle = document.getElementById("navToggle");
  var navlist = document.getElementById("navlist");
  if (toggle && navlist) {
    toggle.addEventListener("click", function () {
      var opening = !navlist.classList.contains("is-open");
      navlist.classList.toggle("is-open");
      // the menu scrolls internally and keeps its position between opens —
      // always start from the top so the layout never "jumps"
      if (opening) navlist.scrollTop = 0;
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
    // let search scroll a hidden slide into view
    wrap.__showSlide = function (el) { if (track.contains(el)) go(el.offsetLeft); };
  });

  /* ---------- SITE SEARCH ---------- */
  (function () {
    var box = document.getElementById("searchbox");
    var input = document.getElementById("searchInput");
    var out = document.getElementById("searchResults");
    var openBtn = document.getElementById("navSearch");
    var closeBtn = document.getElementById("searchClose");
    if (!box || !input || !out || !openBtn) return;

    function t(s) { return window.IABF_I18N ? window.IABF_I18N.t(s) : s; }

    /* fold Azerbaijani/Turkish diacritics so "muzakire" finds "müzakirə" */
    var FOLD = { "ə": "e", "ı": "i", "İ": "i", "ş": "s", "ç": "c", "ğ": "g", "ö": "o", "ü": "u", "â": "a", "î": "i", "û": "u" };
    function norm(s) {
      return s.toLowerCase().replace(/[əıİşçğöüâîû]/g, function (c) { return FOLD[c] || c; });
    }

    var BLOCKS = ".docrow, .panel-slide, .speaker, .leaf-person, .partner, .edition";
    var index = [];

    function build() {
      index = [];

      // section headings — not every section wraps its h2 in .section-head
      document.querySelectorAll("section[id]").forEach(function (sec) {
        var h = sec.querySelector("h2");
        if (!h) return;
        var eyebrow = sec.querySelector(".eyebrow");
        var lead = sec.querySelector(".section-head p, .sponsor-cta__text p, p");
        index.push({
          title: h.textContent.trim(),
          context: eyebrow ? eyebrow.textContent.trim() : "",
          text: (h.textContent + " " + (lead ? lead.textContent : "")).replace(/\s+/g, " ").trim(),
          el: sec, block: null
        });
      });

      // content blocks
      document.querySelectorAll(BLOCKS).forEach(function (b) {
        var head = b.querySelector("h2, h3, h4, b, strong");
        if (!head) return;
        var sec = b.closest("section[id]");
        var secH = sec ? sec.querySelector(".section-head h2") : null;
        index.push({
          title: head.textContent.trim(),
          context: secH ? secH.textContent.trim() : "",
          text: b.textContent.replace(/\s+/g, " ").trim(),
          el: b,
          block: b
        });
      });

      index.forEach(function (it) { it.hay = norm(it.title + " " + it.context + " " + it.text); });
    }

    function snippet(it, q) {
      // drop the title from the body so the snippet doesn't repeat the heading
      var body = it.text.replace(/\s+/g, " ").split(it.title).join(" ").replace(/\s+/g, " ").trim();
      if (body.length <= 120) return body;
      var i = norm(body).indexOf(q);
      if (i < 0) return body.slice(0, 120) + "…";
      var from = Math.max(0, i - 40);
      return (from ? "…" : "") + body.slice(from, from + 120) + "…";
    }

    function render(q) {
      out.innerHTML = "";
      if (q.length < 2) {
        out.innerHTML = '<p class="searchbox__empty">' + t("Ən azı 2 hərf yazın") + "</p>";
        return;
      }
      var nq = norm(q);
      var hits = index.filter(function (it) { return it.hay.indexOf(nq) !== -1; });

      // title matches first
      hits.sort(function (a, b) {
        var at = norm(a.title).indexOf(nq) !== -1 ? 0 : 1;
        var bt = norm(b.title).indexOf(nq) !== -1 ? 0 : 1;
        return at - bt;
      });
      hits = hits.slice(0, 12);

      if (!hits.length) {
        out.innerHTML = '<p class="searchbox__empty">' + t("Nəticə tapılmadı") + "</p>";
        return;
      }
      hits.forEach(function (it) {
        var a = document.createElement("button");
        a.type = "button";
        a.className = "searchbox__hit";
        a.innerHTML =
          (it.context ? '<span class="searchbox__ctx">' + it.context + "</span>" : "") +
          "<b>" + it.title + "</b>" +
          '<span class="searchbox__snip">' + snippet(it, nq) + "</span>";
        a.addEventListener("click", function () { goTo(it); });
        out.appendChild(a);
      });
    }

    function goTo(it) {
      close();
      // if the hit sits inside a horizontal carousel, bring it into the track first
      var wrap = it.block && it.block.closest(".panel-slider-wrap");
      if (wrap && wrap.__showSlide) wrap.__showSlide(it.block);

      var target = wrap ? wrap.closest("section[id]") : it.el;
      // plain scrollTo — `html { scroll-behavior: smooth }` in the CSS animates it
      var y = target.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo(0, Math.max(0, y));

      if (it.block) {
        it.block.classList.add("is-found");
        setTimeout(function () { it.block.classList.remove("is-found"); }, 2200);
      }
    }

    function open() {
      build();
      box.classList.add("is-open");
      document.body.style.overflow = "hidden";
      input.value = "";
      render("");
      setTimeout(function () { input.focus(); }, 40);
    }
    function close() {
      box.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    openBtn.addEventListener("click", open);
    var menuBtn = document.getElementById("menuSearch");
    if (menuBtn) menuBtn.addEventListener("click", function () {
      var navlist = document.getElementById("navlist");
      if (navlist) navlist.classList.remove("is-open");
      open();
    });
    if (closeBtn) closeBtn.addEventListener("click", close);
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    input.addEventListener("input", function () { render(input.value.trim()); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var first = out.querySelector(".searchbox__hit");
        if (first) first.click();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("is-open")) close();
    });
    document.addEventListener("iabf:langchange", function () {
      if (box.classList.contains("is-open")) render(input.value.trim());
    });
  })();
})();
