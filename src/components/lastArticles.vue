<template>
  <section id="content">
    <h2 class="subheader">Latest articles</h2>
    <!--Article list-->
    <div id="articles">
      <article v-for="post in posts" :key="post.id" class="article-item">
        <div class="image-wrap">
          <img :src="baseURL + '/storage/images/' + post.image" />
        </div>
        <h2>{{ post.title }}</h2>
        <span class="date">{{
          $dayjs(post.created_at).format("DD/MM/YYYY HH:mm")
        }}</span>
        <router-link v-bind:to="'/posts/' + post.id">Read more</router-link>
      </article>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "LastArticles",
  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.posts = [];
      //fetch data
      axios
        .get("api/post/index")
        .then((response) => {
          this.posts = response.data.data;
          console.log(response.data.data);
        })
        .catch((error) => console.log(error));
    },
  },
  data() {
    return {
      posts: [],
      basedUrl: this.baseURL,
    };
  },
};
</script>