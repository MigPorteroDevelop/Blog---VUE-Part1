<template>
  <section v-if="post" id="content">
    <h2 class="subheader">{{ post.title }}</h2>
    <!--Article list-->
    <div id="articles">
      <div class="image-wrap">
        <img :src="post.image" />
      </div>
      <div class="resume">
        <p>
          {{ post.description }}
        </p>
      </div>
      <span class="date">{{
        $dayjs(post.created_at).format("DD/MM/YYYY HH:mm")
      }}</span>
    </div>
    <router-link v-bind:to="'/posts/edit/' + post.id">Edit</router-link>

    <input v-on:click="deletePost()" type="button" value="Delete" />
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "LastArticles",
  mounted() {
    axios
      .get("/api/post/" + this.$route.params.id + "/show")
      .then((response) => {
        console.log(response);
        this.post = response.data.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    async deletePost() {
      await axios
        .delete("api/post/" + this.$route.params.id + "/delete")
        .then((response) => { 
          console.log(response);
        })
        .catch((error) => console.log(error));

      // this.$router.push("/");
      this.$router.push({ path: "/", query: { refresh: true } });
    },
  },
  data() {
    return {
      post: null,
    };
  },
};
</script>