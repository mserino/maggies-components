# Maggie's Card Component

## Installation
`npm install --save @maggieserino/card`
or  
Clone this repo and import `card.css` from the `/dist` directory.

## Import
The styles can be imported in an existing codebase as standalone or using PostCSS:  

#### PostCSS Imports
`@import '@maggieserino/card'`  

#### Standalone Imports
`<link rel="stylesheet" href="./dist/card.css">`  

## Usage
```
<div class="card">
  <!-- Header -->
  <div class="maggies-card__header">
    Header
  </div>
  <!-- Image -->
  <div class="maggies-card__image">
    <img src="https://placeimg.com/640/480/nature">
  </div>
  <!-- Body -->
  <div class="maggies-card__body">
    <h2>This is the Card title</h2>
    <p>This is the card body</p>
  </div>
  <!-- Footer -->
  <div class="maggies-card__footer">
    Footer
  </div>
</div>
```