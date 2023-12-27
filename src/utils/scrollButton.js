function smoothScroll(id) {
  var element = document.getElementById(id);
  if (element) {
    var offset = element.offsetTop;
    window.scrollTo(0, offset);
  }
}

export default smoothScroll