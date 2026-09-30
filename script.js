(function () {
  "use strict";

  function fitExactDesign() {
    var mobile = document.querySelector(".responsive-mobile");
    var desktop = document.querySelector(".responsive-desktop");
    var isMobile = window.innerWidth <= 768;
    var wrapper = isMobile ? mobile : desktop;
    if (!wrapper) return;

    var baseWidth = isMobile ? 390 : 1920;
    var scale = Math.min(1, window.innerWidth / baseWidth);

    wrapper.style.transform = "scale(" + scale + ")";
    wrapper.style.width = baseWidth + "px";

    // Preserve the original design's proportions while making the
    // transformed layout occupy exactly its visual height.
    var root = isMobile
      ? wrapper.querySelector("#__x2d_body")
      : wrapper.querySelector("#__0");

    var baseHeight = root ? root.getBoundingClientRect().height / scale : wrapper.scrollHeight;
    wrapper.style.height = (baseHeight * scale) + "px";
    wrapper.style.marginBottom = "0";
  }

  window.addEventListener("resize", fitExactDesign, { passive: true });
  window.addEventListener("orientationchange", fitExactDesign, { passive: true });
  document.addEventListener("DOMContentLoaded", fitExactDesign);
  window.addEventListener("load", fitExactDesign);
  fitExactDesign();
})();

