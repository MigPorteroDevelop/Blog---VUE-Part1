<template>
  <section v-if="article" id="content">
    <h2 class="subheader">Edit article</h2>
    <form enctype="multipart/form-data" @submit="save">
      <label>Title *</label>
      <input type="text" v-model="article.title" />
      <br />
      <br />
      <label>Description *</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="article.description"
      ></textarea>
      <br />
      <button type="submit">Update</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogComponent",
  mounted() {
    axios
      .get("/api/post/" + this.$route.params.id + "/show")
      .then((response) => {
        console.log(response);
        this.article = response.data.data;
      })
      .catch((error) => console.log(error));
  },
  methods: {
    save(e) {
      e.preventDefault();

      axios
        .put("api/post/" + this.article.id + "/update", {
          id: this.article.id,
          title: this.article.title,
          description: this.article.description,
        })
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((error) => console.log(error));
      this.article.title = "";
      this.article.description = "";
    },
  },
  data() {
    return {
      article: null,
    };
  },
};
</script>