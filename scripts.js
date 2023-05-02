/* IMAGE ZOOM */

function zoom(img) {
  document.getElementById("zoom").style.display = "block";
  document.getElementById("zoom-img").src = img;
}

function zoomClose() {
  document.getElementById("zoom").style.display = "none";
}
