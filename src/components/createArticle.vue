<template>
  <section id="content">
    <h2 class="subheader">New article</h2>
    <form enctype="multipart/form-data" @submit="save">
      <label>Title *</label>
      <input type="text" v-model="article.title" />
      <br />
      <br />
      <label>Description</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="article.content"
      ></textarea>
      <br />
      <input ref="image" type="file" name="Image" />
      <br />

      <button type="submit">Send</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogComponent",
  methods: {
    save(e) {
      e.preventDefault();

      //storage the images
      let imageData = this.$refs.image.files[0];
      console.log(imageData);
      let bodyFormData = new FormData();
      bodyFormData.append("title", this.article.title);
      bodyFormData.append("description", this.article.content);
      bodyFormData.append("image", imageData);

      axios
        .post("api/post/create", bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data; charset=utf-8;",
          },
        })
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((error) => console.log(error));

      this.article.title = "";
      this.article.content = "";
    },
  },
  data() {
    return {
      article: {
        title: "",
        content: "",
        image: "",
      },
    };
  },
};
</script>