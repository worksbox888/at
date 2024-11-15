
// 03/10/2024

const container = document.querySelector('.container');
var photo = document.getElementById('photo-item');
var year_item = document.getElementById('year-item');
var title_item = document.getElementById('title-item');
var descr_item = document.getElementById('descr-item');


function generateMasonryGrid(columns, posts) {
  container.innerHTML = '';

  //Store column arrays that contain relevant posts
  let columnWrappers = {};

  //Create column item array and  add this to column wrapper object
  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }
  for (let i = 0; i < posts.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(posts[i]);
  }
  for (let i = 0; i < columns; i++) {
    let columnPosts = columnWrappers[`column${i}`];
    let column = document.createElement('div');
    column.classList.add('column');
    columnPosts.forEach((posts) => {
      let postDiv = document.createElement('div');
      postDiv.classList.add('post');
      let image = document.createElement('img');
      image.id = posts.id;
      image.src = posts.image;
      image.alt = posts.alt;
      image.setAttribute('onclick','loadItm('+ posts.id +')');
      let overlay = document.createElement('div');
      
      overlay.classList.add('overlay');
      let title = document.createElement('h3');
      title.innerText = posts.title;
      postDiv.append(image);

      let postDescr = document.createElement('div');
  
      if (info_en[(posts.id-1)][1] === "") {
        postDescr.innerText = info_en[(posts.id-1)][0];
      }
      else {
        postDescr.innerText = info_en[(posts.id-1)][1] + " / " + info_en[(posts.id-1)][0];
      }
      
      postDescr.classList.add('descr-item-front');
      postDiv.append(postDescr);

      column.appendChild(postDiv);

    });

    container.appendChild(column);
  }
}

function loadItm(ids) {
  photo.src = images[(ids-1)];
  photo.setAttribute('id','photo_item');

  year_item.innerHTML = info_en[(ids-1)][0];

  if (info_en[(ids-1)][1] != ""){
    title_item.innerHTML = ids +". " + info_en[(ids-1)][1];
  } else {
    title_item.innerHTML = "Sample " + ids;
  }
    
  if (info_en[(ids-1)][2] != "") {
    descr_item.innerHTML = info_en[(ids-1)][2];
  } else {
    descr_item.innerHTML = "";
  }
  
  elShow("overlay-item");
}

let previousScreenSize = innerWidth;


window.addEventListener('resize', () => {
  //console.log("Screen Size");
  imageIndex = 0;
  if (innerWidth < 600 && previousScreenSize >= 600) {
    generateMasonryGrid(2, posts); // phone
  } else if ( innerWidth >= 600 && innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)) {
    generateMasonryGrid(3, posts); // tablet
  } else if (innerWidth >= 1000 && previousScreenSize < 1000) {
    generateMasonryGrid(4, posts); // desktop
  }
  previousScreenSize = innerWidth;
});

window.addEventListener('onload', () => {
  //console.log("Screen onload");
  imageIndex = 0;
  if (innerWidth < 600) {
    generateMasonryGrid(2, posts); // phone
  } else if ( innerWidth >= 600 && innerWidth < 1000 ) {
    generateMasonryGrid(3, posts); // tablet
  } else if (innerWidth >= 1000) {
    generateMasonryGrid(4, posts); // desktop
  }
  previousScreenSize = innerWidth;
});

//Page Load
if (previousScreenSize < 600) {
  generateMasonryGrid(2, posts); // phone
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
  generateMasonryGrid(3, posts); // tablet
} else {
  generateMasonryGrid(4, posts); // desktop
}
