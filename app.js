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

const commonsFile = (filename) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=1600`;

const commonsPage = (filename) =>
  `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;

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
        ['13:00—14:30', '入境、取行李、进城', '预留缓冲'],
        ['14:30—15:00', '東京油組総本店 赤坂見附组', '到达午饭'],
        ['15:15—16:00', 'VIA INN Prime 赤坂入住、休整', '住宿'],
        ['16:30 后', 'KITTE 丸之内、东京站夜景', '可选'],
        ['18:30 后', '魚がし日本一 八重洲（立食寿司）', '晚饭'],
      ],
      intro: '抵达日不排刚性项目。落地后在赤坂见附下车吃碗油そば当午饭，再去酒店办入住、补水充电；傍晚视天气与体力决定要不要去丸之内，晚饭在东京站旁的立食寿司快速解决。',
      transit: '羽田前往酒店一条自然动线：京急/浅草线到新桥，换银座线到赤坂见附（到酒店前最后一站，步行约 5 分钟）。带大件行李时按当日导航选换乘更少的一条，预计 45—60 分钟。',
      notices: [
        { type: 'info', title: '交通提示', text: 'Suica/PASMO 可覆盖本次东京市内的大部分交通；羽田到达口以 ANA 当日通知为准。' },
      ],
      places: [
        {
          name: '東京油組総本店 赤坂見附组',
          kicker: '14:30 · Abura-soba',
          status: 'optional',
          statusText: '到达午饭',
          description: '赤坂见附站旁的油そば（无汤拌面）专门店，落地进城顺路、出餐快，适合当抵达日的第一顿。基本款是「油そば」，按口味加スペシャルトッピングA（葱、芝麻、溏心蛋）。',
          history: '油そば（无汤拌面）相传源自上世纪 50 年代东京武藏野一带的学生食堂，比拉面更早在关东高校圈流行；東京油組総本店把它做成连锁专门店，推广到都心各站前。',
          culture: '吃油そば的乐趣在于自己调味：先淋醋和辣油把面拌开，再用葱、芝麻和溏心蛋调节口感，是一种比拉面更随性、更「自己动手」的东京快食文化。',
          restaurant: {
            meal: '到达午饭 · 油そば',
            tabelog: '3.19',
            reviews: '食べログ',
            priceJpy: '约 ¥900–1,100',
            priceCny: '约 ¥38–47',
            signature: ['油そば（招牌拌面）', 'スペシャルトッピングA（葱·芝麻·溏心蛋）', '加面免费（要在吃前告知）'],
            booking: '无需预约，现场排队即可；营业 11:00 起。人均与评分以食べログ当日为准。',
          },
          tips: ['赤坂见附站旁，去酒店前顺路。', '吃完拌面再步行到 VIA INN Prime 赤坂办入住。'],
          coordinates: [35.6770, 139.7370],
          mapQuery: '東京油組総本店 赤坂見附組',
          website: 'https://www.aburasoba.com/',
          photos: [
            { src: 'assets/aburasoba.jpg', alt: '油そば（示意）', credit: PHOTO_SOURCES.commons, source: 'https://commons.wikimedia.org/wiki/File:Abura_soba_01.jpg' },
            { src: 'assets/aburasoba-2.jpg', alt: '油そば拌开后（示意）', credit: PHOTO_SOURCES.commons, source: 'https://commons.wikimedia.org/wiki/File:Abura_soba_02.jpg' },
            { src: commonsFile('Abura_soba_by_mitsukuni.jpg'), alt: '油そば（另一种盛法，示意）', credit: PHOTO_SOURCES.commons, source: commonsPage('Abura_soba_by_mitsukuni.jpg') },
          ],
        },
        {
          name: 'KITTE 丸之内',
          kicker: 'Optional · 1.5—2 hours',
          status: 'optional',
          statusText: '可删减',
          description: '从 JP Tower 商场空间一路逛到屋顶花园，看东京站丸之内站舍亮灯。逛完直接步行去八重洲一带吃晚饭。',
          history: 'KITTE 所在的 JP Tower 改建自旧东京中央邮便局用地，保留近代邮政建筑立面，与 1914 年开业的东京站丸之内站舍共同构成丸之内的城市门户。',
          culture: '这里把邮政、商业、办公和公共屋顶庭园放在同一栋楼里，适合把东京的“上班族城市”和观光地东京站放在同一个视角里看。',
          transit: {
            total: '约 18 分',
            legs: [
              { mode: 'metro', code: 'G', color: '#FF9500', name: '银座线', from: '赤坂见附', to: '新桥' },
              { mode: 'walk', time: '约 9 分', dist: '酒店休整后出发' },
            ],
          },
          tips: ['若 17:30 后才从酒店出发，建议跳过。', '赤坂见附经新桥/银座到东京站一带，再步行。'],
          coordinates: [35.6798593, 139.7647819],
          mapQuery: 'KITTE Marunouchi',
          website: 'https://marunouchi.jp-kitte.jp/gb/',
          photos: [
            { src: 'assets/kitte.jpg', alt: 'JP Tower 与 KITTE 外观', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/4/41/JP_Tower-1c.jpg' },
            { src: 'assets/tokyo-station.jpg', alt: '东京站丸之内站舍', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Tokyo_Station_Marunouchi_Building_P5228787.jpg' },
            { src: commonsFile('KITTE Marunouchi Atrium 201912.jpg'), alt: 'KITTE 丸之内中庭挑空', credit: PHOTO_SOURCES.commons, source: commonsPage('KITTE Marunouchi Atrium 201912.jpg') },
          ],
        },
        {
          name: '魚がし日本一 八重洲仲通り店',
          kicker: '18:30 后 · Standing Sushi',
          status: 'optional',
          statusText: '晚饭',
          description: '东京站八重洲一侧的立食（站着吃）寿司，连锁老牌，胜在新鲜、快、便宜。逛完 KITTE 穿过东京站到八重洲仲通即可，按贯单点，不用久坐。',
          history: '立食寿司是战后东京为上班族和市场工人发展出的快食形态，魚がし日本一以筑地直送、按贯现点的连锁模式，把平价江户前寿司带到各车站周边。',
          culture: '站着吃寿司讲究节奏：师傅现捏、客人现吃，几贯之间快速解决一餐，是东京通勤生活里把「好鱼」和「快」结合在一起的市井饮食方式。',
          restaurant: {
            meal: '晚饭 · 立食寿司',
            tabelog: '3.4+',
            reviews: '食べログ',
            priceJpy: '约 ¥2,000',
            priceCny: '约 ¥85',
            signature: ['当日筑地直送握寿司（1 贯 ¥75 起）', '本鲔·光物·穴子', '站着吃，人均约 ¥2,000'],
            booking: '无需预约，现场排队；为连锁分店，建议按当日导航就近选店。价格随时价浮动。',
          },
          tips: ['从 KITTE/东京站穿到八重洲仲通约 4—6 分钟。', '站着吃节奏快，吃完早点回赤坂休息。'],
          coordinates: [35.6810, 139.7706],
          mapQuery: '魚がし日本一 八重洲仲通り店',
          website: 'https://www.uogashinihonichi.com/',
          transit: {
            total: '约 6 分',
            legs: [
              { mode: 'walk', time: '约 6 分', dist: '穿过东京站到八重洲 · 约 450 m' },
            ],
          },
          photos: [
            { src: 'assets/nigiri.jpg', alt: '握寿司拼盘（示意）', credit: PHOTO_SOURCES.commons, source: 'https://commons.wikimedia.org/wiki/File:Nigiri_Moriawase_(Sushi_Sei)_(42217840971).jpg' },
            { src: 'assets/nigiri-2.jpg', alt: '本鲔握寿司（示意）', credit: PHOTO_SOURCES.commons, source: 'https://commons.wikimedia.org/wiki/File:Tuna_nigiri_sushi_-_Sushiko_(2648979899).jpg' },
            { src: commonsFile('Unagi nigiri sushi - Sushiko (2648979137).jpg'), alt: '穴子/鳗鱼握寿司（示意）', credit: PHOTO_SOURCES.commons, source: commonsPage('Unagi nigiri sushi - Sushiko (2648979137).jpg') },
          ],
        },
      ],
    },
    {
      id: 'day-619',
      date: '6.19',
      weekday: 'FRI',
      title: '建筑、寿司与一部长电影',
      area: '上野 · 麻布台 · 池袋 · 原宿 · 新宿',
      weather: { icon: 'Cloud', temp: '21—27°C', text: '多云、湿度较高', note: '预约最密集的一天。上午美术馆务必控制离馆时间。' },
      timeline: [
        ['09:20—11:00', '国立西洋美术馆', '建议 90 分钟'],
        ['11:00—12:15', '上野 → 麻布台', '预留找店时间'],
        ['12:30', '鮨麻布 東京', '已预约'],
        ['14:10—15:25', '麻布台 → 池袋', '提前入场'],
        ['15:45', '新文芸坐《一一》', '已预约'],
        ['电影后', 'BEAMS 原宿（趁 20:00 前）', '可选·购物'],
        ['BEAMS 后', 'Alpen TOKYO 新宿', '可选·营业较晚'],
      ],
      intro: '12:30 的午餐和 15:45 的电影是当天两枚固定锚点。上午 11:00 准时离馆，午餐后直接前往池袋。散场后若还有体力，把离得很近的 BEAMS 原宿与 Alpen 新宿一起逛掉——先赶 BEAMS（20:00 关门），再去营业更晚的 Alpen。',
      transit: '酒店搭地铁前往上野；上野转往神谷町或六本木一丁目；麻布台午餐后前往池袋。电影散场后沿 JR 山手线先到原宿、再回新宿，两点都在山手线西侧、彼此约 4 分钟。',
      notices: [
        { type: 'warning', title: '散场后购物有时限', text: '《一一》约 3 小时，15:45 场约 18:40—19:00 散场。BEAMS 原宿一般 20:00 关门，要先去；Alpen 营业较晚可放后面。体力不足时两者都可直接删减，回赤坂休息。' },
      ],
      places: [
        {
          name: '国立西洋美术馆',
          kicker: '09:20 · Architecture & Art',
          description: '先看勒・柯布西耶设计的本馆建筑与常设展，再按兴趣进入 2026 年当期特展。控制在 90 分钟，11:00 准时离馆。',
          history: '美术馆以松方幸次郎旧藏西洋艺术为基础，1959 年开馆。本馆由勒・柯布西耶设计，2016 年作为“勒・柯布西耶的建筑作品”组成部分列入世界文化遗产。',
          culture: '它是战后日本重新连接欧洲艺术史的重要机构，也让上野公园的博物馆群从本土文物、自然科学扩展到西方绘画、雕塑和现代建筑。',
          tips: ['上野站公园口步行前往。', '当期特展预计于 6/21 结束，临行前复核官网。'],
          coordinates: [35.7155512, 139.7759424],
          mapQuery: 'National Museum of Western Art Tokyo',
          website: 'https://www.nmwa.go.jp/en/visit/',
          extraLink: ['当期展览', 'https://www.nmwa.go.jp/en/exhibitions/2026artists.html'],
          photos: [
            { src: 'assets/nmwa-exterior.jpg', alt: '国立西洋美术馆外观', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/National_museum_of_western_art05s3200.jpg' },
            { src: 'assets/nmwa-interior.jpg', alt: '国立西洋美术馆馆内空间', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Tokyo_National_Museum_of_Western_Art_Interior_2.jpg' },
            { src: commonsFile('Tokyo National Museum of Western Art seen from the south.jpg'), alt: '国立西洋美术馆南侧外观', credit: PHOTO_SOURCES.commons, source: commonsPage('Tokyo National Museum of Western Art seen from the south.jpg') },
          ],
        },
        {
          name: '鮨麻布 東京',
          kicker: '12:30 · Omakase',
          status: 'booked',
          statusText: '已预约',
          address: '日本〒106-0041 Tokyo, Minato City, Azabudai, 1 Chome−3−1 3F',
          transit: {
            total: '约 20 分',
            legs: [
              { mode: 'metro', code: 'H', color: '#B5B5AC', name: '日比谷线', from: '上野', to: '神谷町' },
              { mode: 'walk', time: '约 6 分', dist: '上行至麻布台' },
            ],
          },
          description: '按厨师节奏享用 omakase。建议 12:15 前抵达所在楼层，用餐结束后不再加排项目，直接去池袋。',
          history: '鮨麻布源自纽约同名寿司店的东京分店，落在近年更新完成的麻布台 Hills 区域，体现东京高端餐饮从银座、六本木向复合街区扩散的趋势。',
          culture: 'Omakase 的重点不只是“吃到什么”，也包括入座节奏、师傅手部动作、米饭温度和当季鱼料的顺序；午餐时段更适合把体验控制在旅行节奏内。',
          tips: ['目标 15:20 前抵达新文芸坐。', '确认预约姓名与套餐信息。'],
          coordinates: [35.6614747, 139.7408267],
          mapQuery: 'Sushi Azabu Tokyo Azabudai Hills',
          website: 'https://balconyby6th.com/en/sushiazabu/',
          photos: [
            { src: 'assets/sushi-food.jpg', alt: '鮨麻布寿司料理', credit: PHOTO_SOURCES.sushi, source: 'https://balconyby6th.com/en/sushiazabu/' },
            { src: 'assets/sushi-room.jpg', alt: '鮨麻布店内空间', credit: PHOTO_SOURCES.sushi, source: 'https://balconyby6th.com/en/sushiazabu/' },
            { src: commonsFile('Azabudai_Hills_Mori_JP_Tower_2023.jpg'), alt: '鮨麻布所在的麻布台 Hills 街区', credit: PHOTO_SOURCES.commons, source: commonsPage('Azabudai_Hills_Mori_JP_Tower_2023.jpg') },
          ],
        },
        {
          name: '新文芸坐《一一》',
          kicker: '15:45 · Cinema',
          status: 'booked',
          statusText: '已预约',
          transit: {
            total: '约 30 分',
            legs: [
              { mode: 'metro', code: 'H', color: '#B5B5AC', name: '日比谷线', from: '神谷町', to: '银座' },
              { mode: 'metro', code: 'M', color: '#F62E36', name: '丸之内线', from: '银座', to: '池袋' },
            ],
          },
          description: '《一一》片长较长，入场前先补水并去洗手间。观影结束后不安排必须完成的项目，保留恢复体力的空间。',
          history: '新文芸坐延续池袋文艺坐的名画座传统，长期以经典片、导演回顾和双片连映连接电影资料馆与大众放映文化。',
          culture: '名画座是东京影迷文化的重要组成：观众不是为最新商业片而来，而是为大银幕、胶片记忆、专题策展和影史中的“再相遇”。',
          tips: ['建议 15:20 前抵达。', '票券提前保存离线。'],
          coordinates: [35.7325827, 139.7137059],
          mapQuery: 'Shin Bungeiza Ikebukuro',
          website: 'https://www.shin-bungeiza.com/',
          extraLink: ['《一一》日本官网', 'https://yi-yi.jp/'],
          photos: [
            { src: 'assets/shin-bungeiza.jpg', alt: '新文芸坐影院外观', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Shin-Bungeiza_IMG_8231r_R_20151112.JPG' },
            { src: 'assets/yi-yi.jpg', alt: '电影《一一》放映海报', credit: PHOTO_SOURCES.shin, source: 'https://www.shin-bungeiza.com/' },
            { src: commonsFile('Ikebukuro_East_Exit_2012.JPG'), alt: '新文芸坐所在的池袋东口一带', credit: PHOTO_SOURCES.commons, source: commonsPage('Ikebukuro_East_Exit_2012.JPG') },
          ],
        },
        {
          name: 'BEAMS 原宿本店',
          kicker: '电影后 · Japanese Fashion',
          status: 'optional',
          statusText: '可删减',
          transit: {
            total: '约 7 分',
            legs: [
              { mode: 'jr', code: 'JY', color: '#9ACD32', name: 'JR 山手线', from: '池袋', to: '原宿' },
            ],
          },
          description: '电影散场后从池袋沿山手线下来，重点看店铺限定、联名和日本企划，控制在 45—60 分钟。它和 Alpen 离得很近，所以并到这天一起逛；先来 BEAMS 是因为它约 20:00 关门，逛完再往回到新宿的 Alpen。',
          history: 'BEAMS 1976 年创立于原宿，从美国休闲服饰买手店发展成覆盖服装、杂货、唱片、艺术合作的日本生活方式品牌。',
          culture: '原宿本店适合看日本“编辑型零售”的能力：店铺把品牌、杂志感、音乐、街头文化和地方工艺组合成一种可购买的生活风格。',
          tips: ['约 20:00 关门，散场后优先来这。', '逛完沿山手线回新宿接 Alpen，营业以官网为准。'],
          coordinates: [35.6716426, 139.7083459],
          mapQuery: 'BEAMS Harajuku',
          website: 'https://www.beams.co.jp/shop/h/',
          photos: [
            { src: 'assets/beams-exterior.jpg', alt: 'BEAMS 原宿店外观', credit: PHOTO_SOURCES.beams, source: 'https://www.beams.co.jp/shop/h/' },
            { src: 'assets/beams-interior.jpg', alt: 'BEAMS 原宿店空间', credit: PHOTO_SOURCES.beams, source: 'https://www.beams.co.jp/shop/h/' },
            { src: commonsFile('Takeshita_Street,_Harajuku,_Tokyo.jpg'), alt: 'BEAMS 所在的原宿街区氛围', credit: PHOTO_SOURCES.commons, source: commonsPage('Takeshita_Street,_Harajuku,_Tokyo.jpg') },
          ],
        },
        {
          name: 'Alpen TOKYO',
          kicker: 'BEAMS 后 · Sports retail',
          status: 'optional',
          statusText: '可删减',
          transit: {
            total: '约 4 分',
            legs: [
              { mode: 'jr', code: 'JY', color: '#9ACD32', name: 'JR 山手线', from: '原宿', to: '新宿' },
            ],
          },
          description: '从原宿回到新宿，按楼层集中看户外、跑步、球类和日系运动品牌。营业较晚，适合放在 BEAMS 之后收尾；只有电影后仍有体力时才前往，建议停留 60—90 分钟。',
          history: 'Alpen 源自日本大型体育零售体系，新宿旗舰店集合 Sport Depo、Alpen Outdoors 与 Golf5 等业态，是近年大型垂直零售回到市中心的代表。',
          culture: '东京的运动用品店常兼具“购买”和“看日本企划”的意义：配色、联名、户外小物和跑步装备都能反映本地生活方式审美。',
          tips: ['营业较晚，放在 BEAMS 之后。', '疲劳时直接返回赤坂。'],
          coordinates: [35.6934557, 139.7008272],
          mapQuery: 'Alpen TOKYO Shinjuku',
          website: 'https://store.alpen-group.jp/Form/RealShop/ShopDetail.aspx?rsid=5200',
          photos: [
            { src: 'assets/alpen-building.jpg', alt: 'Alpen TOKYO 所在建筑', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Shinjuku_Yunika_Building_Alpen_TOKYO_%28Ready_to_open%29_March_2022.jpg' },
            { src: 'assets/alpen-exterior.jpg', alt: 'Alpen TOKYO 外观', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Shinjuku_Yunika_Building_Alpen_TOKYO_202408061151_IMG_0394.jpg' },
            { src: commonsFile('Shinjuku Yunika Building Alpen TOKYO November 2023.jpg'), alt: '新宿 Alpen TOKYO 夜间立面', credit: PHOTO_SOURCES.commons, source: commonsPage('Shinjuku Yunika Building Alpen TOKYO November 2023.jpg') },
          ],
        },
      ],
    },
    {
      id: 'day-620',
      date: '6.20',
      weekday: 'SAT',
      title: '庭园、街区、古着与爵士夜',
      area: '青山 · 下北泽 · 吉祥寺',
      weather: { icon: 'Storm', temp: '20—26°C', text: '午后可能有较强阵雨', note: '商场与商店街可作避雨点。天气恶化时优先保留根津、金子屋与 SOMETIME。' },
      timeline: [
        ['10:00—11:30', '根津美术馆', '已预约'],
        ['11:45—12:45', '表参道 / 青山一带午餐', '午餐'],
        ['13:30—15:00', '下北泽（古着/唱片）', '街区散步'],
        ['15:15 起', '吉祥寺 · 井之头公园 + 商店街', '从容逛'],
        ['17:30', '金子屋（天丼/天ぷらめし）', '早晚饭'],
        ['19:00', 'SOMETIME 吉祥寺', '尚未预约'],
      ],
      intro: '重排成一条向西的动线：上午根津，表参道一带午餐后经下北泽一路向西到吉祥寺，傍晚在金子屋吃早晚饭，再去 SOMETIME 听爵士。不动任何已预约项；BEAMS 原宿与 Alpen 离得近，已并到 6/19 一起逛，神保町因不顺路移到下方「待定区」。',
      transit: '表参道经千代田线到代代木上原，换小田急前往下北泽；下北泽搭京王井之头线一路到吉祥寺，金子屋与 SOMETIME 都在吉祥寺商店街内步行可达。',
      notices: [
        { type: 'warning', title: '未预约', text: 'SOMETIME 尚未预约，建议尽快联系店方确认 6/20 席位。金子屋营业到约 20:30，17:30 入座来得及衔接 19:00 演出。' },
        { type: 'info', title: '神保町已移出', text: '神保町不在本日西向动线上，已移到下方「待定区」，机动时再单独安排半天。' },
      ],
      places: [
        {
          name: '根津美术馆',
          kicker: '10:00 · Art & Garden',
          status: 'booked',
          statusText: '已预约',
          description: '先看当期展览，再留至少 30 分钟给庭园、茶室与石佛。入口竹林步道很适合雨天，但庭园石阶湿滑时要放慢。',
          history: '根津美术馆的收藏来自实业家根津嘉一郎，1941 年开馆，核心为东亚古美术、茶道具、佛教美术和书画。现建筑由隈研吾设计，2009 年重新开放。',
          culture: '它的魅力在于“展厅和庭园一起看”：茶室、池泉、石佛与竹林把美术馆体验拉回日本茶会、庭园漫步和季节感。',
          tips: ['酒店前往表参道站，从 A5 出口一带步行。', '11:30 左右离馆。'],
          coordinates: [35.6622429, 139.7172555],
          mapQuery: 'Nezu Museum Tokyo',
          website: 'https://www.nezu-muse.or.jp/jp/exhibitions/current/',
          photos: [
            { src: 'assets/nezu-garden.jpg', alt: '根津美术馆庭园', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Nezu_Museum_Garten-20091020-RM-112901.jpg' },
            { src: 'assets/nezu-teahouse.jpg', alt: '根津美术馆庭园与茶室', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Nezu_Museum_Garten-20091020-RM-113550.jpg' },
            { src: commonsFile('Nezu Museum Garten-20091020-RM-114344.jpg'), alt: '根津美术馆庭园步道', credit: PHOTO_SOURCES.commons, source: commonsPage('Nezu Museum Garten-20091020-RM-114344.jpg') },
          ],
        },
        {
          name: '下北泽',
          kicker: '13:30 · Vintage & Records',
          transit: {
            total: '约 12 分',
            legs: [
              { mode: 'metro', code: 'C', color: '#00BB85', name: '千代田线', from: '表参道', to: '代代木上原' },
              { mode: 'rail', code: 'OH', color: '#2581C4', name: '小田急线', from: '代代木上原', to: '下北泽' },
            ],
          },
          description: '根津所在的表参道一带午餐后过来，以车站为中心走 Bonus Track、reload 一带，再按兴趣进入古着店、独立唱片店和咖啡馆。给 90 分钟，不要为了打卡绕远。',
          history: '下北泽在战后形成小剧场、Live House、古着和独立店铺混杂的街区性格；小田急线地下化后，车站周边又出现 reload、Bonus Track 等新空间。',
          culture: '这里不像银座或表参道那样强调整齐品牌门面，而更像东京青年文化的拼贴：二手衣、唱片、小剧场、咖啡和窄巷散步共同构成气氛。',
          tips: ['15:00 左右回到下北泽站。', '搭京王井之头线前往吉祥寺。'],
          coordinates: [35.6615657, 139.6670604],
          mapQuery: 'Shimokitazawa Tokyo',
          website: 'https://www.gotokyo.org/en/destinations/western-tokyo/shimokitazawa/index.html',
          photos: [
            { src: 'assets/shimokitazawa-street.jpg', alt: '下北泽街景', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Walk_in_Shimokitazawa_3.jpg' },
            { src: 'assets/shimokitazawa-walk.jpg', alt: '下北泽街区散步', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Walk_in_Shimokitazawa_4.jpg' },
            { src: commonsFile('Public blackboards, Shimokitazawa, Tokyo 2013-03-16.jpg'), alt: '下北泽街角的留言黑板', credit: PHOTO_SOURCES.commons, source: commonsPage('Public blackboards, Shimokitazawa, Tokyo 2013-03-16.jpg') },
          ],
        },
        {
          name: '吉祥寺 · 井之头公园',
          kicker: '15:15 · Park & Sunroad',
          transit: {
            total: '约 16 分',
            legs: [
              { mode: 'rail', code: 'IN', color: '#0079C2', name: '京王 井之头线', from: '下北泽', to: '吉祥寺' },
            ],
          },
          description: '一路向西到吉祥寺，先到井之头公园绕池一圈，再回到 SUNROAD、ダイヤ街等商店街从容逛。这一段是当天最松弛的部分，给金子屋和爵士留足体力。',
          history: '井之头公园 1917 年作为日本最早的郊外型「恩赐公园」之一开园，以井之头池为中心；战后吉祥寺在中央线沿线发展成住宅与商业兼具的人气街区，公园与 SUNROAD 商店街相邻共生。',
          culture: '吉祥寺常年位居「东京最想居住街区」前列，公园划船、池畔散步与商店街的杂货、咖啡、唱片店组成一种松弛的中央线生活方式，也是许多动漫与文学作品的取景地。',
          tips: ['公园与商店街之间步行几分钟。', '雨大时以商店街拱廊为主。'],
          coordinates: [35.7000, 139.5803],
          mapQuery: 'Inokashira Park Kichijoji',
          website: 'https://www.gotokyo.org/en/destinations/western-tokyo/kichijoji/index.html',
          photos: [
            { src: 'assets/kichijoji-inokashira.jpg', alt: '井之头公园池畔', credit: PHOTO_SOURCES.commons, source: 'https://commons.wikimedia.org/wiki/File:Inokashira_park_pond_2024.jpg' },
            { src: 'assets/kichijoji-sunroad.jpg', alt: '吉祥寺 SUNROAD 商店街', credit: PHOTO_SOURCES.commons, source: 'https://commons.wikimedia.org/wiki/File:Gate_of_the_Kichijoji_Sunroad_at_Night.jpg' },
            { src: commonsFile('Swan Boat (10507765895).jpg'), alt: '井之头公园天鹅船', credit: PHOTO_SOURCES.commons, source: commonsPage('Swan Boat (10507765895).jpg') },
          ],
        },
        {
          name: '金子屋 吉祥寺店',
          kicker: '17:30 · Tendon & Tempura',
          status: 'optional',
          statusText: '早晚饭',
          transit: {
            total: '约 6 分',
            legs: [
              { mode: 'walk', time: '约 6 分', dist: '公园回商店街 · 约 500 m' },
            ],
          },
          description: '吉祥寺的天丼/天ぷらめし名店，把当天「早晚饭」放在这里，吃完正好步行去 SOMETIME 听爵士。招牌是穴子天丼「松」，每日限定 20 份的大海老天丼很值得拼。',
          history: '天丼（天ぷら盖饭）源自江户前天妇罗，把炸好的食材浇上甜咸酱汁盖在米饭上，是平民化的江户食物；金子屋把这一传统做成吉祥寺商店街里的人气名店。',
          culture: '比起正襟危坐的天妇罗专门店，天丼更像市井日常美食：一碗饭配穴子或大海老天，酱汁渗进米饭，是吉祥寺逛街途中实惠又满足的一餐。',
          restaurant: {
            meal: '早晚饭 · 天丼/天ぷらめし',
            tabelog: '3.49',
            reviews: '食べログ',
            priceJpy: '约 ¥1,500',
            priceCny: '约 ¥63',
            signature: ['天丼「松」（穴子）', '限定 20 份 · 大海老天丼', '天ぷらめし'],
            booking: '建议早点到避开排队；营业到约 20:30。招牌、限定与营业时间以食べログ/店方当日为准。',
          },
          tips: ['17:30 前后入座，衔接 19:00 演出。', '限定大海老天丼售完即止，想吃要趁早。'],
          coordinates: [35.7038, 139.5796],
          mapQuery: '金子屋 吉祥寺',
          website: 'https://tabelog.com/tokyo/A1320/A132001/13001151/',
          photos: [
            { src: 'assets/tendon.jpg', alt: '天丼（示意）', credit: PHOTO_SOURCES.commons, source: 'https://commons.wikimedia.org/wiki/File:Tendon.jpg' },
            { src: 'assets/tendon-2.jpg', alt: '大海老天丼（示意）', credit: PHOTO_SOURCES.commons, source: 'https://commons.wikimedia.org/wiki/File:Rice_bowl_topped_with_shrimp_tempura_(8281030764).jpg' },
            { src: commonsFile('Tendon one meal.jpg'), alt: '天丼套餐（示意）', credit: PHOTO_SOURCES.commons, source: commonsPage('Tendon one meal.jpg') },
          ],
        },
        {
          name: 'SOMETIME 吉祥寺',
          kicker: '19:00 · Jazz Night',
          status: 'unbooked',
          statusText: '尚未预约',
          transit: {
            total: '约 4 分',
            legs: [
              { mode: 'walk', time: '约 4 分', dist: '商店街内 · 约 300 m' },
            ],
          },
          description: '按当前演出表，6/20 晚为 YOSHIAKI MASUO Bossa Animada Trio，费用约 ¥4,000，另需至少点一项餐饮。实际阵容与规则以店方回复为准。',
          history: 'SOMETIME 是吉祥寺老牌爵士现场空间，长期承接日本本地乐手、小编制组合和近距离演出，是中央线沿线音乐文化的一部分。',
          culture: '吉祥寺的爵士夜和白天的井之头公园、商店街气质相连：不追求大型舞台，而是把音乐放回日常餐饮、邻里和小空间的距离里。',
          tips: ['建议 18:30 前抵达吉祥寺。', '店内座位环绕舞台，入口位于商店街内。'],
          coordinates: [35.7047657, 139.5800892],
          mapQuery: 'SOMETIME Jazz Kichijoji',
          website: 'https://www.sometime.co.jp/sometime/live.html',
          extraLink: ['店铺信息', 'https://www.sometime.co.jp/sometime/intro.html'],
          photos: [
            { src: 'assets/sometime-live.jpg', alt: 'SOMETIME 爵士演出现场', credit: PHOTO_SOURCES.sometime, source: 'https://www.sometime.co.jp/sometime/intro.html' },
            { src: 'assets/sometime-room.jpg', alt: 'SOMETIME 店内空间', credit: PHOTO_SOURCES.sometime, source: 'https://www.sometime.co.jp/sometime/intro.html' },
            { src: commonsFile('Kichijoji_Sunroad_2012.JPG'), alt: 'SOMETIME 附近的吉祥寺商店街', credit: PHOTO_SOURCES.commons, source: commonsPage('Kichijoji_Sunroad_2012.JPG') },
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
          history: '日光东照宫祭祀德川家康，江户初期由幕府大规模营建，1999 年随“日光的社寺”列入世界文化遗产。阳明门、唐门和本殿装饰体现德川权力的视觉秩序。',
          culture: '这里的看点不是单一建筑，而是神道、佛教、幕府政治和工匠装饰的叠合；三猿、眠猫等图像也让严肃的权力空间带有民间故事性。',
          tips: ['台阶较多，鞋底需要防滑。', '先听讲解，再留少量自由拍照时间。'],
          coordinates: [36.7581, 139.5988],
          mapQuery: 'Nikko Toshogu',
          website: 'https://www.toshogu.jp/english/',
          photos: [
            { src: 'assets/nikko-toshogu.jpg', alt: '日光东照宫', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Nikko_toshogu_shrine.jpg' },
            { src: commonsFile('The Three Wise Monkeys, Nikkō Tōshō-gū; April 2018.jpg'), alt: '日光东照宫 三猿雕刻', credit: PHOTO_SOURCES.commons, source: commonsPage('The Three Wise Monkeys, Nikkō Tōshō-gū; April 2018.jpg') },
            { src: commonsFile('Yomeimon_Gate,_Nikko_Toshogu.jpg'), alt: '日光东照宫阳明门装饰', credit: PHOTO_SOURCES.commons, source: commonsPage('Yomeimon_Gate,_Nikko_Toshogu.jpg') },
          ],
        },
        {
          name: '华严瀑布',
          kicker: 'Kegon Falls · Low flow alert',
          status: 'flow',
          statusText: '水量偏低',
          description: '日本代表性瀑布之一。即使水量偏低，峡谷地形与近百米落差仍值得观看；是否进入收费电梯观景台视团队停留时间决定。',
          history: '华严瀑布由中禅寺湖湖水跌落形成，落差约 97 米，明治以来成为日光山岳观光的代表景观，也常与中禅寺湖、男体山一起被观看。',
          culture: '它连接了日本近代避暑地、山岳信仰和观光摄影传统：同一处瀑布会因水量、雾气、红叶和雪季呈现完全不同的旅行记忆。',
          tips: ['资料照片为丰水期效果。', '实际水量受降雨和临时调度影响。'],
          coordinates: [36.738, 139.5028],
          mapQuery: 'Kegon Falls',
          website: 'https://www.pref.tochigi.lg.jp/h07/kegonnotaki_rakusuiryo.html',
          photos: [
            { src: 'assets/kegon-falls.jpg', alt: '华严瀑布丰水期景观', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Kegon_Taki.jpg' },
            { src: commonsFile('Kegon falls-2006-03-21 2.jpg'), alt: '华严瀑布另一视角', credit: PHOTO_SOURCES.commons, source: commonsPage('Kegon falls-2006-03-21 2.jpg') },
            { src: commonsFile('Lake_Chuzenji_and_Mount_Nantai.jpg'), alt: '华严瀑布上游的中禅寺湖与男体山', credit: PHOTO_SOURCES.commons, source: commonsPage('Lake_Chuzenji_and_Mount_Nantai.jpg') },
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
          history: '清澄庭园原与江户豪商、明治期三菱创始人岩崎家相关，后作为东京市公园开放。周边仓库、水路和深川下町肌理共同塑造了今天的清澄白河。',
          culture: '近年咖啡烘焙店进驻后，清澄白河形成“庭园、仓库、咖啡、下町散步”的组合；它比热门商业区安静，更适合返程日上午慢慢收束。',
          tips: ['周一营业情况差异较大，前一晚复核。', '11:15 必须开始返程。'],
          coordinates: [35.679981, 139.7977865],
          mapQuery: 'Kiyosumi Gardens',
          website: 'https://www.gotokyo.org/en/destinations/eastern-tokyo/kiyosumi-shirakawa/index.html',
          extraLink: ['清澄庭园信息', 'https://www.gotokyo.org/en/spot/25/index.html'],
          photos: [
            { src: 'assets/kiyosumi-garden.jpg', alt: '清澄庭园', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Kiyosumi_Garden_%2811301989825%29.jpg' },
            { src: 'assets/kiyosumi-view.jpg', alt: '清澄庭园景观', credit: PHOTO_SOURCES.gotokyo, source: 'https://www.gotokyo.org/en/spot/25/index.html' },
            { src: commonsFile('Kiyosumi Garden (9224572179).jpg'), alt: '清澄庭园另一处池景', credit: PHOTO_SOURCES.commons, source: commonsPage('Kiyosumi Garden (9224572179).jpg') },
          ],
        },
      ],
    },
  ],
  pending: [
    {
      name: '神保町',
      kicker: 'On Hold · Books & Curry',
      status: 'unbooked',
      statusText: '待定',
      description: '世界最大的古书街，原计划 6/20 午间安排，但它在本次西向动线之外、单独绕路成本高，所以移到待定区。等机动半天时再单独去：沿靖国通逛 2—3 家书店，午餐吃一碗神保町咖喱，再用老派喫茶收尾。',
      history: '神保町因明治大学、专修大学等学校与出版社聚集而发展成古书街，关东大地震和战后重建后仍保留大量书店、出版社和印刷相关行业。',
      culture: '这里的逛法不是「买一本书」这么简单，而是进入东京的纸本文化：绝版书、电影海报、摄影集、学术旧书、咖喱店和喫茶店彼此相邻。',
      tips: ['不顺路，建议单独安排半天，不要硬塞进 6/20。', '集中逛 2—3 家书店即可，营业以各店官网为准。'],
      coordinates: [35.6950136, 139.7583761],
      mapQuery: 'Jimbocho Book Town',
      website: 'https://visit-chiyoda.tokyo/en/experience/',
      photos: [
        { src: 'assets/jimbocho-books.jpg', alt: '神保町古书店', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Used_bookstore_in_Jinb%C5%8Dch%C5%8D_001.jpg' },
        { src: 'assets/jimbocho-street.jpg', alt: '神保町书店街', credit: PHOTO_SOURCES.commons, source: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Sanseido_bookstore_kanda-jimbocho_Oct_15_2021_various.jpeg' },
        { src: commonsFile('Kitazawa Foreign Bookstore, at Kanda-Jinbocho.jpg'), alt: '神保町 北泽洋书店', credit: PHOTO_SOURCES.commons, source: commonsPage('Kitazawa Foreign Bookstore, at Kanda-Jinbocho.jpg') },
      ],
    },
  ],
  explore: [
    {
      label: '美术馆 & 建筑',
      items: [
        { name: '21_21 DESIGN SIGHT', area: '六本木 · 东京中城', note: '安藤忠雄设计的清水混凝土设计馆，常做主题性企划展。', img: 'assets/ex-2121.jpg', alt: '21_21 DESIGN SIGHT 建筑', map: '21_21 DESIGN SIGHT Tokyo', source: 'https://commons.wikimedia.org/wiki/File:21_21_DESIGN_SIGHT.jpg' },
        { name: '东京都庭园美术馆', area: '白金台', note: '旧朝香宫邸改成的 Art Deco 美术馆，建筑本身就值得看，带庭园。', img: 'assets/ex-teien.jpg', alt: '东京都庭园美术馆', map: 'Tokyo Metropolitan Teien Art Museum', source: 'https://commons.wikimedia.org/wiki/File:Tokyo_Metropolitan_Teien_Art_Museum_PB292588.jpg' },
      ],
    },
    {
      label: '书店 & 喫茶',
      items: [
        { name: '代官山 茑屋书店', area: '代官山 T-SITE', note: '森林中的书店建筑群，选书、杂志与咖啡都很舒服，可待一下午。', img: 'assets/ex-tsutaya.jpg', alt: '代官山茑屋书店', map: 'Daikanyama Tsutaya Books', source: 'https://commons.wikimedia.org/wiki/File:Tsutaya_Books_Daikanyama.jpg' },
        { name: 'カヤバ珈琲', area: '谷中 · 上野樱木', note: '昭和老喫茶，鸡蛋三明治和早餐有名，配合谷中街区散步。', img: 'assets/ex-kayaba.jpg', alt: 'カヤバ珈琲外观', map: 'Kayaba Coffee Yanaka', source: 'https://commons.wikimedia.org/wiki/File:Kayaba_Coffee_by_Sansakisaka_Street_in_Ueno_Sakuragi,_Taito,_Tokyo,_Japan,_2024_May.jpg' },
      ],
    },
    {
      label: '古着 & 唱片',
      items: [
        { name: '高円寺', area: '高円寺', note: '东京古着大本营，沿高架与商店街密集分布古着店与小酒馆。', img: 'assets/ex-koenji.jpg', alt: '高円寺商店街', map: 'Koenji Tokyo', source: 'https://commons.wikimedia.org/wiki/File:Awa-odori_K%C5%8Denji_02.jpg' },
        { name: 'Tower Records 涩谷', area: '涩谷', note: '标志性红黄唱片大楼，黑胶、CD 与现场活动；爱淘碟可以蹲一层。', img: 'assets/ex-tower.jpg', alt: 'Tower Records 唱片店', map: 'Tower Records Shibuya', source: 'https://commons.wikimedia.org/wiki/File:Tower_Records.jpg' },
      ],
    },
    {
      label: '咖啡 & 庭园',
      items: [
        { name: 'Blue Bottle 清澄白河', area: '清澄白河', note: '蓝瓶日本一号店所在的烘焙街区，和 6/22 的清澄庭园顺路。', img: 'assets/ex-bluebottle.jpg', alt: 'Blue Bottle 清澄白河', map: 'Blue Bottle Coffee Kiyosumi', source: 'https://commons.wikimedia.org/wiki/File:Bluebottlejapan-opening-outsidebuilding-feb8-2015.jpg' },
        { name: '旧古河庭园', area: '西原 · 上中里', note: '西洋馆＋玫瑰园＋日本庭园的组合，初夏玫瑰季尤其好看。', img: 'assets/ex-furukawa.jpg', alt: '旧古河庭园', map: 'Kyu-Furukawa Gardens', source: 'https://commons.wikimedia.org/wiki/File:Kyu-Furukawa_Garden_@_Nishigahara_(11029178266).jpg' },
      ],
    },
    {
      label: '爵士 & 现场',
      items: [
        { name: 'Blue Note Tokyo', area: '南青山', note: '国际一线爵士/灵魂乐手的东京据点，正餐+演出，需提前订票。', img: 'assets/ex-bluenote.jpg', alt: 'Blue Note Tokyo', map: 'Blue Note Tokyo', source: 'https://commons.wikimedia.org/wiki/File:Blue_Note_(Tokyo).jpg' },
        { name: '新宿 PIT INN', area: '新宿', note: '日本爵士现场老店，本土阵容为主，氛围硬核，票价亲民。', img: 'assets/ex-pitinn.jpg', alt: '新宿 PIT INN', map: 'Shinjuku Pit Inn', source: 'https://commons.wikimedia.org/wiki/File:Jazz_club_PIT_INN_-_lobby.jpg' },
      ],
    },
    {
      label: '经典美食',
      items: [
        { name: '浅草 天妇罗老铺', area: '浅草', note: '雷门一带集中了多家江户前天妇罗与鳗鱼老店，配合浅草寺散步。', img: 'assets/ex-asakusa.jpg', alt: '浅草天妇罗老铺', map: 'Asakusa tempura', source: 'https://commons.wikimedia.org/wiki/File:Tempura_restaurant_by_clanchou_in_Asakusa,_Tokyo.jpg' },
        { name: '筑地场外市场', area: '筑地', note: '场外市场仍在营业，海鲜丼、玉子烧、刺身边走边吃，建议上午去。', img: 'assets/ex-tsukiji.jpg', alt: '筑地场外市场', map: 'Tsukiji Outer Market', source: 'https://commons.wikimedia.org/wiki/File:Tsukiji_Outer_Market_-04.jpg' },
      ],
    },
  ],
};

const TRIP_DAY_IDS = ['day-618', 'day-619', 'day-620', 'day-621', 'day-622'];
const TRIP_DAY_DATES = ['2026-06-18', '2026-06-19', '2026-06-20', '2026-06-21', '2026-06-22'];

const tokyoNow = () => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false,
  }).formatToParts(new Date()).reduce((acc, p) => (acc[p.type] = p.value, acc), {});
  return {
    date: `${parts.year}-${parts.month}-${parts.day}`,
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  };
};

const tripStatus = () => {
  const { date, minutes } = tokyoNow();
  const todayIndex = TRIP_DAY_DATES.indexOf(date);
  if (todayIndex >= 0) {
    return { phase: 'during', dayNumber: todayIndex + 1, dayId: TRIP_DAY_IDS[todayIndex], minutes };
  }
  if (date < TRIP_DAY_DATES[0]) {
    const start = Date.UTC(2026, 5, 18);
    const [y, m, d] = date.split('-').map(Number);
    const days = Math.round((start - Date.UTC(y, m - 1, d)) / 86400000);
    return { phase: 'before', daysLeft: days };
  }
  return { phase: 'after' };
};

const parseStartMinutes = (timeStr) => {
  const match = /(\d{1,2}):(\d{2})/.exec(timeStr);
  return match ? Number(match[1]) * 60 + Number(match[2]) : null;
};

const statusBadge = (place) =>
  place.status
    ? `<span class="status status-${place.status}">${place.statusText}</span>`
    : '';

const renderCarousel = (photos) => {
  if (!photos || !photos.length) return '';
  const multi = photos.length > 1;
  return `
  <div class="carousel${multi ? '' : ' is-single'}" data-carousel>
    <div class="carousel-viewport">
      <div class="carousel-track" data-carousel-track>
        ${photos.map((photo, i) => `
          <figure class="carousel-slide" data-index="${i}">
            <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async">
            <figcaption>${photo.alt} · <a href="${photo.source}" target="_blank" rel="noreferrer">${photo.credit} ↗</a></figcaption>
          </figure>`).join('')}
      </div>
      ${multi ? `
      <button type="button" class="carousel-arrow prev" data-carousel-prev aria-label="上一张">‹</button>
      <button type="button" class="carousel-arrow next" data-carousel-next aria-label="下一张">›</button>` : ''}
    </div>
    ${multi ? `<div class="carousel-dots" data-carousel-dots>${photos.map((_, i) => `<button type="button" class="carousel-dot${i === 0 ? ' is-active' : ''}" data-carousel-go="${i}" aria-label="第 ${i + 1} 张图片"></button>`).join('')}</div>` : ''}
  </div>`;
};

const lineMark = (leg) => {
  if (leg.mode === 'walk') return '<span class="ln-walk" aria-hidden="true">人</span>';
  const cls = leg.mode === 'jr' ? 'ln ln-jr' : 'ln';
  return `<span class="${cls}" style="--ln:${leg.color}">${leg.code}</span>`;
};

const renderTransit = (transit) => {
  if (!transit || !transit.legs || !transit.legs.length) return '';
  return `
  <div class="transit-link">
    <span class="transit-link-marks">${transit.legs.map(lineMark).join('<span class="ln-sep">·</span>')}</span>
    <span class="transit-link-body">${transit.legs.map((leg) => leg.mode === 'walk'
      ? `<span class="tl-leg"><b>步行</b> ${leg.time}${leg.dist ? ` · ${leg.dist}` : ''}</span>`
      : `<span class="tl-leg"><b>${leg.name}</b> ${leg.from}→${leg.to}</span>`).join('<span class="tl-dot">·</span>')}</span>
    <span class="transit-link-total">${transit.total}</span>
  </div>`;
};

const renderRestaurant = (r) => `
  <div class="dine">
    <div class="dine-meta">
      <span class="dine-meal">${r.meal}</span>
      <span class="dine-score"><b>★ ${r.tabelog}</b> Tabelog · ${r.reviews}</span>
      <span class="dine-price">${r.priceJpy}/人 · ${r.priceCny}</span>
    </div>
    <ul class="dine-dishes">${r.signature.map((d) => `<li>${d}</li>`).join('')}</ul>
    ${r.booking ? `<p class="dine-booking">${r.booking}</p>` : ''}
  </div>`;

const renderPlaceContext = (place) => (
  place.history || place.culture
) ? `
  <div class="place-context">
    ${place.history ? `<section><span>History</span><p>${place.history}</p></section>` : ''}
    ${place.culture ? `<section><span>Culture</span><p>${place.culture}</p></section>` : ''}
  </div>` : '';

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
    ${place.restaurant ? renderRestaurant(place.restaurant) : ''}
    <ul class="tip-list">${place.tips.map((tip) => `<li>${tip}</li>`).join('')}</ul>
    ${renderPlaceContext(place)}
    ${renderCarousel(place.photos)}
    ${renderMap(place)}
    <div class="source-actions">
      <a href="${place.website}" target="_blank" rel="noreferrer">官网 / 参考资料 ↗</a>
      ${place.extraLink ? `<a href="${place.extraLink[1]}" target="_blank" rel="noreferrer">${place.extraLink[0]} ↗</a>` : ''}
    </div>
  </article>`;

const renderPlaces = (places) => places.map((place, i) => {
  const connector = i > 0 && place.transit ? renderTransit(place.transit) : '';
  return connector + renderPlace(place, i);
}).join('');

const activeTimelineIndex = (items, minutes) => {
  let active = -1;
  items.forEach(([time], i) => {
    const start = parseStartMinutes(time);
    if (start !== null && start <= minutes) active = i;
  });
  if (active === -1) {
    const firstTimed = items.findIndex(([time]) => parseStartMinutes(time) !== null);
    return firstTimed;
  }
  return active;
};

const renderTimeline = (items, activeIndex = -1) => `
  <ol class="timeline">
    ${items.map(([time, name, note], i) => `
      <li${i === activeIndex ? ' class="is-now"' : ''}>
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

const WEATHER_ICONS = {
  Sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M4.4 4.4l1.7 1.7M17.9 17.9l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.4 19.6l1.7-1.7M17.9 6.1l1.7-1.7"/>',
  Cloud: '<path d="M7 18.5a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17 9.6a3.45 3.45 0 0 1-.5 8.9H7z"/>',
  Rain: '<path d="M7.5 15.5a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17.5 6.6a3.45 3.45 0 0 1-.5 8.9H7.5z"/><path d="M8.5 18.5l-1 2.5M12 18.5l-1 2.5M15.5 18.5l-1 2.5"/>',
  Storm: '<path d="M7.5 14.5a4 4 0 0 1-.6-7.96A5.5 5.5 0 0 1 17.5 5.6a3.45 3.45 0 0 1-.5 8.9H7.5z"/><path d="M12.5 14.5l-2.4 3.4h2.2l-1 3.6 3.7-4.6h-2.3z" fill="currentColor" stroke="none"/>',
  Mountain: '<path d="M2.5 20.5l6.2-10.6 3.4 5 2.6-3.8 6.8 9.4z"/><path d="M8.7 9.9l1.7 2.9-1.7 1.6-1.6-1.6z" fill="currentColor" stroke="none"/>',
};

const weatherIcon = (type) => `
  <svg class="weather-svg" viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="${type}">
    ${WEATHER_ICONS[type] || WEATHER_ICONS.Cloud}
  </svg>`;

const renderDay = (day, index) => {
  const status = tripStatus();
  const isToday = status.phase === 'during' && status.dayId === day.id;
  const activeIndex = isToday ? activeTimelineIndex(day.timeline, status.minutes) : -1;
  return `
  <section class="day-section section-anchor${isToday ? ' is-today' : ''}" id="${day.id}" data-nav-section>
    <header class="day-heading">
      <div class="day-number"><span>Day</span>${String(index + 1).padStart(2, '0')}</div>
      <div class="day-title">
        <p>${day.date} / ${day.weekday} · ${day.area}${isToday ? ' <span class="today-tag">Today</span>' : ''}</p>
        <h2>${day.title}</h2>
      </div>
      <div class="weather-card">
        <span>${weatherIcon(day.weather.icon)}<i>${day.weather.icon}</i></span>
        <strong>${day.weather.temp}</strong>
        <p>${day.weather.text}</p>
      </div>
    </header>

    <div class="weather-note">${day.weather.note}</div>
    <div class="day-layout">
      <aside class="day-rail">
        <p class="rail-label">Schedule</p>
        ${renderTimeline(day.timeline, activeIndex)}
      </aside>
      <div class="day-content">
        ${day.flightDetail ? renderFlightDetail(day.flightDetail) : ''}
        <div class="day-intro">
          <p>${day.intro}</p>
          <div class="transit"><span>Transit</span><p>${day.transit}</p></div>
          ${day.primaryLink ? `<a class="button button-primary day-primary-link" href="${day.primaryLink[1]}" target="_blank" rel="noreferrer">${day.primaryLink[0]} ↗</a>` : ''}
        </div>
        ${renderNotices(day.notices)}
        <div class="places">${renderPlaces(day.places)}</div>
      </div>
    </div>
  </section>`;
};

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
      <div>
        <h2>出发前<br>最后确认</h2>
        <p>动态信息会变化。航站楼、营业时间、天气与一日团集合信息应在出发前 24 小时再次核对。</p>
        <p class="check-summary" data-check-summary></p>
      </div>
      <ul class="checklist-items">${trip.checklist.map((item, i) => `
        <li><label><input type="checkbox" data-check="ck-${i}"><span class="ck-box" aria-hidden="true"></span><span class="ck-text">${item}</span></label></li>`).join('')}</ul>
    </div>
    <p class="freshness">天气预报更新于 ${trip.weatherUpdated}，仅作行程规划参考。勾选状态保存在本设备。</p>
  </section>`;

const renderPending = () => `
  <section class="pending section-anchor" id="pending" data-nav-section>
    <div class="section-label">On Hold · 待定区</div>
    <div class="pending-heading">
      <h2>待定区</h2>
      <p>暂时不排进每日动线、但仍想保留的项目。需要机动半天时再单独安排，卡片样式与每日景点一致。</p>
    </div>
    <div class="places">${trip.pending.map(renderPlace).join('')}</div>
  </section>`;

const renderExplore = () => `
  <section class="explore-section section-anchor" id="explore" data-nav-section>
    <div class="section-label">More to Explore</div>
    <div class="explore-heading">
      <h2>还想多走几步？</h2>
      <p>按当前行程口味挑的备选地点，每类两个。营业时间与票务以各官网当日为准。</p>
    </div>
    <div class="explore-groups">
      ${trip.explore.map((group) => `
        <div class="explore-group">
          <h3 class="explore-cat">${group.label}</h3>
          <div class="explore-cards">
            ${group.items.map((item) => `
              <div class="explore-card">
                <div class="explore-thumb"><img src="${item.img}" alt="${item.alt}" loading="lazy" decoding="async"></div>
                <div class="explore-body">
                  <p class="explore-area">${item.area}</p>
                  <strong>${item.name}</strong>
                  <span>${item.note}</span>
                  <div class="explore-actions">
                    <a href="${googleMap(item.map)}" target="_blank" rel="noreferrer">Google Maps ↗</a>
                    <a href="${item.source}" target="_blank" rel="noreferrer">图源 ↗</a>
                  </div>
                </div>
              </div>`).join('')}
          </div>
        </div>`).join('')}
    </div>
  </section>`;

const app = document.querySelector('#app');
const heroFacts = document.querySelector('#hero-facts');

heroFacts.innerHTML = `
  <div><span>Duration</span><strong>5 Days</strong><small>18—22 June</small></div>
  <div><span>Base</span><strong>Akasaka</strong><small>VIA INN Prime</small></div>
  <div><span>Key bookings</span><strong>3 Fixed</strong><small>Sushi · Film · Nezu</small></div>`;

app.innerHTML = `${renderOverview()}${trip.days.map(renderDay).join('')}${renderExplore()}${renderPending()}${renderChecklist()}`;

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

const CHECK_KEY = 'tokyo-checklist';
const loadChecks = () => {
  try { return JSON.parse(localStorage.getItem(CHECK_KEY)) || {}; } catch (_) { return {}; }
};
const checkState = loadChecks();
const checkboxes = [...document.querySelectorAll('[data-check]')];
const checkSummary = document.querySelector('[data-check-summary]');
const updateCheckSummary = () => {
  if (!checkSummary) return;
  const done = checkboxes.filter((cb) => cb.checked).length;
  checkSummary.textContent = `已确认 ${done} / ${checkboxes.length} 项`;
  checkSummary.classList.toggle('is-complete', done === checkboxes.length && checkboxes.length > 0);
};
checkboxes.forEach((cb) => {
  cb.checked = !!checkState[cb.dataset.check];
  cb.closest('li').classList.toggle('is-checked', cb.checked);
  cb.addEventListener('change', () => {
    checkState[cb.dataset.check] = cb.checked;
    cb.closest('li').classList.toggle('is-checked', cb.checked);
    try { localStorage.setItem(CHECK_KEY, JSON.stringify(checkState)); } catch (_) {}
    updateCheckSummary();
  });
});
updateCheckSummary();

document.querySelectorAll('[data-carousel]').forEach((car) => {
  const track = car.querySelector('[data-carousel-track]');
  if (!track) return;
  const dots = [...car.querySelectorAll('[data-carousel-go]')];
  const count = track.children.length;
  const slideW = () => track.clientWidth || 1;
  const current = () => Math.round(track.scrollLeft / slideW());
  const go = (i) => track.scrollTo({ left: ((i % count) + count) % count * slideW(), behavior: 'smooth' });
  car.querySelector('[data-carousel-prev]')?.addEventListener('click', () => go(current() - 1));
  car.querySelector('[data-carousel-next]')?.addEventListener('click', () => go(current() + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => go(i)));
  let raf;
  track.addEventListener('scroll', () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const idx = current();
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === idx));
    });
  }, { passive: true });
  car.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); go(current() - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); go(current() + 1); }
  });
});


