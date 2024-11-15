
// Souvenirs
const posts = [];
const images = [
  './imgs/s/1.jpg',
  './imgs/s/2.jpg',
  './imgs/s/3.jpg',
  './imgs/s/4.jpg',
  './imgs/s/5.jpg',
  './imgs/s/6.jpg',
  './imgs/s/7.jpg',
  './imgs/s/8.jpg',
  './imgs/s/9.jpg',
  './imgs/s/10.jpg',
  './imgs/s/11.jpg',
  './imgs/s/12.jpg',
  './imgs/s/13.jpg',
  './imgs/s/14.jpg',
  './imgs/s/15.jpg',
];



const info_en = [
  ["1999","Sample 1","Description for this item in some short text."],
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
  ["2020","Church stained glass frame (fragment)","Description for this item in some text with short information. Description for this item in some short text."],
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
