---
layout: default
title: Shared Background
---


# Usage

<ul id="shared" class="simple" data-shared-background="http://lorempixel.com/1024/500/nature">
    <li class="panel"></li>
    <li class="panel large"></li>
    <li class="panel"></li>
  </ul>

### Javascript version
```html
<div id="shared">
  <div class="panel"></div>
  <div class="panel"></div>
  <div class="panel"></div>
</div>
<script src="dist/shared-background.min.js"></script>
<script>
    var container = document.getElementById('shared'); //the DOM element that contain all panels
    var backgroundImageUrl = 'http://lorempixel.com/1024/500/nature'; //the background image to use
    new SharedBackground(container, backgroundImageUrl);
</script>
```


### jQuery version

```html
<div data-shared-background="http://lorempixel.com/1024/500/nature">
  <div class="panel"></div>
  <div class="panel"></div>
  <div class="panel"></div>
</div>
<script src="dist/shared-background.jquery.min.js"></script>
```

or


```html
<div class="shared">
  <div class="panel"></div>
  <div class="panel"></div>
  <div class="panel"></div>
</div>
<script src="dist/shared-background.jquery.min.js"></script>
<script>
  $(function(){
    $('.shared').sharedBackground('http://lorempixel.com/1024/500/nature');
  });
</script>
```

<link rel="stylesheet" type="text/css" href="{{ '/styles.css' | relative_url }}">
<script src="{{ '/dist/shared-background.min.js' | relative_url }}"></script>
<script>
    var container = document.getElementById('shared');
    var backgroundImageUrl = container.getAttribute("data-shared-background");
    new SharedBackground(container, backgroundImageUrl);
</script>
<script>
  var tagline = document.getElementsByClassName("page-header")[0];
  tagline.innerHTML = tagline.innerHTML + '<a href="https://codepen.io/MyJobCompany/pen/BWVdKo" class="btn" target="_blank">Try on CodePen</a>';
</script>
