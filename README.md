jqueryUI-multiimage-draggable
=============================

This script combines many different aspects of Javascript, jQuery and jQuery UI:

Sortable: ui helpers, array manipulation, class manipulation
Droppable: acceptable items, class manipulation, animations
I've been working extensively on an image management application. I've been using jQuery and jQuery UI to handle dragging of images. I put together this script to show some of the fundamental processes in creating such an app.

One UX issue I had was when users selected multiple items and dragging them to a image group. The jQuery UI helper only showed one image upon dragging which is misleading to the user since they checked off multiple images.

To show the user that they are indeed dragging multiple images, I stacked the selected images on top of each other using css3's rotate transforms. I created a div object and replaced the jQuery UI helper with this object.
