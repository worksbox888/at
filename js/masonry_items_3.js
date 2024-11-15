
// Mirrors
const posts = [];
const images = [
  './imgs/m/1.jpg',
  './imgs/m/2.jpg',
  './imgs/m/3.jpg',
  './imgs/m/4.jpg',
  './imgs/m/5.jpg',
  './imgs/m/6.jpg',
  './imgs/m/7.jpg',
  './imgs/m/8.jpg',
  './imgs/m/9.jpg',
  './imgs/m/10.jpg',
  './imgs/m/11.jpg',
  './imgs/m/12.jpg',
  './imgs/m/13.jpg',
  './imgs/m/14.jpg',
  './imgs/m/15.jpg',
  './imgs/m/16.jpg',
  './imgs/m/17.jpg',
  './imgs/m/18.jpg',
  './imgs/m/19.jpg',
  './imgs/m/20.jpg',
  './imgs/m/21.jpg',
  './imgs/m/22.jpg',
  './imgs/m/23.jpg',
  './imgs/m/24.jpg',
  './imgs/m/25.jpg',
  './imgs/m/26.jpg',
  './imgs/m/27.jpg',
  './imgs/m/28.jpg',
  './imgs/m/29.jpg',
  './imgs/m/30.jpg',
];



const info_en = [
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
