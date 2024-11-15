
// Church stained glass windows
const posts = [];
const images = [
  './imgs/csgw/1.jpg',
  './imgs/csgw/2.jpg',
  './imgs/csgw/3.jpg',
  './imgs/csgw/4.jpg',
  './imgs/csgw/5.jpg',
  './imgs/csgw/6.jpg',
  './imgs/csgw/7.jpg',
  './imgs/csgw/8.jpg',
  './imgs/csgw/9.jpg',
  './imgs/csgw/10.jpg',
  './imgs/csgw/11.jpg',
  './imgs/csgw/12.jpg',
  './imgs/csgw/13.jpg',
  './imgs/csgw/14.jpg',
  './imgs/csgw/15.jpg',
  './imgs/csgw/16.jpg',
  './imgs/csgw/17.jpg',
  './imgs/csgw/18.jpg',
  './imgs/csgw/19.jpg',
  './imgs/csgw/20.jpg',
  './imgs/csgw/21.jpg',
  './imgs/csgw/22.jpg',
  './imgs/csgw/23.jpg',
  './imgs/csgw/24.jpg',
  './imgs/csgw/25.jpg',
  './imgs/csgw/26.jpg',
  './imgs/csgw/27.jpg',
  './imgs/csgw/28.jpg',
  './imgs/csgw/29.jpg',
  './imgs/csgw/30.jpg',
];



const info_en = [
  ["2020","Church stained glass frame (fragment)","Description for this item in some text with short information. Description for this item in some short text."],
  ["1999","","Description for this item in some short text."],
  ["2020","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
  ["","",""],
];



let imageIndex = 0;

for (let i = 1; i <= 14; i++) {
  let item = {
    id: i,
    alt: `${i}`,
    title: `${i}`,
    click: `showItem`,
    image: images[imageIndex],
  };
  posts.push(item);
  imageIndex++;
  if (imageIndex > images.length - 1) imageIndex = 0;
}
