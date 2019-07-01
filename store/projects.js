export const state = () => ({
  list: [
    {
      id: 1,
      name: 'Test 1',
      image:
        'https://voltsurf.com/wp-content/uploads/2018/05/VOLTSURF-Party-Barge-1000x1000-Tahoe-Top.jpg',
      category: 'PHP'
    },
    {
      id: 2,
      name: 'Test 2',
      image:
        'http://s3.amazonaws.com/production.mediajoint.prx.org/public/piece_images/239964/FNAS-1000x1000-RGB-72DPI.jpg',
      category: 'PHP'
    },
    {
      id: 3,
      name: 'Test 3',
      image:
        'https://d9lvdmmwvuqi1.cloudfront.net/uploads/production/series/square_image/2/square_1000x/cntv-series-winterfire-1000x1000.jpg',
      category: 'PHP'
    },
    {
      id: 4,
      name: 'Test 4',
      image:
        'https://neonyt.messefrankfurt.com/content/dam/messefrankfurt-redaktion/neonyt/january-2019/images/neonyt-wasser-1000x1000.jpg',
      category: 'Wordpress'
    },
    {
      id: 5,
      name: 'Test 5',
      image:
        'http://img.dailymail.co.uk/i/pix/2007/07_03/nasa1R3107_1000x1000.jpg',
      category: 'Wordpress'
    },
    {
      id: 6,
      name: 'Test 6',
      image: 'https://static.zerochan.net/Chevasis.full.1127673.jpg',
      category: 'Laravel'
    },
    {
      id: 7,
      name: 'Test 7',
      image:
        'http://imgsrc.hubblesite.org/hvi/uploads/image_file/image_attachment/30449/STSCI-H-p1737c-z-1000x1000.png',
      category: 'Laravel'
    },
    {
      id: 8,
      name: 'Test 8',
      image:
        'https://theoleo.com.ua/image/cache/catalog/365/ortopedicheskie-bosonozhki-dlya-malchikov-365-1000x1000.jpg',
      category: 'Laravel'
    },
    {
      id: 9,
      name: 'Test 9',
      image:
        'http://static1.squarespace.com/static/515aaa6be4b063d29d1c71ea/515aaa6be4b063d29d1c71f4/54c73c0ae4b04497428813f9/1424948806369/?format=1500w',
      category: 'Laravel'
    },
    {
      id: 10,
      name: 'Test 10',
      image:
        'https://zov.by/image/cache/data/novyj-katalog/mebelnye-komplektuyushchie/fasady/mdf-pvh/colors/ford-1000x1000.jpg',
      category: 'Laravel'
    },
    {
      id: 11,
      name: 'Test 11',
      image: 'https://cdn.wallpapersafari.com/65/31/aAzTvc.jpg',
      category: 'Vue.js'
    }
  ]
})

export const getters = {
  get(state) {
    return state.list
  }
}
