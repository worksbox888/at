
// Glass tile
const posts = [];
const images = [
  './imgs/gt/1.jpg',
  './imgs/gt/2.jpg',
  './imgs/gt/3.jpg',
  './imgs/gt/4.jpg',
  './imgs/gt/5.jpg',
  './imgs/gt/6.jpg',
  './imgs/gt/7.jpg',
  './imgs/gt/8.jpg',
  './imgs/gt/9.jpg',
  './imgs/gt/10.jpg',
  './imgs/gt/11.jpg',
  './imgs/gt/12.jpg',
  './imgs/gt/13.jpg',
  './imgs/gt/14.jpg',
  './imgs/gt/15.jpg',
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
