# Shared Background

![Shared Background](https://i.imgur.com/CxH0YIt.png)

## Introduction

Shared Background is a Javascript script that aims to help developer to use the same background image between multiple elements. We also provide a jQuery integration.

## Usage

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
