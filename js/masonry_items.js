
// Church stained glass windows
const posts = [];
const images = [
  './imgs/sg/sg_1.jpg',
  './imgs/sg/sg_2.jpg',
  './imgs/sg/sg_3.jpg',
  './imgs/sg/sg_4.jpg',
  './imgs/sg/sg_5.jpg',
  './imgs/sg/sg_6.jpg',
  './imgs/sg/sg_7.jpg',
  './imgs/sg/sg_8.jpg',
  './imgs/sg/sg_9.jpg',
  './imgs/sg/sg_10.jpg',
  './imgs/sg/sg_11.jpg',
  './imgs/sg/sg_12.jpg',
  './imgs/sg/sg_13.jpg',
  './imgs/sg/sg_14.jpg',
  './imgs/sg/sg_15.jpg',
  './imgs/sg/sg_16.jpg',
  './imgs/sg/sg_17.jpg',
  './imgs/sg/sg_18.jpg',
  './imgs/sg/sg_19.jpg',
  './imgs/sg/sg_20.jpg',
  './imgs/sg/sg_21.jpg',
  './imgs/sg/sg_22.jpg',
  './imgs/sg/sg_23.jpg',
  './imgs/sg/sg_24.jpg',
  './imgs/sg/sg_25.jpg',
  './imgs/sg/sg_26.jpg',
  './imgs/sg/sg_27.jpg',
  './imgs/sg/sg_28.jpg',
  './imgs/sg/sg_29.jpg',
  './imgs/sg/sg_30.jpg',
];



const info_en = [
  ["2015","Stairs window",""],
  ["2009","",""],
  ["2020","Church school - panorama (fragment)","Description for this work, in short text paragraph or more than one."],
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

for (let i = 1; i <= 30; i++) {
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
