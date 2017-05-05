function setCaptureUrl(url) {
    var im = document.createElement("img");
    im.src = url;
    document.getElementById("capture").appendChild(im);
}