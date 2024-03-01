/* IMAGE ZOOM */

function zoom(img) {
  document.getElementById("zoom").style.display = "block";
  document.getElementById("zoom-img").src = img;
}

function zoomClose() {
  document.getElementById("zoom").style.display = "none";
}

/* RESPONSIVE IFRAME */

$(document).ready(function () {
  // Function to adjust iframe height based on content
  function adjustIframeHeight() {
    var iframe = $("#ifr");
    if (iframe.length) {
      iframe.height(iframe.contents().find("body").height());
    }
  }

  // Call the function when the iframe content has loaded
  $("#ifr").on("load", function () {
    adjustIframeHeight();
  });
});
