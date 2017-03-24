# Shared Background
[![GitHub issues](https://img.shields.io/github/issues/MyJobCompany/shared-background.svg)](https://github.com/MyJobCompany/shared-background/issues)
[![GitHub forks](https://img.shields.io/github/forks/MyJobCompany/shared-background.svg)](https://github.com/MyJobCompany/shared-background/network)
[![GitHub stars](https://img.shields.io/github/stars/MyJobCompany/shared-background.svg)](https://github.com/MyJobCompany/shared-background/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/MyJobCompany/shared-background.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

![Shared Background](https://i.imgur.com/CxH0YIt.png)

## Introduction
Shared Background is a Javascript script that aims to help developer to use the same background image between multiple elements. 
You can take a look at the [preview](https://lucantisswann.github.io/shared-background).
We also provide a jQuery integration.

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
