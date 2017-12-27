var sliderArea = document.getElementsByClassName("sliderArea")[0];
var colArea = document.getElementsByClassName("portfolioGrid")[0];
var col = colArea.getElementsByClassName("portfolioGrid__item");
var photosLength = col.length;
var currentIndex = 0;

function openSlider(index) {
  currentIndex = index;
  sliderArea.style.display = "block";
  showImage(currentIndex);
}

function showImage(index) {
  checkNavigation(index);

  if(index >= photosLength) {
    return false;
  }

  var pic = col[index].getElementsByTagName("img")[0];
  var picSrc = pic.attributes.alt.value;

  var imgArea = document.getElementsByClassName("sliderArea__imgArea")[0];
  imgArea.innerHTML = "";
  var elem__img = document.createElement("img");
  elem__img.setAttribute("src", picSrc);
  elem__img.setAttribute("class", "img-responsive img");
  imgArea.append(elem__img);

  var counter = document.getElementById('sliderArea__counter');
  counter.innerHTML = (index + 1) + " / " + col.length;
}

function closeSlider() {
  var sliderArea = document.getElementsByClassName("sliderArea")[0];
  sliderArea.classList.add("close");
  setTimeout(function() {
    sliderArea.classList.remove("close");
    sliderArea.style.display = "none";
  },500);
}

function changeSlide(key) {
  if (key === 1) {
    if (currentIndex < photosLength) {
      currentIndex++;
      return showImage(currentIndex);
    }
    else {
      return false;
    }
  }
  else {
    if (currentIndex != 0) {
      currentIndex--;
      return showImage(currentIndex);
    }
    else {
      return false;
    }
  }
}

function checkNavigation(index) {
  var meta = document.getElementsByClassName("sliderArea__meta")[0];
  var prev = meta.getElementsByClassName("prev")[0];
  var next = meta.getElementsByClassName("next")[0];
  if ((index+1) >= photosLength) {
    next.style.display = "none";
  }
  else {
    next.style.display = "block";
  }

  if ((index+1) === 1 ) {
    prev.style.display = "none";
  }
  else {
    prev.style.display = "block";
  }
}
