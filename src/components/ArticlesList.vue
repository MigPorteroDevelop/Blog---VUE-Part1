<template>
  <div>
    <Article></Article>
  </div>
</template>

<script>
import axios from "axios";
import Article from "./Article";

export default {
  name: "LastArticles",
  mounted() {
    axios
      .get("api/post/index")
      .then((response) => {
        console.log(response);
        this.posts = response.data;
      })
      .catch((error) => console.log(error));
  },
  data() {
    return {
      posts: [],
    };
  },
  components:{Article},
};
</script>