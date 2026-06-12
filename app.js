const PHOTO_SOURCES = {
  commons: 'Wikimedia Commons',
  sushi: '鮨麻布官网',
  shin: '新文芸坐官网',
  beams: 'BEAMS 官网',
  sometime: 'SOMETIME 官网',
  gotokyo: 'GO TOKYO',
  ana767: 'Masakatsu Ukon / Wikimedia Commons · CC BY-SA 2.0',
};

const ANA767_PHOTO_SOURCE = 'https://commons.wikimedia.org/wiki/File:All_Nippon_Airways_Boeing_767-300_JA607A_NRT_(16665861328).jpg';

const googleMap = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const staticMap = ([lat, lon], zoom = 15) =>
  `https://static-maps.yandex.ru/1.x/?lang=en_US&ll=${lon},${lat}&z=${zoom}&l=map&size=650,360&pt=${lon},${lat},pm2rdm`;

const trip = {
  weatherUpdated: '2026 年 6 月 12 日',
  hotel: {
    name: 'VIA INN Prime 赤坂',
    map: googleMap('VIA INN Prime Akasaka'),
    website: 'https://www.viainn.com/en/akasaka/',
  },
  flights: [
    { direction: '去程', number: 'NH964', date: '6/18', route: '北京首都 → 东京羽田', time: '08:20—12:55' },
    { direction: '返程', number: 'NH963', date: '6/22', route: '东京羽田 → 北京首都', time: '17:15—20:15' },
  ],
  checklist: [
    '预约 6/20 SOMETIME 吉祥寺席位，或向店方确认现场入场规则',
    '确认 6/21 Klook 一日团集合地点、集合时间和导游联系方式',
    '6/17 晚更新天气，准备折叠伞、防水鞋和轻薄外套',
    '将护照、机票、酒店、餐厅、电影、美术馆和一日团订单保存离线',
    '确认 ANA App 中的羽田航站楼与值机柜台',
  ],
  days: [
    {
      id: 'day-618',
      date: '6.18',
      weekday: 'THU',
      title: '抵达东京，慢慢进入城市',
      area: '羽田 · 赤坂 · 丸之内',
      flightDetail: {
        number: 'NH964',
        direction: '去程',
        date: '6/18',
        weekday: 'THU',
        status: '航班已定',
        from: { code: 'PEK', name: '北京首都', terminal: 'T3', time: '08:20' },
        to: { code: 'HND', name: '东京羽田', terminal: 'T3', time: '12:55' },
        distance: '2,088 km',
        duration: '约 3h35m',
        aircraft: 'Boeing 767-300ER',
        aircraftNote: '双发宽体',
        reg: 'JA623A / JA625A / JA627A',
        callsign: 'ALL NIPPON 964',
        cruise: '约 FL360 · 11,000 m',
        seatTip: '白天东向航段，晴天在下降进近段右侧（K 排靠窗）有机会远眺富士山；以当日进近方向为准。',
      },
      weather: { icon: 'Rain', temp: '20—24°C', text: '预计有雨', note: '穿防水鞋，随身带折叠伞。若入境延误，直接取消 KITTE。' },
      timeline: [
        ['08:20—12:55', 'NH964 北京首都 → 东京羽田', '航班已定'],
        ['13:00—15:00', '入境、取行李、进城', '预留缓冲'],
        ['15:00—16:00', 'VIA INN Prime 赤坂入住、休整', '住宿'],
        ['16:30 后', 'KITTE 丸之内、东京站夜景与晚餐', '可选'],
      ],
      intro: '抵达日不安排刚性项目。先完成入住、补水和充电，再根据天气与体力决定是否去丸之内。',
      transit: '羽田前往酒店可选京急线经新桥换乘，或东京单轨电车经滨松町换乘。带大件行李时按当日导航选择换乘更少的一条，预计 45—60 分钟。',
      notices: [
        { type: 'info', title: '交通提示', text: 'Suica/PASMO 可覆盖本次东京市内的大部分交通；羽田到达口以 ANA 当日通知为准。' },
      ],
      places: [
        {
          name: 'KITTE 丸之内',
          kicker: 'Optional · 1.5—2 hours',
          status: 'optional',
          statusText: '可删减',
          description: '从 JP Tower 商场空间一路逛到屋顶花园，看东京站丸之内站舍亮灯。晚餐可在 KITTE 或东京站一带解决。',
          tips: ['若 17:30 后才从酒店出发，建议跳过。', '赤坂/赤坂见附前往东京站或二重桥前，再步行。'],
          coordinates: [35.6798593, 139.7647819],
          mapQuery: 'KITTE Marunouchi',
          website: 'https://marunouchi.jp-kitte.jp/gb/',
          photos: [
            { src: 'assets/kitte.jpg', alt: 'JP Tower 与 KITTE 外观', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/4/41/JP_Tower-1c.jpg' },
            { src: 'assets/tokyo-station.jpg', alt: '东京站丸之内站舍', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Tokyo_Station_Marunouchi_Building_P5228787.jpg' },
          ],
        },
      ],
    },
    {
      id: 'day-619',
      date: '6.19',
      weekday: 'FRI',
      title: '建筑、寿司与一部长电影',
      area: '上野 · 麻布台 · 池袋 · 新宿',
      weather: { icon: 'Cloud', temp: '21—27°C', text: '多云、湿度较高', note: '预约最密集的一天。上午美术馆务必控制离馆时间。' },
      timeline: [
        ['09:20—11:00', '国立西洋美术馆', '建议 90 分钟'],
        ['11:00—12:15', '上野 → 麻布台', '预留找店时间'],
        ['12:30', '鮨麻布 東京', '已预约'],
        ['14:10—15:25', '麻布台 → 池袋', '提前入场'],
        ['15:45', '新文芸坐《一一》', '已预约'],
        ['电影后', 'Alpen TOKYO', '可选'],
      ],
      intro: '12:30 的午餐和 15:45 的电影是当天两枚固定锚点。上午 11:00 准时离馆，午餐后直接前往池袋。',
      transit: '酒店搭地铁前往上野；上野转往神谷町或六本木一丁目；麻布台午餐后前往池袋。电影结束后再决定是否去新宿。',
      places: [
        {
          name: '国立西洋美术馆',
          kicker: '09:20 · Architecture & Art',
          description: '先看勒・柯布西耶设计的本馆建筑与常设展，再按兴趣进入 2026 年当期特展。控制在 90 分钟，11:00 准时离馆。',
          tips: ['上野站公园口步行前往。', '当期特展预计于 6/21 结束，临行前复核官网。'],
          coordinates: [35.7155512, 139.7759424],
          mapQuery: 'National Museum of Western Art Tokyo',
          website: 'https://www.nmwa.go.jp/en/visit/',
          extraLink: ['当期展览', 'https://www.nmwa.go.jp/en/exhibitions/2026artists.html'],
          photos: [
            { src: 'assets/nmwa-exterior.jpg', alt: '国立西洋美术馆外观', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/National_museum_of_western_art05s3200.jpg' },
            { src: 'assets/nmwa-interior.jpg', alt: '国立西洋美术馆馆内空间', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Tokyo_National_Museum_of_Western_Art_Interior_2.jpg' },
          ],
        },
        {
          name: '鮨麻布 東京',
          kicker: '12:30 · Omakase',
          status: 'booked',
          statusText: '已预约',
          address: '日本〒106-0041 Tokyo, Minato City, Azabudai, 1 Chome−3−1 3F',
          description: '按厨师节奏享用 omakase。建议 12:15 前抵达所在楼层，用餐结束后不再加排项目，直接去池袋。',
          tips: ['目标 15:20 前抵达新文芸坐。', '确认预约姓名与套餐信息。'],
          coordinates: [35.6614747, 139.7408267],
          mapQuery: 'Sushi Azabu Tokyo Azabudai Hills',
          website: 'https://balconyby6th.com/en/sushiazabu/',
          photos: [
            { src: 'assets/sushi-food.jpg', alt: '鮨麻布寿司料理', credit: PHOTO_SOURCES.sushi, source: 'https://balconyby6th.com/en/sushiazabu/' },
            { src: 'assets/sushi-room.jpg', alt: '鮨麻布店内空间', credit: PHOTO_SOURCES.sushi, source: 'https://balconyby6th.com/en/sushiazabu/' },
          ],
        },
        {
          name: '新文芸坐《一一》',
          kicker: '15:45 · Cinema',
          status: 'booked',
          statusText: '已预约',
          description: '《一一》片长较长，入场前先补水并去洗手间。观影结束后不安排必须完成的项目，保留恢复体力的空间。',
          tips: ['建议 15:20 前抵达。', '票券提前保存离线。'],
          coordinates: [35.7325827, 139.7137059],
          mapQuery: 'Shin Bungeiza Ikebukuro',
          website: 'https://www.shin-bungeiza.com/',
          extraLink: ['《一一》日本官网', 'https://yi-yi.jp/'],
          photos: [
            { src: 'assets/shin-bungeiza.jpg', alt: '新文芸坐影院外观', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Shin-Bungeiza_IMG_8231r_R_20151112.JPG' },
            { src: 'assets/yi-yi.jpg', alt: '电影《一一》放映海报', credit: PHOTO_SOURCES.shin, source: 'https://www.shin-bungeiza.com/' },
          ],
        },
        {
          name: 'Alpen TOKYO',
          kicker: 'After cinema · Sports retail',
          status: 'optional',
          statusText: '可删减',
          description: '按楼层集中看户外、跑步、球类和日系运动品牌。只有电影结束后仍有体力时才前往，建议停留 60—90 分钟。',
          tips: ['与 KITTE 同属可删减项目。', '疲劳时直接返回赤坂。'],
          coordinates: [35.6934557, 139.7008272],
          mapQuery: 'Alpen TOKYO Shinjuku',
          website: 'https://store.alpen-group.jp/Form/RealShop/ShopDetail.aspx?rsid=5200',
          photos: [
            { src: 'assets/alpen-building.jpg', alt: 'Alpen TOKYO 所在建筑', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Shinjuku_Yunika_Building_Alpen_TOKYO_%28Ready_to_open%29_March_2022.jpg' },
            { src: 'assets/alpen-exterior.jpg', alt: 'Alpen TOKYO 外观', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Shinjuku_Yunika_Building_Alpen_TOKYO_202408061151_IMG_0394.jpg' },
          ],
        },
      ],
    },
    {
      id: 'day-620',
      date: '6.20',
      weekday: 'SAT',
      title: '庭园、书店、街区与爵士夜',
      area: '青山 · 神保町 · 原宿 · 下北泽 · 吉祥寺',
      weather: { icon: 'Storm', temp: '20—26°C', text: '午后可能有较强阵雨', note: '书店和商场可作为避雨点。天气恶化时优先保留根津、神保町和 SOMETIME。' },
      timeline: [
        ['10:00—11:30', '根津美术馆', '已预约'],
        ['12:10—14:10', '神保町', '书店与午餐'],
        ['14:40—15:40', 'BEAMS 原宿本店', '购物'],
        ['16:10—17:50', '下北泽', '街区散步'],
        ['18:00—18:45', '井之头线前往吉祥寺', '转场'],
        ['19:00', 'SOMETIME Jazz Bar', '尚未预约'],
      ],
      intro: '当天跨度最大，但地铁与私铁衔接顺畅。不要在单一街区逗留过久，18:30 前抵达吉祥寺。',
      transit: '表参道搭半藏门线直达神保町；神保町返回表参道/原宿；从明治神宫前经代代木上原前往下北泽，再搭京王井之头线去吉祥寺。',
      notices: [
        { type: 'warning', title: '未预约', text: 'SOMETIME 尚未预约，建议尽快联系店方确认 6/20 席位。' },
      ],
      places: [
        {
          name: '根津美术馆',
          kicker: '10:00 · Art & Garden',
          status: 'booked',
          statusText: '已预约',
          description: '先看当期展览，再留至少 30 分钟给庭园、茶室与石佛。入口竹林步道很适合雨天，但庭园石阶湿滑时要放慢。',
          tips: ['酒店前往表参道站，从 A5 出口一带步行。', '11:30 左右离馆。'],
          coordinates: [35.6622429, 139.7172555],
          mapQuery: 'Nezu Museum Tokyo',
          website: 'https://www.nezu-muse.or.jp/jp/exhibitions/current/',
          photos: [
            { src: 'assets/nezu-garden.jpg', alt: '根津美术馆庭园', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Nezu_Museum_Garten-20091020-RM-112901.jpg' },
            { src: 'assets/nezu-teahouse.jpg', alt: '根津美术馆庭园与茶室', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Nezu_Museum_Garten-20091020-RM-113550.jpg' },
          ],
        },
        {
          name: '神保町',
          kicker: '12:10 · Books & Curry',
          description: '沿靖国通从三省堂周边向古书街慢走，按兴趣挑文学、设计、电影或摄影书店。午餐选神保町咖喱，再用老派喫茶店收尾。',
          tips: ['不要设过多必去店，集中逛 2—3 家。', '14:10 左右离开。'],
          coordinates: [35.6950136, 139.7583761],
          mapQuery: 'Jimbocho Book Town',
          website: 'https://visit-chiyoda.tokyo/en/experience/',
          photos: [
            { src: 'assets/jimbocho-books.jpg', alt: '神保町古书店', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Used_bookstore_in_Jinb%C5%8Dch%C5%8D_001.jpg' },
            { src: 'assets/jimbocho-street.jpg', alt: '神保町书店街', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Sanseido_bookstore_kanda-jimbocho_Oct_15_2021_various.jpeg' },
          ],
        },
        {
          name: 'BEAMS 原宿本店',
          kicker: '14:40 · Japanese Fashion',
          description: '重点看店铺限定、联名和日本企划，控制在 45—60 分钟。购物后从明治神宫前或代代木上原方向前往下北泽。',
          tips: ['优先看限定与联名。', '不要在周边继续扩展购物路线。'],
          coordinates: [35.6716426, 139.7083459],
          mapQuery: 'BEAMS Harajuku',
          website: 'https://www.beams.co.jp/shop/h/',
          photos: [
            { src: 'assets/beams-exterior.jpg', alt: 'BEAMS 原宿店外观', credit: PHOTO_SOURCES.beams, source: 'https://www.beams.co.jp/shop/h/' },
            { src: 'assets/beams-interior.jpg', alt: 'BEAMS 原宿店空间', credit: PHOTO_SOURCES.beams, source: 'https://www.beams.co.jp/shop/h/' },
          ],
        },
        {
          name: '下北泽',
          kicker: '16:10 · Vintage & Records',
          description: '以车站为中心走 Bonus Track、reload 一带，再按兴趣进入古着店、独立唱片店和咖啡馆。给 90 分钟，不要为了打卡绕远。',
          tips: ['17:50 左右回到下北泽站。', '搭京王井之头线前往吉祥寺。'],
          coordinates: [35.6615657, 139.6670604],
          mapQuery: 'Shimokitazawa Tokyo',
          website: 'https://www.gotokyo.org/en/destinations/western-tokyo/shimokitazawa/index.html',
          photos: [
            { src: 'assets/shimokitazawa-street.jpg', alt: '下北泽街景', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Walk_in_Shimokitazawa_3.jpg' },
            { src: 'assets/shimokitazawa-walk.jpg', alt: '下北泽街区散步', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Walk_in_Shimokitazawa_4.jpg' },
          ],
        },
        {
          name: 'SOMETIME 吉祥寺',
          kicker: '19:00 · Jazz Night',
          status: 'unbooked',
          statusText: '尚未预约',
          description: '按当前演出表，6/20 晚为 YOSHIAKI MASUO Bossa Animada Trio，费用约 ¥4,000，另需至少点一项餐饮。实际阵容与规则以店方回复为准。',
          tips: ['建议 18:30 前抵达吉祥寺。', '店内座位环绕舞台，入口位于商店街内。'],
          coordinates: [35.7047657, 139.5800892],
          mapQuery: 'SOMETIME Jazz Kichijoji',
          website: 'https://www.sometime.co.jp/sometime/live.html',
          extraLink: ['店铺信息', 'https://www.sometime.co.jp/sometime/intro.html'],
          photos: [
            { src: 'assets/sometime-live.jpg', alt: 'SOMETIME 爵士演出现场', credit: PHOTO_SOURCES.sometime, source: 'https://www.sometime.co.jp/sometime/intro.html' },
            { src: 'assets/sometime-room.jpg', alt: 'SOMETIME 店内空间', credit: PHOTO_SOURCES.sometime, source: 'https://www.sometime.co.jp/sometime/intro.html' },
          ],
        },
      ],
    },
    {
      id: 'day-621',
      date: '6.21',
      weekday: 'SUN',
      title: '日光：山水与神社的一日',
      area: '日光东照宫 · 伊吕波坂 · 中禅寺湖 · 华严瀑布',
      weather: { icon: 'Mountain', temp: '16—25°C', text: '多云，午后可能有小雨', note: '山区体感低于东京。穿轻薄外套和防滑鞋，石阶可能湿滑。' },
      timeline: [
        ['集合前', '提前 15—20 分钟到订单指定地点', 'Klook'],
        ['上午', '日光东照宫', '导览'],
        ['中午后', '伊吕波坂、中禅寺湖', '车辆移动'],
        ['下午', '华严瀑布', '水量偏低'],
        ['晚间', '返回东京', '以订单为准'],
      ],
      intro: '本日不安排公共交通。东京往返日光、景点间移动均按一日团车辆执行，以 Klook 订单中的集合点、时间和导游通知为准。',
      transit: '全程使用一日团车辆。伊吕波坂连续弯道较多，容易晕车者提前准备药物并避免过饱。',
      notices: [
        { type: 'warning', title: '华严瀑布水量', text: '截至 2026 年 6 月 12 日，工作日约 0.1 m³/s，周末及节假日约 0.2 m³/s。6/21 为周日，按当前公告预计约 0.2 m³/s。' },
        { type: 'info', title: '费用确认', text: '确认团费是否包含东照宫门票、午餐和华严瀑布电梯。' },
      ],
      primaryLink: ['打开 Klook 一日团', 'https://www.klook.com/zh-CN/activity/160686-tochigi-nikko-toshogu-irohazaka-lake-chuzenji-kegon-falls-tour/'],
      places: [
        {
          name: '日光东照宫',
          kicker: 'World Heritage · Shrine',
          status: 'tour',
          statusText: '一日团',
          description: '重点看阳明门、三猿、眠猫与杉木参道。建筑装饰信息量很大，优先听导游讲解关键图像和德川家康相关历史。',
          tips: ['台阶较多，鞋底需要防滑。', '先听讲解，再留少量自由拍照时间。'],
          coordinates: [36.7581, 139.5988],
          mapQuery: 'Nikko Toshogu',
          website: 'https://www.toshogu.jp/english/',
          photos: [
            { src: 'assets/nikko-toshogu.jpg', alt: '日光东照宫', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Nikko_toshogu_shrine.jpg' },
          ],
        },
        {
          name: '华严瀑布',
          kicker: 'Kegon Falls · Low flow alert',
          status: 'flow',
          statusText: '水量偏低',
          description: '日本代表性瀑布之一。即使水量偏低，峡谷地形与近百米落差仍值得观看；是否进入收费电梯观景台视团队停留时间决定。',
          tips: ['资料照片为丰水期效果。', '实际水量受降雨和临时调度影响。'],
          coordinates: [36.738, 139.5028],
          mapQuery: 'Kegon Falls',
          website: 'https://www.pref.tochigi.lg.jp/h07/kegonnotaki_rakusuiryo.html',
          photos: [
            { src: 'assets/kegon-falls.jpg', alt: '华严瀑布丰水期景观', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Kegon_Taki.jpg' },
          ],
        },
      ],
    },
    {
      id: 'day-622',
      date: '6.22',
      weekday: 'MON',
      title: '咖啡与庭园，然后回家',
      area: '清澄白河 · 赤坂 · 羽田',
      flightDetail: {
        number: 'NH963',
        direction: '返程',
        date: '6/22',
        weekday: 'MON',
        status: '航班已定',
        from: { code: 'HND', name: '东京羽田', terminal: 'T3', time: '17:15' },
        to: { code: 'PEK', name: '北京首都', terminal: 'T3', time: '20:15' },
        distance: '2,088 km',
        duration: '约 3h55m',
        aircraft: 'Boeing 767-300ER',
        aircraftNote: '双发宽体',
        reg: 'JA623A / JA625A / JA627A',
        callsign: 'ALL NIPPON 963',
        cruise: '约 FL360 · 11,000 m',
        seatTip: '傍晚西向航段，左侧（A 排靠窗）有机会看到夕阳与海岸线；以当日航向为准。',
      },
      weather: { icon: 'Sun', temp: '19—27°C', text: '晴间多云', note: '返程日只安排一个街区。最晚 13:30 从赤坂出发前往羽田。' },
      timeline: [
        ['08:30 前', '退房或寄存行李', '确认取件流程'],
        ['09:15—11:15', '清澄白河', '咖啡与庭园'],
        ['11:15—12:15', '返回赤坂', '午餐、取行李'],
        ['13:15—14:30', '前往羽田机场', '值机与出境'],
        ['17:15—20:15', 'NH963 东京羽田 → 北京首都', '航班已定'],
      ],
      intro: '上午只保留清澄白河一个区域。11:15 必须开始返回赤坂，不为网红咖啡排队超过 20 分钟。',
      transit: '赤坂一带搭地铁前往清澄白河；取行李后前往新桥/大门方向，换乘京急线或东京单轨电车前往羽田。为国际航班预留至少 2.5 小时机场时间。',
      notices: [
        { type: 'warning', title: '返程边界', text: '若上午下雨、庭园排队或交通异常，立即缩短清澄白河停留。最终航站楼以 ANA App 为准。' },
      ],
      places: [
        {
          name: '清澄白河',
          kicker: '09:15 · Garden & Coffee',
          description: '天气稳定时先走清澄庭园的泉水、假山与步石环线，再去附近咖啡店；若庭园临时关闭，则选择一家烘焙咖啡店加仓库街区散步。',
          tips: ['周一营业情况差异较大，前一晚复核。', '11:15 必须开始返程。'],
          coordinates: [35.679981, 139.7977865],
          mapQuery: 'Kiyosumi Gardens',
          website: 'https://www.gotokyo.org/en/destinations/eastern-tokyo/kiyosumi-shirakawa/index.html',
          extraLink: ['清澄庭园信息', 'https://www.gotokyo.org/en/spot/25/index.html'],
          photos: [
            { src: 'assets/kiyosumi-garden.jpg', alt: '清澄庭园', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Kiyosumi_Garden_%2811301989825%29.jpg' },
            { src: 'assets/kiyosumi-view.jpg', alt: '清澄庭园景观', credit: PHOTO_SOURCES.gotokyo, source: 'https://www.gotokyo.org/en/spot/25/index.html' },
          ],
        },
      ],
    },
  ],
};

const statusBadge = (place) =>
  place.status
    ? `<span class="status status-${place.status}">${place.statusText}</span>`
    : '';

const renderPhotos = (photos) => `
  <div class="photo-grid ${photos.length === 1 ? 'photo-grid-single' : ''}">
    ${photos.map((photo) => `
      <figure>
        <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async">
        <figcaption>${photo.alt} · <a href="${photo.source}" target="_blank" rel="noreferrer">${photo.credit} ↗</a></figcaption>
      </figure>
    `).join('')}
  </div>`;

const renderMap = (place) => `
  <div class="map-card">
    <img src="${staticMap(place.coordinates, place.name === '华严瀑布' || place.name === '日光东照宫' ? 14 : 15)}" alt="${place.name} 定位地图" loading="lazy">
    <div class="map-card-copy">
      <span>Location</span>
      <strong>${place.name}</strong>
      <small>地图数据：Yandex Maps</small>
    </div>
    <a href="${googleMap(place.mapQuery)}" target="_blank" rel="noreferrer">Google Maps ↗</a>
  </div>`;

const renderPlace = (place, index) => `
  <article class="place-card">
    <header class="place-header">
      <div>
        <p class="place-kicker">${String(index + 1).padStart(2, '0')} / ${place.kicker}</p>
        <h3>${place.name}</h3>
      </div>
      ${statusBadge(place)}
    </header>
    ${place.address ? `<p class="address">${place.address}</p>` : ''}
    <p class="place-description">${place.description}</p>
    <ul class="tip-list">${place.tips.map((tip) => `<li>${tip}</li>`).join('')}</ul>
    ${renderPhotos(place.photos)}
    ${renderMap(place)}
    <div class="source-actions">
      <a href="${place.website}" target="_blank" rel="noreferrer">官网 / 参考资料 ↗</a>
      ${place.extraLink ? `<a href="${place.extraLink[1]}" target="_blank" rel="noreferrer">${place.extraLink[0]} ↗</a>` : ''}
    </div>
  </article>`;

const renderTimeline = (items) => `
  <ol class="timeline">
    ${items.map(([time, name, note]) => `
      <li>
        <time>${time}</time>
        <div><strong>${name}</strong><span>${note}</span></div>
      </li>`).join('')}
  </ol>`;

const renderNotices = (notices = []) => notices.map((notice) => `
  <aside class="notice notice-${notice.type}">
    <strong>${notice.title}</strong>
    <p>${notice.text}</p>
  </aside>`).join('');

const renderFlightDetail = (flight) => `
  <article class="flight-card">
    <header class="flight-card-head">
      <span class="flight-no">${flight.number}</span>
      <span class="flight-dir">${flight.direction} · ${flight.date} ${flight.weekday}</span>
      <span class="flight-status">${flight.status}</span>
    </header>
    <div class="flight-banner">
      <img class="flight-photo" src="assets/ana-767.jpg" alt="ANA 波音 767-300 客机" loading="lazy" decoding="async" width="1600" height="1067">
      <span class="flight-scrim" aria-hidden="true"></span>
      <svg class="flight-route" viewBox="0 0 520 150" role="img" aria-label="${flight.from.code} 飞往 ${flight.to.code} 航路示意图">
        <path class="rt-line" d="M70 105 Q260 38 450 105" fill="none" stroke-width="2" stroke-dasharray="2 6" stroke-linecap="round"/>
        <circle class="rt-dot" cx="70" cy="105" r="6"/>
        <circle class="rt-dot" cx="450" cy="105" r="6"/>
        <path class="rt-dot" d="M252 70 L270 64 L252 58 L256 64 Z"/>
        <text class="rt-code" x="70" y="129" text-anchor="middle">${flight.from.code}</text>
        <text class="rt-sub" x="70" y="145" text-anchor="middle">${flight.from.name} ${flight.from.terminal} · ${flight.from.time}</text>
        <text class="rt-code" x="450" y="129" text-anchor="middle">${flight.to.code}</text>
        <text class="rt-sub" x="450" y="145" text-anchor="middle">${flight.to.name} ${flight.to.terminal} · ${flight.to.time}</text>
        <text class="rt-sub" x="260" y="92" text-anchor="middle">${flight.distance} · 飞行${flight.duration}</text>
      </svg>
    </div>
    <div class="flight-specs">
      <div><span class="flight-spec-label">机型</span><span class="flight-spec-val">${flight.aircraft} · ${flight.aircraftNote}</span></div>
      <div><span class="flight-spec-label">典型注册号</span><span class="flight-spec-val">${flight.reg}</span></div>
      <div><span class="flight-spec-label">呼号 Callsign</span><span class="flight-spec-val">${flight.callsign}</span></div>
      <div><span class="flight-spec-label">巡航高度</span><span class="flight-spec-val">${flight.cruise}</span></div>
    </div>
    <p class="flight-seat"><span>选座 · 观景</span>${flight.seatTip}</p>
    <p class="flight-credit">机型、航站楼与时刻以 ANA App 当日通知为准 · 机图 <a href="${ANA767_PHOTO_SOURCE}" target="_blank" rel="noreferrer">${PHOTO_SOURCES.ana767} ↗</a></p>
  </article>`;

const renderDay = (day, index) => `
  <section class="day-section section-anchor" id="${day.id}" data-nav-section>
    <header class="day-heading">
      <div class="day-number"><span>Day</span>${String(index + 1).padStart(2, '0')}</div>
      <div class="day-title">
        <p>${day.date} / ${day.weekday} · ${day.area}</p>
        <h2>${day.title}</h2>
      </div>
      <div class="weather-card">
        <span>${day.weather.icon}</span>
        <strong>${day.weather.temp}</strong>
        <p>${day.weather.text}</p>
      </div>
    </header>

    <div class="weather-note">${day.weather.note}</div>
    <div class="day-layout">
      <aside class="day-rail">
        <p class="rail-label">Schedule</p>
        ${renderTimeline(day.timeline)}
      </aside>
      <div class="day-content">
        ${day.flightDetail ? renderFlightDetail(day.flightDetail) : ''}
        <div class="day-intro">
          <p>${day.intro}</p>
          <div class="transit"><span>Transit</span><p>${day.transit}</p></div>
          ${day.primaryLink ? `<a class="button button-primary day-primary-link" href="${day.primaryLink[1]}" target="_blank" rel="noreferrer">${day.primaryLink[0]} ↗</a>` : ''}
        </div>
        ${renderNotices(day.notices)}
        <div class="places">${day.places.map(renderPlace).join('')}</div>
      </div>
    </div>
  </section>`;

const renderOverview = () => `
  <section class="overview section-anchor" id="overview" data-nav-section>
    <div class="section-label">Trip Overview</div>
    <div class="overview-heading">
      <h2>五天，七个东京片区，<br>再加一日山水。</h2>
      <p>以预约项目为锚点，把美术馆、街区、购物和爵士夜串成顺路动线。KITTE 与 Alpen 是体力不足时最先删除的项目。</p>
    </div>
    <div class="route-grid">
      ${trip.days.map((day, index) => `
        <a class="route-card" href="#${day.id}">
          <span>${String(index + 1).padStart(2, '0')}</span>
          <p>${day.date} · ${day.weekday}</p>
          <strong>${day.area}</strong>
          <small>${day.title}</small>
        </a>`).join('')}
    </div>
    <div class="travel-basics">
      <article>
        <span class="card-label">Flights</span>
        ${trip.flights.map((flight) => `<div class="flight-row"><b>${flight.number}</b><div><strong>${flight.date} · ${flight.time}</strong><span>${flight.route}</span></div></div>`).join('')}
      </article>
      <article>
        <span class="card-label">Base</span>
        <h3>${trip.hotel.name}</h3>
        <p>赤坂、溜池山王、赤坂见附均可利用，适合本次东西向移动。</p>
        <div class="source-actions"><a href="${trip.hotel.map}" target="_blank" rel="noreferrer">Google Maps ↗</a><a href="${trip.hotel.website}" target="_blank" rel="noreferrer">酒店官网 ↗</a></div>
      </article>
    </div>
  </section>`;

const renderChecklist = () => `
  <section class="checklist section-anchor" id="checklist" data-nav-section>
    <div class="section-label">Before Departure</div>
    <div class="checklist-layout">
      <div><h2>出发前<br>最后确认</h2><p>动态信息会变化。航站楼、营业时间、天气与一日团集合信息应在出发前 24 小时再次核对。</p></div>
      <ul>${trip.checklist.map((item) => `<li><span></span>${item}</li>`).join('')}</ul>
    </div>
    <p class="freshness">天气预报更新于 ${trip.weatherUpdated}，仅作行程规划参考。</p>
  </section>`;

const app = document.querySelector('#app');
const heroFacts = document.querySelector('#hero-facts');

heroFacts.innerHTML = `
  <div><span>Duration</span><strong>5 Days</strong><small>18—22 June</small></div>
  <div><span>Base</span><strong>Akasaka</strong><small>VIA INN Prime</small></div>
  <div><span>Key bookings</span><strong>3 Fixed</strong><small>Sushi · Film · Nezu</small></div>`;

app.innerHTML = `${renderOverview()}${trip.days.map(renderDay).join('')}${renderChecklist()}`;

const themeButtons = [...document.querySelectorAll('[data-set-theme]')];

const applyTheme = (theme) => {
  if (!['journal', 'planner', 'culture'].includes(theme)) return;
  document.documentElement.dataset.theme = theme;
  themeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.setTheme === theme));
  });
  document.querySelector('meta[name="theme-color"]').content = {
    journal: '#eee6d8', planner: '#f3f6fa', culture: '#171712',
  }[theme];
  try { localStorage.setItem('tokyo-theme', theme); } catch (_) {}
};

themeButtons.forEach((button) => button.addEventListener('click', () => applyTheme(button.dataset.setTheme)));
applyTheme(document.documentElement.dataset.theme || 'journal');

const navLinks = [...document.querySelectorAll('.day-nav a')];
const sections = [...document.querySelectorAll('[data-nav-section]')];

const observer = new IntersectionObserver((entries) => {
  const visible = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`));
}, { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.2, 0.6] });

sections.forEach((section) => observer.observe(section));

