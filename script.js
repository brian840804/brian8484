const regionCircles = {
  '歐洲(西歐)': { center: [48, 5], radius: 700000 },
  '歐洲(中歐)': { center: [51, 15], radius: 650000 },
  '西亞(以色列、黎巴嫩)': { center: [33.8, 35.5], radius: 320000 },
  '西亞(土耳其、伊拉克)': { center: [37, 42], radius: 600000 },
  '西亞(伊拉克)': { center: [33.3, 44.4], radius: 320000 },
  '北非(埃及)': { center: [27, 30], radius: 650000 },
  '美洲(智利)': { center: [-30, -70], radius: 700000 },
  '美洲(墨西哥)': { center: [21, -101], radius: 700000 },
  '印度(印度河)': { center: [28, 69], radius: 500000 },
  '台灣(台東)': { center: [22.75, 121.15], radius: 55000 },
  '尼羅河流域': { center: [27, 30], radius: 650000 },
  '克里特島': { center: [35.3, 24.5], radius: 200000 },
  '黃河中下游': { center: [35, 113], radius: 500000 },
  '希臘本土及愛琴海沿岸': { center: [38, 24], radius: 400000 },
  '希臘本土及周邊島嶼': { center: [38, 24], radius: 400000 },
  '伊拉克': { center: [33.3, 44.4], radius: 320000 },
  '墨西哥維拉克魯斯': { center: [19.5, -96.5], radius: 300000 },
  '中國河南、山西': { center: [35.5, 112], radius: 400000 },
  '伊拉克北部、敘利亞東部': { center: [35, 42], radius: 500000 },
  '伊朗高原': { center: [32, 54], radius: 600000 },
  '黃河流域及長江流域': { center: [32, 112], radius: 700000 },
  '印度北部恆河平原': { center: [26, 82], radius: 500000 },
  '中國北方與長江中下游': { center: [32, 115], radius: 600000 },
  '地中海沿岸（義大利半島、歐陸及北非）': { center: [40, 15], radius: 800000 },
  '波斯高原至美索不達米亞北部': { center: [34, 48], radius: 600000 },
  '中美洲尤卡坦半島': { center: [20, -88], radius: 400000 },
  '黃河中下游與長江中下游': { center: [32, 115], radius: 600000 },
  '地中海東部、巴爾幹半島、安納託利亞': { center: [40, 30], radius: 700000 },
  '法國北部、比利時、德國西部': { center: [50, 5], radius: 500000 },
  '中國': { center: [35, 105], radius: 1000000 },
  '中亞、西亞、北非': { center: [30, 45], radius: 1200000 },
  '法國、德國、義大利北部': { center: [48, 8], radius: 600000 },
  '日本本州': { center: [36, 138], radius: 400000 },
  '土耳其、伊朗': { center: [37, 42], radius: 600000 },
  '馬里、塞內加爾': { center: [15, -10], radius: 500000 },
  '墨西哥盆地': { center: [19.4, -99.1], radius: 200000 },
  '南美安第斯山脈': { center: [-15, -70], radius: 800000 },
  '伊比利亞半島': { center: [40, -4], radius: 400000 },
  '美洲、非洲好望角、印度、東南亞': { center: [0, 0], radius: 2000000 },
  '台灣': { center: [23.8, 121], radius: 100000 },
  '日本': { center: [36, 138], radius: 400000 },
  '印度': { center: [20, 77], radius: 800000 },
  '馬來西亞': { center: [4, 108], radius: 400000 },
  '英國': { center: [54, -2], radius: 300000 },
  '法國': { center: [46, 2], radius: 400000 },
  '歐洲': { center: [50, 10], radius: 1000000 },
  '美國': { center: [40, -95], radius: 1200000 },
  '東南亞': { center: [10, 105], radius: 800000 },
  '韓國': { center: [36, 128], radius: 200000 },
  '蒙古': { center: [46, 105], radius: 600000 },
  '俄羅斯': { center: [60, 100], radius: 1500000 },
  '非洲': { center: [0, 20], radius: 1500000 },
  '澳洲': { center: [-25, 135], radius: 1000000 },
  '紐西蘭': { center: [-40, 175], radius: 300000 },
  '以色列、巴勒斯坦地區': { center: [31.5, 35.0], radius: 200000 }
};


// === PATCH v9: Map '台灣北部' to a circle centered on New Taipei City with radius covering Yilan & Hsinchu ===
// New Taipei City approx center (~25.016, 121.465)
if (typeof regionCircles !== 'undefined') {
  regionCircles['台灣北部'] = { center: [25.016, 121.465], radius: 120000 }; // 120 km to cover Yilan & Hsinchu
}
// === END PATCH v9 ===


const regionMarkers = {
  '中國北京': [39.9042, 116.4074],
  '中國山西': [37.8735, 112.5624],
  '中國河南': [34.7655, 113.7532],
  '中國浙江': [30.2741, 120.1551],
  '台灣台北': [25.0375, 121.5637],
  // 新增更多精確座標
  '中國上海': [31.2304, 121.4737],
  '中國廣東': [23.1291, 113.2644],
  '中國四川': [30.6171, 104.0648],
  '中國陝西': [34.3416, 108.9398],
  '中國湖南': [28.2282, 112.9388],
  '中國湖北': [30.5928, 114.3055],
  '中國江蘇': [32.0603, 118.7969],
  '台灣台中': [24.1477, 120.6736],
  '台灣高雄': [22.6273, 120.3014],
  '台灣台南': [22.9998, 120.2269],
  '日本東京': [35.6762, 139.6503],
  '日本大阪': [34.6937, 135.5023],
  '韓國首爾': [37.5665, 126.9780],
  '泰國曼谷': [13.7563, 100.5018],
  '越南河內': [21.0285, 105.8542],
  '印度德里': [28.7041, 77.1025],
  '印度孟買': [19.0760, 72.8777],
  '埃及開羅': [30.0444, 31.2357],
  '土耳其伊斯坦堡': [41.0082, 28.9784],
  '希臘雅典': [37.9838, 23.7275],
  '義大利羅馬': [41.9028, 12.4964],
  '法國巴黎': [48.8566, 2.3522],
  '英國倫敦': [51.5074, -0.1278],
  '德國柏林': [52.5200, 13.4050],
  '西班牙馬德里': [40.4168, -3.7038],
  '墨西哥墨西哥城': [19.4326, -99.1332],
  '美國紐約': [40.7128, -74.0060],
  '美國洛杉磯': [34.0522, -118.2437],
  '巴西聖保羅': [-23.5505, -46.6333],
  '阿根廷布宜諾斯艾利斯': [-34.6037, -58.3816]
};


// === PATCH: Map '台灣西南部/臺灣西南部' to the '台灣台南' marker (safe, no regex changes) ===
(function(){
  if (typeof regionMarkers === 'undefined') return;
  const tainan = regionMarkers['台灣台南'] || regionMarkers['台灣臺南'] || [22.9998, 120.2269];
  regionMarkers['台灣台南'] = tainan;
  regionMarkers['台灣臺南'] = tainan;
  regionMarkers['台灣西南部'] = tainan;
  regionMarkers['臺灣西南部'] = tainan;
})();
// === END PATCH ===


function parseVideos(videoString) {
  if (!videoString) return [];
  return videoString.split(/[；;]/)
    .map(url => url.trim())
    .filter(url => url && url.includes('youtube.com'));
}

function parseImages(imageString) {
  if (!imageString) return [];
  return imageString.split(/[；;]/)
    .map(img => img.trim())
    .filter(img => img);
}

function generatePanelContent(row, year) {
  // 只返回基本資訊，詳細內容等展開時再處理
  return `<div><strong>時代：</strong>${year < 0 ? '西元前' + Math.abs(year) : '西元' + year}年</div>` +
         `<div><strong>地區：</strong>${row['地區']}</div>` +
         `<div><strong>摘要：</strong>${(row['摘要'] || '').replace(/\r\n|\r|\n/g, '<br>')}</div>`;
}

function generateExpandedContent(event) {
  let expandedContent = '';
  
  // 顯示課程內容（包含內嵌的影片和圖片）- 移除「詳細內容：」標籤
  if (event.courseContent && event.courseContent.trim() !== '') {
    expandedContent += `<div class="course-content">${processContentWithMedia(event.courseContent)}</div>`;
  }
  
  // 只有在專門影片欄位有額外影片，且這些影片不在課程內容中時，才顯示相關影片區塊
  if (event.videos && event.videos.length > 0) {
    // 檢查哪些影片不在課程內容中
    const additionalVideos = event.videos.filter(videoUrl => {
      if (!event.courseContent) return true;
      return !event.courseContent.includes(videoUrl);
    });
    
    if (additionalVideos.length > 0) {
      expandedContent += '<div class="videos-section"><strong>相關影片：</strong>';
      additionalVideos.forEach((videoUrl, index) => {
        const videoId = extractYouTubeVideoId(videoUrl);
        if (videoId) {
          expandedContent += `
  <div class="video-embed-container">
    <iframe class="video-embed" 
            src="https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1&enablejsapi=1" 
            title="YouTube video player ${index + 1}"
            frameborder="0" 
            sandbox="allow-scripts allow-same-origin allow-presentation"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
            loading="lazy">
    </iframe>
  </div>`;
        } else {
          expandedContent += `
            <div style="margin: 16px 0; text-align: center;">
              <a href="${videoUrl}" target="_blank" 
                 style="display: inline-block; background: linear-gradient(135deg, #ff6b6b, #ee5a52); 
                        color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; 
                        font-weight: 600; box-shadow: 0 4px 16px rgba(255, 107, 107, 0.3);
                        transition: all 0.3s ease;">
                🎬 觀看影片 ${index + 1}
              </a>
            </div>`;
        }
      });
      expandedContent += '</div>';
    }
  }
  
  // 只有在專門圖片欄位有額外圖片，且這些圖片不在課程內容中時，才顯示相關圖片區塊
  if (event.images && event.images.length > 0) {
    // 檢查哪些圖片不在課程內容中
    const additionalImages = event.images.filter(imageName => {
      if (!event.courseContent) return true;
      return !event.courseContent.includes(imageName);
    });
    
    if (additionalImages.length > 0) {
      expandedContent += '<div class="images-section"><strong>相關圖片：</strong>';
      additionalImages.forEach((imageName, index) => {
        const imagePath = `images/ancient-foods/${imageName}`;
        expandedContent += `
          <img src="${imagePath}" 
               alt="${imageName}" 
               class="inline-image" 
               onclick="showImageModal('${imagePath}', '${imageName}')" 
               onerror="this.outerHTML='<span class=\\"image-ref\\">🖼️ ${imageName}</span>';"
               style="max-width: 100%; height: auto; display: block; margin: 16px auto; border-radius: 12px; 
                      box-shadow: 0 8px 32px rgba(0,0,0,0.15); cursor: pointer;">`;
      });
      expandedContent += '</div>';
    }
  }
  
  return expandedContent;
}

// 提取 YouTube 影片 ID
function extractYouTubeVideoId(url) {
  if (!url) return null;
  
  // 移除網址前後的空白
  url = url.trim();
  
  // 新增：詳細除錯資訊
  console.log('🔍 嘗試解析 YouTube 網址:', url);
  
  // 各種 YouTube 網址格式的正則表達式
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?.*v=([a-zA-Z0-9_-]{11})/
  ];
  
  for (let pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      console.log('✅ 找到 YouTube 影片 ID:', match[1]);
      console.log('🔗 將生成嵌入網址:', `https://www.youtube.com/embed/${match[1]}`);
      return match[1];
    }
  }
  
  console.log('❌ 無法解析 YouTube 網址:', url);
  return null;
}

function processContentWithMedia(content) {
  console.log('=== processContentWithMedia 除錯 ===');
  console.log('原始內容:', content);
  
  // 處理 YouTube 連結
  const originalContent = content;
  content = content.replace(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:\S+)?/g, function(match, videoId) {
    console.log('🎬 找到 YouTube 連結:', match);
    console.log('🎬 提取的影片 ID:', videoId);
    
    // 驗證影片ID格式
    if (!/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
      console.warn('❌ 無效的影片ID:', videoId);
      return '<p style="color: red;">無效的影片ID: ' + videoId + '</p>';
    }
    
    // 簡化的嵌入代碼 - 移除影片ID顯示
const embedCode = '<div style="margin: 16px 0; padding: 12px; background: rgba(255,255,255,0.1); border-radius: 8px;">' +
  '<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%; background: #000; border-radius: 8px;">' +
    '<iframe src="https://www.youtube.com/embed/' + videoId + '?controls=1&rel=0" ' +
           'title="YouTube video player" ' +
           'frameborder="0" ' +
           'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
           'allowfullscreen ' +
           'style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;">' +
    '</iframe>' +
  '</div>' +
'</div>';
    
    console.log('✅ 生成嵌入代碼');
    return embedCode;
  });
  
  // 檢查是否有替換發生
  if (content !== originalContent) {
    console.log('✅ 內容已處理，包含影片');
  } else {
    console.log('ℹ️ 沒有找到 YouTube 連結');
  }
  
// 處理圖文並排 - 圖片在左，對應段落文字在右
content = content.replace(/([^<>\n\r]+?)【(?:IMG：?)?([^】]+\.(?:jpg|jpeg|png|gif))】/gi, function(match, textContent, filename) {
  const imagePath = 'images/ancient-foods/' + filename;
  console.log('🖼️ 找到圖文並排:', filename, '對應文字:', textContent.substring(0, 50) + '...');
  
  // 清理文字內容
  const cleanText = textContent.trim();
  
  return '<div class="text-image-layout">' +
         '<div class="layout-image-container">' +
           '<img src="' + imagePath + '" alt="' + filename + '" class="layout-image" ' +
                'onclick="showImageModal(\'' + imagePath + '\', \'' + filename + '\')">' +
         '</div>' +
         '<div class="layout-text-content">' +
           cleanText +
         '</div>' +
         '<div class="clear-layout"></div>' +
       '</div>';
});

// 處理剩餘的單獨圖片標記（沒有對應段落的圖片）
content = content.replace(/【(?:IMG：?)?([^】]+\.(?:jpg|jpeg|png|gif))】/gi, function(match, filename) {
  const imagePath = 'images/ancient-foods/' + filename;
  console.log('🖼️ 找到單獨圖片:', filename);
  
  return '<div class="content-image-block">' +
         '<img src="' + imagePath + '" alt="' + filename + '" class="content-image" ' +
              'onclick="showImageModal(\'' + imagePath + '\', \'' + filename + '\')">' +
       '</div>';
});
  
  // 處理換行
  content = content.replace(/\r\n|\r|\n/g, '<br>');
  
  console.log('=== 處理後的內容 ===');
  console.log(content);
  
  return content;
}

(async () => {
  console.log('🚀 開始初始化歷史飲食地圖...');

// 載入管理器
const loadingManager = {
  overlay: document.getElementById('loading-overlay'),
  text: document.getElementById('loading-text'),
  subtitle: document.getElementById('loading-subtitle'),
  progressBar: document.getElementById('loading-progress-bar'),
  stages: [
    document.getElementById('stage-1'),
    document.getElementById('stage-2'),
    document.getElementById('stage-3'),
    document.getElementById('stage-4'),
    document.getElementById('stage-5')
  ],
  currentStage: 0,
  
  updateProgress(percentage, text, subtitle) {
    this.progressBar.style.width = percentage + '%';
    if (text) this.text.textContent = text;
    if (subtitle) this.subtitle.textContent = subtitle;
  },
  
  nextStage() {
    if (this.currentStage < this.stages.length) {
      this.stages[this.currentStage].classList.add('active');
      this.currentStage++;
    }
  },
  
  hide() {
    setTimeout(() => {
      this.overlay.classList.add('hidden');
      setTimeout(() => {
        this.overlay.style.display = 'none';
      }, 500);
    }, 500);
  }
};
  
  // 讀取並解析 Excel 檔案
  let events = [];
  try {
	loadingManager.updateProgress(20, '載入歷史資料中...', '正在讀取 Excel 檔案');
loadingManager.nextStage();
    console.log('📊 正在載入 Excel 檔案...');
    const response = await fetch('ancient_foods.xlsx');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, {
      type: 'array',
      cellStyles: true,
      cellFormulas: true,
      cellDates: true,
      cellNF: true,
      sheetStubs: true
    });

    console.log('📋 Excel 工作表列表:', workbook.SheetNames);

    // 將工作表名稱對應到年份
    const sheetYearMap = {
      '西元前20000年': -20000,
      '西元前7000年': -7000,
      '西元前3000年': -3000,
      '西元前2000年': -2000,
      '西元前1600年': -1600,
      '西元前1200年': -1200,
      '西元前800年': -800,
      '西元前400年': -400,
      '西元0年': 0,
      '西元400年': 400,
      '西元500年': 500,
      '西元800年': 800,
      '西元1100年': 1100,
      '西元1400年': 1400,
      '西元1500年': 1500,
      '西元1600年': 1600,
      '西元1700年': 1700,
      '西元1800年': 1800,
      '西元1900年': 1900,
      '西元1920年': 1920,
      '西元1940年': 1940,
      '西元1960年': 1960,
      '西元1980年': 1980,
      '西元2000年': 2000,
      '西元2020年': 2020
    };

    let totalProcessed = 0;
    let successfulEvents = 0;
    let skippedEvents = 0;

    // 處理每個工作表
    workbook.SheetNames.forEach(sheetName => {
      const year = sheetYearMap[sheetName];
      if (year !== undefined) {
        console.log(`📖 處理工作表: ${sheetName} (${year}年)`);
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        
        console.log(`   發現 ${jsonData.length} 筆資料`);
        
        jsonData.forEach((row, index) => {
          totalProcessed++;
          
          if (!row['事件'] || !row['地區']) {
            console.warn(`  ⚠️  第${index + 1}行資料不完整:`, {
              事件: row['事件'] || '缺失',
              地區: row['地區'] || '缺失'
            });
            skippedEvents++;
            return;
          }

          const event = {
  name: row['事件'],
  time: year,
  section: row['小節'] || '1-1',
  // 新增多媒體資料
  videos: parseVideos(row['影片連結']),
  images: parseImages(row['圖片資訊']),
  courseContent: row['課程內容'] || '',
  panel: {
    title: row['事件'],
    content: generatePanelContent(row, year)
  }
};

// === PATCH: Force '台灣桃園/臺灣桃園' to use Taipei marker ===
(function(){
  try {
    const taipei = (typeof regionMarkers !== 'undefined' && (regionMarkers['台灣台北'] || regionMarkers['臺灣台北'])) || [25.0375, 121.5635];
    const loc = row && row['地區'];
    if (loc === '台灣桃園' || loc === '臺灣桃園') {
      event.coords = taipei;
      if (event.region) delete event.region; // prevent area-circle fallback
      event.labelOnly = false;
    }
  } catch (e) {}
})();
// === END PATCH ===


          // 優先使用精確座標
          if (regionMarkers[row['地區']]) {
            event.coords = regionMarkers[row['地區']];
            console.log(`   ✅ 使用精確座標: ${row['地區']} -> ${event.coords}`);
          } 
          // 其次使用區域圓形
          else if (regionCircles[row['地區']]) {
            event.region = row['地區'];
            console.log(`   🎯 使用區域圓形: ${row['地區']}`);
          } 

// 找不到對應位置
else {
  console.warn(`   ❌ 找不到地區位置: "${row['地區']}"`);
  
  // 嘗試模糊匹配
  const fuzzyMatch = findFuzzyMatch(row['地區'], {...regionMarkers, ...Object.fromEntries(Object.entries(regionCircles).map(([k, v]) => [k, v.center]))});
  if (fuzzyMatch) {
    console.log(`   🔍 找到相似地區: "${fuzzyMatch}"`);
    if (regionMarkers[fuzzyMatch]) {
      event.coords = regionMarkers[fuzzyMatch];
    } else if (regionCircles[fuzzyMatch]) {
      event.region = fuzzyMatch;
    }
  } else {
    // 為未匹配地區添加預設位置
    event.region = row['地區'];
    if (!regionCircles[row['地區']]) {
      regionCircles[row['地區']] = { center: [33.8, 35.5], radius: 320000 }; // 使用中東地區作為預設
    }
    console.log(`   🏷️  使用預設位置: 中東地區`);
  }
}

// 除錯：檢查多媒體資料
if (event.videos.length > 0 || event.images.length > 0) {
  console.log(`🎬 事件 "${event.name}" 多媒體資料:`, {
    影片: event.videos,
    圖片: event.images,
    原始影片欄位: row['影片連結'],
    原始圖片欄位: row['圖片資訊']
  });
}

events.push(event);
successfulEvents++;
console.log(`   ✅ 事件已加入: ${event.name} (${event.coords ? '精確座標' : '區域圓形'})`);
        });
      }
    });

    console.log(`✅ Excel 檔案載入完成!`);
    console.log(`📊 處理統計:`);
    console.log(`   總共處理: ${totalProcessed} 筆資料`);
    console.log(`   成功載入: ${successfulEvents} 個事件`);
    console.log(`   跳過/錯誤: ${skippedEvents} 筆`);
    
  } catch (error) {
    console.error('❌ 載入 Excel 檔案失敗:', error);
    events = [];
    alert('無法載入歷史資料檔案，請確認 ancient_foods.xlsx 檔案是否存在且格式正確');
  }

  // 模糊匹配函數
  function findFuzzyMatch(target, availableRegions) {
    const targetLower = target.toLowerCase();
    const regions = Object.keys(availableRegions);
    
    // 精確匹配
    for (const region of regions) {
      if (region.toLowerCase() === targetLower) {
        return region;
      }
    }
    
    // 包含匹配
    for (const region of regions) {
      if (region.toLowerCase().includes(targetLower) || targetLower.includes(region.toLowerCase())) {
        return region;
      }
    }
    
    return null;
  }

  // 初始化地圖
  loadingManager.updateProgress(40, '初始化地圖...', '準備地圖引擎');
loadingManager.nextStage();
  console.log('🗺️  初始化地圖...');
  const initialCenter = [20, 0];
  const initialZoom = 3;
const map = L.map('map', {
  maxBounds: [[-60, -180], [75, 180]],
  maxBoundsViscosity: 1,
  minZoom: 3,
  maxZoom: 6,
  zoomSnap: 0.25,
  zoomDelta: 0.25,
  zoomAnimation: true,
  attributionControl: false,
  zoomControl: false  // 添加這行來移除縮放按鈕
}).setView(initialCenter, initialZoom);

// === PATCH v16c: 絲綢之路 polyline（準確插入於 map 初始化語句之後） ===
(function(){
  try {
    window.map = map; // 暴露給全域使用

    var silkRoadCoords = [
      [34.3, 108.9], // 西安（長安）
      [36.1, 103.8], // 蘭州
      [40.1, 94.7],  // 敦煌
      [39.5, 76.0],  // 喀什
      [39.6, 66.9],  // 撒馬爾罕
      [35.7, 51.4],  // 德黑蘭
      [39.9, 32.9],  // 安卡拉
      [41.0, 28.9]   // 伊斯坦堡
    ];

    var silkLayer = L.layerGroup().addTo(map);
    L.polyline(silkRoadCoords, {
      color: '#b22222',
      weight: 6,
      opacity: 1.0,
      dashArray: '10,6'
    }).addTo(silkLayer).bindPopup('絲綢之路');

    silkRoadCoords.forEach(function(pt){
      L.circleMarker(pt, { radius: 4, color: '#cc6600', weight: 2, fillOpacity: 0.9 }).addTo(silkLayer);
    });

    console.log('✅ v16c Silk Road inline ready');
  } catch(e) {
    console.warn('Silk Road v16c failed:', e && e.message);
  }
})();
// === END PATCH v16c ===


  // 載入地理資料
const LAND_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/v5.1.2/geojson/ne_10m_land.geojson';
const COAST_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_coastline.geojson';
const COUNTRIES_URL = 'https://raw.githubusercontent.com/nvkelso/natural-earth-vector/v5.1.2/geojson/ne_10m_admin_0_countries.geojson';

// 更現代的陸地樣式
const LAND_STYLE = { 
  fillColor: '#f8fafc',       // 更亮的陸地
  fillOpacity: 0.95, 
  weight: 0,
  className: 'land-area'      // 添加自定義類
};

// 更優雅的海岸線
const COAST_STYLE = { 
  color: '#1e293b', 
  weight: 1.5, 
  opacity: 0.6,
  className: 'coast-line'
};

// 國界樣式
const COUNTRIES_STYLE = {
  fillColor: 'transparent',   // 透明填充，只顯示邊界
  fillOpacity: 0,
  color: '#64748b',          // 淡灰色國界線
  weight: 1,
  opacity: 0.7,
  className: 'country-border'
};
  
  function coastFilter(feature) {
    const coords = feature.geometry.coordinates;
    function anyLatAbove(array, threshold) {
      for (const item of array) {
        if (Array.isArray(item[0])) {
          if (anyLatAbove(item, threshold)) return true;
        } else {
          if (item[1] > threshold) return true;
        }
      }
      return false;
    }
    return anyLatAbove(coords, -60);
  }

  try {
	loadingManager.updateProgress(60, '載入世界地圖...', '下載地理資料');
loadingManager.nextStage();
    console.log('🌍 載入地理圖層...');
    
    // 載入陸地
    const respLand = await fetch(LAND_URL);
    if (!respLand.ok) throw new Error('無法取得陸地 GeoJSON');
    const landData = await respLand.json();
    L.geoJSON(landData, { style: LAND_STYLE }).addTo(map);

    // 載入海岸線
    const respCoast = await fetch(COAST_URL);
    if (!respCoast.ok) throw new Error('無法取得海岸線 GeoJSON');
    const coastData = await respCoast.json();
    L.geoJSON(coastData, { style: COAST_STYLE, filter: coastFilter }).addTo(map);

    // 載入國界
    console.log('🗺️ 載入國界資料...');
    const respCountries = await fetch(COUNTRIES_URL);
    if (!respCountries.ok) throw new Error('無法取得國界 GeoJSON');
    const countriesData = await respCountries.json();
    L.geoJSON(countriesData, { 
      style: COUNTRIES_STYLE,
      filter: function(feature) {
        // 過濾掉南極洲和一些小島嶼，避免地圖太雜亂
        const excludeCountries = ['Antarctica'];
        return !excludeCountries.includes(feature.properties.NAME);
      }
    }).addTo(map);

    // 添加極地區域
    L.rectangle([[-90, -180], [-60, 180]], { fillColor: '#a0cfff', fillOpacity: 1.0, weight: 0 }).addTo(map);
    L.rectangle([[75, -180], [90, 180]], { fillColor: '#a0cfff', fillOpacity: 1.0, weight: 0 }).addTo(map);

    map.fitBounds([[-60, -180], [75, 180]]);
    console.log('✅ 地圖初始化完成');
  } catch (err) {
    console.error('❌ 地圖載入失敗:', err);
  }

  // 添加微妙的網格線（可選）
function addMapGrid() {
  const gridLines = [];
  // 經線
  for (let lng = -180; lng <= 180; lng += 30) {
    const line = L.polyline([[-60, lng], [75, lng]], {
      color: '#1e293b',
      weight: 0.5,
      opacity: 0.1,
      interactive: false
    });
    gridLines.push(line);
  }
  // 緯線
  for (let lat = -60; lat <= 75; lat += 30) {
    const line = L.polyline([[lat, -180], [lat, 180]], {
      color: '#1e293b',
      weight: 0.5,
      opacity: 0.1,
      interactive: false
    });
    gridLines.push(line);
  }
  
  const gridGroup = L.layerGroup(gridLines);
  gridGroup.addTo(map);
}

  // 教學面板 DOM
  const panel = document.getElementById('teach-panel');
  const panelTitle = document.getElementById('teach-panel-title');
  const panelContent = document.getElementById('teach-panel-content');
  const panelClose = document.getElementById('teach-panel-close');

// 面板關閉事件
panelClose.onclick = () => {
  panel.classList.remove('visible');
  panel.classList.remove('expanded'); // 新增：重置展開狀態
  
  // 重置展開按鈕狀態（如果存在的話）
  const expandBtn = document.getElementById('expand-panel-btn');
  if (expandBtn) {
    expandBtn.textContent = '📖 查看詳細內容';
    expandBtn.classList.remove('collapse');
  }
  
  returnToPreviousView();
};

// 面板展開/收合功能（新增這整段）
document.addEventListener('click', function(e) {
  if (e.target && e.target.id === 'expand-panel-btn') {
    const panel = document.getElementById('teach-panel');
    const panelContent = document.getElementById('teach-panel-content');
    const btn = e.target;
    
    if (panel.classList.contains('expanded')) {
      // 收合為小面板 - 恢復基本內容（包含摘要）
      panel.classList.remove('expanded');
      btn.textContent = '📖 查看詳細內容';
      btn.classList.remove('collapse');
      
      // 恢復基本內容（需要從事件物件重新取得）
      const currentEvent = window.currentDisplayedEvent;
      if (currentEvent) {
        panelContent.innerHTML = currentEvent.panel.content + 
          '<button class="expand-btn" id="expand-panel-btn">📖 查看詳細內容</button>';
      }
    } else {
      // 展開為大面板 - 只顯示詳細內容，隱藏摘要
      panel.classList.add('expanded');
      btn.textContent = '📖 收合面板';
      btn.classList.add('collapse');
      
      // 只顯示詳細內容，不包含基本摘要和重複標題
      const currentEvent = window.currentDisplayedEvent;
      if (currentEvent) {
        const expandedContent = generateExpandedContent(currentEvent);
        panelContent.innerHTML = expandedContent + 
          '<button class="expand-btn collapse" id="expand-panel-btn">📖 收合面板</button>';
      }
    }
  }
});


// 點擊地圖關閉面板並重置按鈕狀態
map.on('click', function(e) {
  // 只有在點擊空白地圖區域時才重置地區選擇和回到世界地圖
  document.querySelectorAll('.region-button').forEach(btn => {
    btn.classList.remove('active');
  });
  currentActiveRegion = null;
  previousViewState = { center: [20, 0], zoom: 3, activeRegion: null }; // 重置狀態
  
  // 關閉面板並重置展開狀態
  panel.classList.remove('visible');
  panel.classList.remove('expanded'); // 新增：重置展開狀態
  
  // 重置展開按鈕狀態（如果存在的話）
  const expandBtn = document.getElementById('expand-panel-btn');
  if (expandBtn) {
    expandBtn.textContent = '📖 查看詳細內容';
    expandBtn.classList.remove('collapse');
  }
  
  map.setView(initialCenter, initialZoom, { animate: true });
});

 // 創建事件標記
loadingManager.updateProgress(80, '準備歷史事件...', '配置標記');
loadingManager.nextStage();
console.log('📌 創建事件標記...');
let createdMarkers = 0;
let createdCircles = 0;

// 聚合邏輯：按位置分組事件
function groupEventsByLocation(events) {
  const groups = new Map();
  
  events.forEach(event => {
    let locationKey;
    
    if (event.coords) {
      // 精確座標：四捨五入到小數點後2位來聚合附近的點
      locationKey = `coord_${Math.round(event.coords[0] * 100) / 100}_${Math.round(event.coords[1] * 100) / 100}`;
    } else if (event.region && regionCircles[event.region]) {
      // 區域：直接使用區域名稱
      locationKey = `region_${event.region}`;
    } else {
      return; // 跳過無效事件
    }
    
    if (!groups.has(locationKey)) {
      groups.set(locationKey, []);
    }
    groups.get(locationKey).push(event);
  });
  
  return groups;
}

// 創建聚合標記
function createClusterMarker(locationEvents, coords) {
  const eventCount = locationEvents.length;
  
  if (eventCount === 1) {
    // 單一事件，使用原本的標記
    const ev = locationEvents[0];
    ev.marker = L.marker(coords, {
      icon: L.divIcon({
        html: `<div class="custom-marker">
                 <div class="marker-pin"></div>
                 <div class="marker-label">${ev.name}</div>
               </div>`,
        className: 'custom-marker-container',
        iconSize: [150, 20],
        iconAnchor: [6, 10]
      })
    });

    ev.marker.on('click', function(e) {
      showEventPanel(ev);
      L.DomEvent.stopPropagation(e);
    });
    
    return ev.marker;
  } else {
    // 多個事件，創建聚合標記
    const clusterMarker = L.marker(coords, {
      icon: L.divIcon({
        html: `<div class="cluster-marker ${eventCount > 5 ? 'large' : ''}">${eventCount}</div>`,
        className: 'cluster-marker-container',
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      })
    });

    clusterMarker.on('click', function(e) {
      showClusterPopup(locationEvents, coords);
      L.DomEvent.stopPropagation(e);
    });
    
    // 將聚合標記關聯到所有事件
    locationEvents.forEach(ev => {
      ev.clusterMarker = clusterMarker;
    });
    
    return clusterMarker;
  }
}

// 顯示單一事件面板
function showEventPanel(event) {
  console.log('🖱️ 點擊事件:', event.name);
  console.log('🔍 檢查事件屬性:', {
    videos: event.videos,
    images: event.images,
    courseContent: event.courseContent ? '有內容' : '無內容'
  });
  
  // 儲存當前事件供展開功能使用
  window.currentDisplayedEvent = event;
  
  const coords = event.coords || regionCircles[event.region]?.center;
  if (coords) {
    map.setView(coords, 6, { animate: true });
  }
  
  panelTitle.innerHTML = event.panel.title;
  panelContent.innerHTML = event.panel.content;
  
  // 更仔細的條件檢查
let hasDetailedContent = false;

// 檢查影片
if (event.videos && Array.isArray(event.videos) && event.videos.length > 0) {
  console.log('✅ 有影片:', event.videos.length, '個');
  hasDetailedContent = true;
}

// 檢查圖片
if (event.images && Array.isArray(event.images) && event.images.length > 0) {
  console.log('✅ 有圖片:', event.images.length, '個');
  hasDetailedContent = true;
}

// 檢查課程內容
if (event.courseContent && typeof event.courseContent === 'string' && event.courseContent.trim().length > 0) {
  console.log('✅ 有課程內容:', event.courseContent.length, '字');
  hasDetailedContent = true;
}

console.log('📖 最終判斷：應顯示詳細按鈕 =', hasDetailedContent);
console.log('🔍 事件詳細資料:', {
  影片數量: event.videos ? event.videos.length : 0,
  圖片數量: event.images ? event.images.length : 0,
  課程內容長度: event.courseContent ? event.courseContent.length : 0
});


  
  // 根據判斷結果添加按鈕
  if (hasDetailedContent) {
    const expandButton = document.createElement('button');
    expandButton.id = 'expand-panel-btn';
    expandButton.className = 'expand-btn';
    expandButton.textContent = '📖 查看詳細內容';
    panelContent.appendChild(expandButton);
    console.log('✅ 詳細內容按鈕已添加');
  } else {
    const noContentDiv = document.createElement('div');
    noContentDiv.style.cssText = 'color: var(--text-secondary); font-size: 0.8rem; margin-top: 8px;';
    noContentDiv.textContent = '※ 此事件無詳細資料';
    panelContent.appendChild(noContentDiv);
    console.log('ℹ️ 顯示無詳細資料提示');
  }
  
  panel.classList.add('visible');
  panel.classList.remove('expanded');
}

// 顯示聚合事件列表
function showClusterPopup(events, coords) {
  console.log('🖱️ 點擊聚合標記:', events.length, '個事件');
  
  // 放大到該位置
  map.setView(coords, 6, { animate: true });
  
  // 按時間排序事件
  const sortedEvents = events.sort((a, b) => a.time - b.time);
  
  // 生成事件列表HTML
  const eventsListHTML = sortedEvents.map(event => `
    <div class="cluster-item" data-event-name="${event.name}">
      <div class="cluster-item-title">${event.name}</div>
      <div class="cluster-item-info">
        時間：${event.time < 0 ? '西元前' + Math.abs(event.time) : '西元' + event.time}年<br>
        章節：${event.section}
      </div>
    </div>
  `).join('');
  
  // 設置面板內容
  panelTitle.innerHTML = `📍 ${events[0].region || '歷史事件'} (${events.length}個事件)`;
  panelContent.innerHTML = `
    <div class="cluster-popup">
      <div class="cluster-popup-header">
        點擊下方事件查看詳細資訊
      </div>
      ${eventsListHTML}
    </div>
  `;
  
  // 顯示面板
  panel.classList.add('visible');
  panel.classList.remove('expanded');
  
  // 為每個事件項目添加點擊事件
  setTimeout(() => {
    document.querySelectorAll('.cluster-item').forEach(item => {
      item.addEventListener('click', function() {
        const eventName = this.dataset.eventName;
        const selectedEvent = events.find(e => e.name === eventName);
        if (selectedEvent) {
          showEventPanel(selectedEvent);
        }
      });
    });
  }, 100);
}

// 處理所有事件
const locationGroups = groupEventsByLocation(events);

locationGroups.forEach((locationEvents, locationKey) => {
  try {
    let coords;
    
    // 確定座標
    if (locationKey.startsWith('coord_')) {
      coords = locationEvents[0].coords;
    } else if (locationKey.startsWith('region_')) {
      const regionName = locationKey.replace('region_', '');
      coords = regionCircles[regionName]?.center;
      
      // 為區域事件添加圓形
      if (coords && regionCircles[regionName]) {
        const reg = regionCircles[regionName];
        locationEvents.forEach(ev => {
          ev.areaLayer = L.circle(reg.center, {
            radius: reg.radius,
            color: '#3b82f6',
            fillColor: '#dbeafe',
            fillOpacity: 0.25,
            weight: 2.5,
            stroke: true,
            interactive: false,
            className: 'region-circle'
          });
        });
        createdCircles++;
      }
    }
    
    if (coords) {
      const marker = createClusterMarker(locationEvents, coords);
      locationEvents[0].displayMarker = marker; // 用於顯示控制
      createdMarkers++;
    }
    
  } catch (error) {
    console.error('創建標記時出錯:', error, locationEvents);
  }
});

console.log(`✅ 標記創建完成: ${createdMarkers} 個位置標記, ${createdCircles} 個區域標記`);

  // 狀態管理
  let selectedSections = ['1-1', '1-2', '1-3'];
  let currentYear = -20000;

  // 視圖狀態管理
let previousViewState = {
  center: [20, 0],
  zoom: 3,
  activeRegion: null
};
  
  // 回到上一個視圖狀態
function returnToPreviousView() {
  if (previousViewState.bounds) {
    // 如果有記錄的地區視圖，回到該地區
    map.flyToBounds(previousViewState.bounds, { 
      padding: previousViewState.padding || [20, 20], 
      maxZoom: previousViewState.maxZoom || 6, 
      duration: 1.5 
    });
    
    // 恢復地區按鈕的選中狀態
    if (previousViewState.activeRegion) {
      setActiveRegion(previousViewState.activeRegion);
    }
  } else {
    // 如果沒有記錄，回到世界地圖
    map.setView([20, 0], 3, { animate: true });
  }
}

  // 更新可見事件
function updateVisibleEvents() {
  console.log(`🔄 更新可見事件: ${currentYear}年, 章節: ${selectedSections.join(', ')}`);
  
  let visibleCount = 0;
  const locationGroups = groupEventsByLocation(
    events.filter(ev => ev.time === currentYear && selectedSections.includes(ev.section))
  );
  
  // 先移除所有現有標記
  events.forEach(ev => {
    if (ev.marker && map.hasLayer(ev.marker)) map.removeLayer(ev.marker);
    if (ev.clusterMarker && map.hasLayer(ev.clusterMarker)) map.removeLayer(ev.clusterMarker);
    if (ev.displayMarker && map.hasLayer(ev.displayMarker)) map.removeLayer(ev.displayMarker);
    if (ev.areaLayer && map.hasLayer(ev.areaLayer)) map.removeLayer(ev.areaLayer);
  });
  
  // 重新創建並顯示當前時間的標記
  locationGroups.forEach((locationEvents, locationKey) => {
    let coords;
    
    if (locationKey.startsWith('coord_')) {
      coords = locationEvents[0].coords;
    } else if (locationKey.startsWith('region_')) {
      const regionName = locationKey.replace('region_', '');
      coords = regionCircles[regionName]?.center;
      
      // 顯示區域圓形
      locationEvents.forEach(ev => {
        if (ev.areaLayer) map.addLayer(ev.areaLayer);
      });
    }
    
    if (coords) {
      const marker = createClusterMarker(locationEvents, coords);
      map.addLayer(marker);
      visibleCount += locationEvents.length;
    }
  });
  
  console.log(`👁️  顯示 ${visibleCount} 個事件 (${locationGroups.size} 個位置)`);
  panel.classList.remove('visible');
}

  // 章節選擇器事件
  document.querySelectorAll('.section-checkbox').forEach(box => {
    box.addEventListener('change', function() {
      selectedSections = Array.from(document.querySelectorAll('.section-checkbox:checked')).map(b => b.value);
      console.log('📋 更新選中章節:', selectedSections);
      updateVisibleEvents();
    });
  });

  // 地區快速縮放
  const boundsEastAsia = [[15, 100], [55, 145]];
  const boundsMedRegion = [[20, -10], [60, 60]];
  const boundsLATAM = [[-60, -90], [25, -30]];
  const boundsTaiwan = [[21.8, 120], [25.5, 122.2]];

  // 控制面板收合功能
const controlPanel = document.getElementById('control-panel');
const panelToggle = document.getElementById('panel-toggle');
const toggleIcon = document.getElementById('toggle-icon');

panelToggle.addEventListener('click', () => {
  controlPanel.classList.toggle('collapsed');
  
  if (controlPanel.classList.contains('collapsed')) {
    toggleIcon.textContent = '❯';
    panelToggle.title = '展開面板';
    console.log('📦 控制面板已收合');
  } else {
    toggleIcon.textContent = '❮';
    panelToggle.title = '收合面板';
    console.log('📖 控制面板已展開');
  }
});

// 地區按鈕功能 - 添加狀態管理
let currentActiveRegion = null;

function setActiveRegion(buttonId) {
  // 移除所有按鈕的 active 狀態
  document.querySelectorAll('.region-button').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // 設置當前按鈕為 active
  const activeButton = document.getElementById(buttonId);
  if (activeButton) {
    activeButton.classList.add('active');
    currentActiveRegion = buttonId;
  }
}

document.getElementById('btn-east-asia').onclick = () => {
  console.log('🌏 跳轉到東亞');
  const bounds = boundsEastAsia;
  map.flyToBounds(bounds, { padding: [20, 20], maxZoom: 6, duration: 1.5 });
  setActiveRegion('btn-east-asia');
  
  // 記錄當前視圖狀態
  previousViewState = {
    bounds: bounds,
    activeRegion: 'btn-east-asia',
    padding: [20, 20],
    maxZoom: 6
  };
};

document.getElementById('btn-med-region').onclick = () => {
  console.log('🏛️ 跳轉到西亞·歐洲·北非');
  const bounds = boundsMedRegion;
  map.flyToBounds(bounds, { padding: [20, 20], maxZoom: 6, duration: 1.5 });
  setActiveRegion('btn-med-region');
  
  // 記錄當前視圖狀態
  previousViewState = {
    bounds: bounds,
    activeRegion: 'btn-med-region',
    padding: [20, 20],
    maxZoom: 6
  };
};

document.getElementById('btn-latam').onclick = () => {
  console.log('🌎 跳轉到中南美洲');
  const bounds = boundsLATAM;
  map.flyToBounds(bounds, { padding: [20, 20], maxZoom: 6, duration: 1.5 });
  setActiveRegion('btn-latam');
  
  // 記錄當前視圖狀態
  previousViewState = {
    bounds: bounds,
    activeRegion: 'btn-latam',
    padding: [20, 20],
    maxZoom: 6
  };
};

document.getElementById('btn-taiwan').onclick = () => {
  console.log('🏝️ 跳轉到台灣');
  const bounds = boundsTaiwan;
  map.flyToBounds(bounds, { padding: [30, 30], maxZoom: 8, duration: 1.5 });
  setActiveRegion('btn-taiwan');
  
  // 記錄當前視圖狀態
  previousViewState = {
    bounds: bounds,
    activeRegion: 'btn-taiwan',
    padding: [30, 30],
    maxZoom: 8
  };
};


  // 時間軸設置
  console.log('⏰ 設置時間軸...');
  const years = [
    -20000, -7000, -3000, -2000, -1600, -1200,
    -800, -400, 0, 400, 500, 800,
    1100, 1400, 1500, 1600, 1700, 1800,
    1900, 1920, 1940, 1960, 1980, 2000, 2020
  ];
  
  const ticksWrapper = document.getElementById('ticks-wrapper');
  const timeCurrentLabel = document.getElementById('time-current');
  const eraLabel = document.getElementById('era-label');

  const eraRanges = [
    { name: '遠古時代', startIdx: 0, endIdx: 2 },
    { name: '上古時代', startIdx: 3, endIdx: 9 },
    { name: '中古時代', startIdx: 10, endIdx: 13 },
    { name: '近代', startIdx: 14, endIdx: 18 },
    { name: '現代', startIdx: 19, endIdx: 24 }
  ];

  function getEraByIdx(idx) {
    for (const era of eraRanges) {
      if (idx >= era.startIdx && idx <= era.endIdx) return era.name;
    }
    return '';
  }


// 創建時代區間容器
const eraSpansContainer = document.createElement('div');
eraSpansContainer.classList.add('era-spans');

const eraSpans = [
  { name: '遠古時代', start: 0, end: 2 },
  { name: '上古時代', start: 3, end: 9 },
  { name: '中古時代', start: 10, end: 13 },
  { name: '近代', start: 14, end: 18 },
  { name: '現代', start: 19, end: 24 }
];

eraSpans.forEach(era => {
  const span = document.createElement('div');
  span.classList.add('era-span');
  span.textContent = era.name;
  span.style.left = `${(era.start / 24) * 100}%`;
  span.style.width = `${((era.end - era.start + 1) / 25) * 100}%`;
  eraSpansContainer.appendChild(span);
});


// 添加到時間軸容器
document.querySelector('.tick-menu-container').appendChild(eraSpansContainer);


  years.forEach((yr, idx) => {
    const tickItem = document.createElement('div');
    tickItem.classList.add('tick-item');
    tickItem.dataset.index = idx;

    const line = document.createElement('div');
    line.classList.add('tick-line');
    tickItem.appendChild(line);

    const label = document.createElement('div');
    label.classList.add('tick-label');
    const line1 = document.createElement('div');
    line1.textContent = yr < 0 ? '西元前' : '西元';
    const line2 = document.createElement('div');
    line2.textContent = Math.abs(yr) + '年';
    label.appendChild(line1);
    label.appendChild(line2);
    tickItem.appendChild(label);

    // 設置初始選中狀態
    if (idx === 0) {
      tickItem.classList.add('selected');
      eraLabel.textContent = getEraByIdx(idx);
      timeCurrentLabel.innerHTML = '西元前<br>' + Math.abs(yr) + '年';
    }

    // 時間點擊事件
    tickItem.addEventListener('click', () => {
      console.log(`⏱️  切換到: ${yr}年`);
      
      // 更新選中狀態
      ticksWrapper.querySelectorAll('.tick-item.selected').forEach(el => el.classList.remove('selected'));
      tickItem.classList.add('selected');
      
      // 更新標籤
      if (yr < 0) {
        timeCurrentLabel.innerHTML = '西元前<br>' + Math.abs(yr) + '年';
      } else {
        timeCurrentLabel.innerHTML = '西元<br>' + Math.abs(yr) + '年';
      }
      
      // 更新當前年份和時代
      currentYear = yr;
      eraLabel.textContent = getEraByIdx(idx);
      
      // 更新可見事件
      updateVisibleEvents();
      
      // 關閉面板
      panel.classList.remove('visible');
    });

// 簡化的 hover 效果
tickItem.addEventListener('mouseenter', function() {
  this.style.transform = 'scale3d(1.25, 1.25, 1) translateZ(0)';
  this.style.zIndex = '10';
});

tickItem.addEventListener('mouseleave', function() {
  this.style.transform = 'scale3d(1, 1, 1) translateZ(0)';
  this.style.zIndex = '1';
});

    ticksWrapper.appendChild(tickItem);
  });

  console.log('✅ 時間軸設置完成');

  // 初始載入
  console.log('🎬 執行初始更新...');
  updateVisibleEvents();
  
  loadingManager.updateProgress(100, '載入完成！', '歷史地圖已就緒');
loadingManager.nextStage();
loadingManager.hide();
  console.log('🎉 歷史飲食地圖初始化完成！');

  // 添加鍵盤快捷鍵
  document.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
  panel.classList.remove('visible');
  returnToPreviousView();
  console.log('⌨️ ESC - 關閉面板');
}
    
    // 數字鍵 1-4 快速切換地區
    if (e.key >= '1' && e.key <= '4') {
      const regionButtons = [
        document.getElementById('btn-east-asia'),
        document.getElementById('btn-med-region'),
        document.getElementById('btn-latam'),
        document.getElementById('btn-taiwan')
      ];
      const buttonIndex = parseInt(e.key) - 1;
      if (regionButtons[buttonIndex]) {
        regionButtons[buttonIndex].click();
        console.log(`⌨️ ${e.key} - 切換地區`);
      }
    }
    
    // 左右箭頭切換時間
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const currentIndex = years.indexOf(currentYear);
      let newIndex;
      
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        newIndex = currentIndex - 1;
      } else if (e.key === 'ArrowRight' && currentIndex < years.length - 1) {
        newIndex = currentIndex + 1;
      }
      
      if (newIndex !== undefined) {
        const tickItems = document.querySelectorAll('.tick-item');
        if (tickItems[newIndex]) {
          tickItems[newIndex].click();
          console.log(`⌨️ ${e.key} - 切換時間到 ${years[newIndex]}年`);
        }
      }
    }
  });

  // 添加統計資訊顯示
  function showStatistics() {
    const stats = {
      totalEvents: events.length,
      timeRanges: [...new Set(events.map(e => e.time))].sort((a, b) => a - b),
      sections: [...new Set(events.map(e => e.section))],
      regions: [...new Set(events.map(e => e.region || '精確座標'))],
      coordEvents: events.filter(e => e.coords).length,
      regionEvents: events.filter(e => e.region).length
    };
    
    console.log('📊 地圖統計資訊:');
    console.log(`   總事件數: ${stats.totalEvents}`);
    console.log(`   時間範圍: ${stats.timeRanges.length} 個時間點`);
    console.log(`   章節數: ${stats.sections.length} (${stats.sections.join(', ')})`);
    console.log(`   地區數: ${stats.regions.length}`);
    console.log(`   精確座標事件: ${stats.coordEvents}`);
    console.log(`   區域圓形事件: ${stats.regionEvents}`);
    
    return stats;
  }

  // 添加搜尋功能
  function searchEvents(keyword) {
    const results = events.filter(event => 
      event.name.toLowerCase().includes(keyword.toLowerCase()) ||
      (event.panel.content && event.panel.content.toLowerCase().includes(keyword.toLowerCase()))
    );
    
    console.log(`🔍 搜尋 "${keyword}" 找到 ${results.length} 個結果:`);
    results.forEach((event, index) => {
      console.log(`   ${index + 1}. ${event.name} (${event.time}年)`);
    });
    
    return results;
  }

  // 添加匯出功能
  function exportVisibleEvents() {
    const visibleEvents = events.filter(ev => 
      ev.time === currentYear && selectedSections.includes(ev.section)
    );
    
    const exportData = visibleEvents.map(event => ({
      名稱: event.name,
      時間: event.time,
      章節: event.section,
      座標: event.coords ? `${event.coords[0]}, ${event.coords[1]}` : '區域',
      地區: event.region || '精確座標'
    }));
    
    console.log('📤 匯出當前可見事件:', exportData);
    return exportData;
  }

  // 錯誤處理和重試機制
  function handleError(error, context) {
    console.error(`❌ ${context} 發生錯誤:`, error);
    
    // 可以在這裡添加用戶友好的錯誤提示
    const errorMessage = document.createElement('div');
    errorMessage.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ff4444;
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
      z-index: 9999;
      font-size: 14px;
      max-width: 300px;
    `;
    errorMessage.textContent = `錯誤: ${context}`;
    document.body.appendChild(errorMessage);
    
    // 3秒後自動移除錯誤訊息
    setTimeout(() => {
      if (errorMessage.parentNode) {
        errorMessage.parentNode.removeChild(errorMessage);
      }
    }, 3000);
  }

  // 添加載入指示器
  function showLoadingIndicator(show = true) {
    let indicator = document.getElementById('loading-indicator');
    
    if (show && !indicator) {
      indicator = document.createElement('div');
      indicator.id = 'loading-indicator';
      indicator.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        z-index: 9999;
        font-size: 16px;
        text-align: center;
      `;
      indicator.innerHTML = `
        <div>載入中...</div>
        <div style="margin-top: 10px; font-size: 12px;">請稍候</div>
      `;
      document.body.appendChild(indicator);
    } else if (!show && indicator) {
      indicator.remove();
    }
  }

  // 性能優化：事件節流
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  // 優化地圖移動事件
  const throttledMapMove = throttle(() => {
    // 可以在這裡添加地圖移動時的處理邏輯
    console.log('🗺️ 地圖移動中...');
  }, 100);

  map.on('move', throttledMapMove);

  // 添加右鍵選單功能
  map.on('contextmenu', function(e) {
    e.originalEvent.preventDefault();
    
    const contextMenu = document.createElement('div');
    contextMenu.style.cssText = `
      position: fixed;
      background: white;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 5px 0;
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
      z-index: 9999;
      left: ${e.originalEvent.pageX}px;
      top: ${e.originalEvent.pageY}px;
    `;
    
    const menuItems = [
      { text: '回到初始視圖', action: () => map.setView(initialCenter, initialZoom) },
      { text: '顯示統計資訊', action: showStatistics },
      { text: '匯出可見事件', action: exportVisibleEvents }
    ];
    
    menuItems.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.style.cssText = `
        padding: 8px 15px;
        cursor: pointer;
        font-size: 14px;
      `;
      menuItem.textContent = item.text;
      menuItem.onmouseover = () => menuItem.style.background = '#f0f0f0';
      menuItem.onmouseout = () => menuItem.style.background = 'white';
      menuItem.onclick = () => {
        item.action();
        document.body.removeChild(contextMenu);
      };
      contextMenu.appendChild(menuItem);
    });
    
    document.body.appendChild(contextMenu);
    
    // 點擊其他地方關閉選單
    const closeMenu = (e) => {
      if (!contextMenu.contains(e.target)) {
        document.body.removeChild(contextMenu);
        document.removeEventListener('click', closeMenu);
      }
    };
    
    setTimeout(() => {
      document.addEventListener('click', closeMenu);
    }, 10);
  });

  // 添加全域函數到 window 物件，方便除錯
  window.mapDebug = {
    events: events,
    showStatistics: showStatistics,
    searchEvents: searchEvents,
    exportVisibleEvents: exportVisibleEvents,
    currentYear: () => currentYear,
    selectedSections: () => selectedSections,
    updateVisibleEvents: updateVisibleEvents,
    regionCircles: regionCircles,
    regionMarkers: regionMarkers
  };

  // 顯示版本資訊
  console.log('ℹ️ 歷史飲食地圖 v1.1');
  console.log('ℹ️ 除錯指令: window.mapDebug');
  console.log('ℹ️ 快捷鍵: ESC(關閉面板), 1-4(切換地區), ←→(切換時間)');
  console.log('ℹ️ 右鍵點擊地圖可開啟功能選單');

  // 最終完成提示
  console.log('🎉 歷史飲食地圖初始化完成！');
  console.log(`📍 共載入 ${events.length} 個歷史事件`);
  console.log('🚀 系統就緒，開始探索人類飲食歷史！');

})().catch(error => {
  console.error('💥 初始化過程中發生嚴重錯誤:', error);
  alert('地圖初始化失敗，請刷新頁面重試');
});

// 圖片彈窗功能
function showImageModal(imagePath, imageName) {
  // 移除現有的彈窗
  const existingModal = document.getElementById('image-modal');
  if (existingModal) {
    existingModal.remove();
  }
  
  // 創建新彈窗
  const modal = document.createElement('div');
  modal.id = 'image-modal';
  modal.className = 'image-modal';
  modal.innerHTML = `
    <div class="image-modal-content">
      <span class="image-modal-close">&times;</span>
      <img src="${imagePath}" alt="${imageName}" class="modal-image">
      <div class="image-modal-caption">${imageName}</div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // 關閉事件
  modal.onclick = (e) => {
    if (e.target === modal || e.target.className === 'image-modal-close') {
      modal.remove();
    }
  };
  
  // ESC 關閉
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      modal.remove();
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

// 將函數加到全域
window.showImageModal = showImageModal;