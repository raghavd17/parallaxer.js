goog.provide('test.Main');

goog.require('andrzejdus.parallaxer.Parallaxer');

var Main = function () {
  $(window).ready(function onWindowReady() {
    andrzejdus.parallaxer.Parallaxer.setSmoothScrollEnabled(true);
    andrzejdus.parallaxer.Parallaxer.start();
  });
};

goog.exportSymbol('Main', Main);
