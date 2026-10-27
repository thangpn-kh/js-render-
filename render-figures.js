/*
 * render-figures.js: vẽ các hình JSX trong HTML câu hỏi.
 * Cần nhúng trước: https://cdn.jsdelivr.net/gh/thangpn-kh/js-render-@main/jsx-figure-v1.js
 *
 *   RenderFigures.render(el)    vẽ mọi .jsx-figure[data-figure] trong el (gọi lại nhiều lần an toàn)
 *   RenderFigures.observe(el)   tự vẽ khi HTML trong el bị thay đổi (React / Vue / innerHTML động)
 */
(function (global) {
  'use strict';

  var SELECTOR = '.jsx-figure[data-figure]';

  function parse(el) {
    try {
      return JSON.parse(el.getAttribute('data-figure')); // trình duyệt đã giải mã &quot; thành "
    } catch (e) {
      return null;
    }
  }

  function note(el, text) {
    el.setAttribute('data-rendered', 'error');
    el.textContent = text;
    el.style.cssText = 'font:12px system-ui,sans-serif;color:#94a3b8;padding:4px 0';
  }

  // Vẽ một thẻ. Trả về Promise<boolean>: true nếu vẽ được.
  function renderOne(el) {
    if (el.getAttribute('data-rendered')) return Promise.resolve(false); // đã vẽ hoặc đang vẽ
    var figure = parse(el);
    if (!figure) { note(el, 'Không đọc được dữ liệu hình.'); return Promise.resolve(false); }
    el.setAttribute('data-rendered', 'pending');
    return Promise.resolve(global.JsxFigure.mount(el, figure)).then(function (ok) {
      el.setAttribute('data-rendered', ok ? 'ok' : 'empty');
      return !!ok;
    }, function () {
      note(el, 'Không vẽ được hình.');
      return false;
    });
  }

  // Thư viện có thể chưa tải xong (script async): đợi tối đa 10 giây.
  function whenReady(fn) {
    if (global.JsxFigure) return fn();
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (global.JsxFigure) { clearInterval(timer); fn(); }
      else if (tries > 100) { clearInterval(timer); if (global.console) console.warn('[RenderFigures] jsx-figure-v1.js chưa được nạp'); }
    }, 100);
  }

  function render(root) {
    root = root || document;
    return new Promise(function (resolve) {
      whenReady(function () {
        var jobs = Array.prototype.map.call(root.querySelectorAll(SELECTOR), renderOne);
        Promise.all(jobs).then(function (r) { resolve(r.filter(Boolean).length); });
      });
    });
  }

  function observe(root) {
    var busy = false;
    var mo = new MutationObserver(function () {
      if (busy) return;
      busy = true;
      setTimeout(function () { busy = false; render(root); }, 0);
    });
    mo.observe(root, { childList: true, subtree: true });
    render(root);
    return mo;
  }

  global.RenderFigures = { render: render, observe: observe };
})(window);
