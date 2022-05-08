<template>
  <aside id="sidebar">
    <div id="nav-blog" class="sidebar-item">
      <!-- <a href="#" class="btn btn-success">Create article</a> -->
      <router-link class="btn btn-success" to="/posts/create">Create article</router-link>
    </div>
  </aside>
</template>

<script>
export default {
  name: "sideBarComponent",
};
</script>