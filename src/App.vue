<template>
  <div class="container-sm justify-content-center px-5 mt-5">
    <router-view/>
  </div>
</template>

<style>
a {
  text-decoration: none;
}

.link-mve {
  color: #2a363b;
}

.link-mve:visited {
  color: #2a363b;
}

.link-mve:hover {
  color: #ae6378;
  cursor: pointer;
}

.btn-dark:hover {
  background-color: #ae6378 !important;
  letter-spacing: 2px !important;
  border: 1px solid #ae6378;
}
</style>
