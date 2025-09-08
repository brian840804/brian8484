
// === PATCH v13 (2025-09-08): Click Silk Road route to open the same teach panel as the
// "西方食材進入中國" event marker. 追加式補丁，無需改動原檔內容。 ===
(function () {
  try {
    // 嘗試暴露 map 與 events（若原檔有宣告為區域變數）
    if (typeof window !== 'undefined') {
      try { if (typeof map !== 'undefined') window.__HFD_MAP__ = map; } catch (e) {}
      try { if (Array.isArray(events)) window.__HFD_EVENTS__ = events; } catch (e) {}
    }

    var m = (typeof window !== 'undefined') ? window.__HFD_MAP__ : null;
    if (!m || typeof L === 'undefined') return;

    // 以事件名稱打開右側教學面板
    function openTeachPanelByName(name) {
      var evs = (window.__HFD_EVENTS__ || []);
      var ev = evs.find(function (e) { return e && String(e.name).trim() === name; });
      if (!ev) { console.warn('找不到事件：', name); return; }

      var panel = document.getElementById('teach-panel');
      var titleEl = document.getElementById('teach-panel-title');
      var contentEl = document.getElementById('teach-panel-content');
      if (!panel || !titleEl || !contentEl) { console.warn('缺少教學面板 DOM'); return; }

      // 標題
      titleEl.textContent = ev.name;

      // 內容（面板基本資訊 + 展開區塊內容）
      var base = (ev.panel && ev.panel.content) ? ev.panel.content : '';
      var extra = (typeof generateExpandedContent === 'function') ? generateExpandedContent(ev) : '';

      contentEl.innerHTML = base + extra + '<button class="expand-btn" id="__tp_expand">展開</button>';
      panel.classList.add('visible');

      // 展開/收合切換
      setTimeout(function () {
        var btn = document.getElementById('__tp_expand');
        if (btn) {
          btn.addEventListener('click', function () {
            panel.classList.toggle('expanded');
            var expanded = panel.classList.contains('expanded');
            btn.textContent = expanded ? '收合' : '展開';
            if (expanded) btn.classList.add('collapse'); else btn.classList.remove('collapse');
          });
        }
      }, 0);
    }

    // 簡化版絲路路徑座標（與原檔一致邏輯：經由中亞至伊斯坦堡，含馬什哈德）
    var SILK_ROAD = [
      [34.3416, 108.9398], // 西安
      [40.1421, 94.6616],  // 敦煌
      [39.4704, 75.9898],  // 喀什
      [39.6542, 66.9597],  // 撒馬爾罕
      [36.2605, 59.6168],  // 馬什哈德（與原事件定位一致）
      [35.6892, 51.3890],  // 德黑蘭
      [33.3128, 44.3615],  // 巴格達
      [36.2010, 37.1612],  // 阿勒坡
      [36.2056, 36.1606],  // 安提阿一帶
      [41.0082, 28.9784]   // 伊斯坦堡
    ];

    // 嘗試尋找既有的絲路 polyline，若找不到就新增一條
    var silkLayer = null;
    m.eachLayer(function (layer) {
      if (!layer || typeof layer.getLatLngs !== 'function' || silkLayer) return;
      try {
        var latlngs = layer.getLatLngs();
        var flat = Array.isArray(latlngs[0]) ? latlngs.flat(2) : latlngs;
        if (!flat || flat.length < 8) return;

        // 粗略特徵：含西安/馬什哈德/伊斯坦堡附近的點
        var hasXian = flat.some(function (p) { return Math.abs(p.lat - 34.34) < 1 && Math.abs(p.lng - 108.94) < 1; });
        var hasMashhad = flat.some(function (p) { return Math.abs(p.lat - 36.2605) < 0.5 && Math.abs(p.lng - 59.6168) < 0.5; });
        var hasIstanbul = flat.some(function (p) { return Math.abs(p.lat - 41.0) < 1 && Math.abs(p.lng - 29.0) < 1.5; });
        if (hasXian && hasMashhad && hasIstanbul) {
          silkLayer = layer;
        }
      } catch (e) {}
    });

    if (!silkLayer) {
      // 新增一條可互動的絲路折線（不覆蓋既有圖層）
      silkLayer = L.polyline(SILK_ROAD, { weight: 4, opacity: 0.7, color: '#ff7f00' }).addTo(m);
    }

    // 滑過視覺回饋
    silkLayer.on('mouseover', function () { try { silkLayer.setStyle({ weight: 6, opacity: 1 }); } catch (e) {} });
    silkLayer.on('mouseout', function () { try { silkLayer.setStyle({ weight: 4, opacity: 0.7 }); } catch (e) {} });

    // 點擊行為：打開「西方食材進入中國」的教學面板
    silkLayer.on('click', function () {
      openTeachPanelByName('西方食材進入中國');
    });

    // 若地圖上已有該事件的 marker，讓 marker hover 也同步加粗絲路（貼心小互動，不影響原邏輯）
    try {
      var nameRe = /西方食材.*進入中國/;
      (window.__HFD_EVENTS__ || []).forEach(function (ev) {
        if (ev && nameRe.test(String(ev.name || ''))) {
          // 嘗試從 ev.__marker 之類的引用取得 marker（如果原檔有存）
          var mk = ev.__marker;
          if (mk && typeof mk.on === 'function') {
            mk.on('mouseover', function () { try { silkLayer.setStyle({ weight: 6, opacity: 1 }); } catch (e) {} });
            mk.on('mouseout', function () { try { silkLayer.setStyle({ weight: 4, opacity: 0.7 }); } catch (e) {} });
          }
        }
      });
    } catch (e) {}

    console.log('✅ PATCH v13 啟用：點擊絲路 = 開啟〈西方食材進入中國〉教學面板');
  } catch (err) {
    console.warn('PATCH v13 失敗：', err);
  }
})();
// === END PATCH v13 ===
