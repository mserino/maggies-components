# Maggie's Pagination Component

## Installation
`npm install --save @maggieserino/pagination`
or  
Clone this repo and import `pagination.css` from the `/dist` directory.

## Import
The styles can be imported in an existing codebase as standalone or using PostCSS:  

#### PostCSS Imports
`@import '@maggieserino/pagination'`  

#### Standalone Imports
`<link rel="stylesheet" href="./dist/pagination.css">`  

## Usage
```
<nav aria-label="Pagination" class="maggies-pagination">
  <ul class="maggies-pagination__list">
    <li class="maggies-pagination__item">
      <a href="#" class="maggies-pagination__link">Previous</a>
    </li>
    <li class="maggies-pagination__item">
      <a href="#" class="maggies-pagination__link">1</a>
    </li>
    <li class="maggies-pagination__item">
      <a href="#" class="maggies-pagination__link">2</a>
    </li>
    <li class="maggies-pagination__item">
      <a href="#" class="maggies-pagination__link">Next</a>
    </li>
  </ul>
</nav>
```