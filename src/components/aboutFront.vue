<template>
  <section id="content">
    <!--Article list-->
    <div class="steps" id="articles">
        <h1>About the Front-end</h1>
      <p>
          <ul>
              <li>
                1.) In App.vue I´ve put the fixed components, in the middle I used "router-view" for load
                    the rest of the components and import the css.
              </li>
              <li>
                2.) In routes.js, we define the routes for each endpoint and its components to render.
              </li>
              <li>
                3.) We use axios for fetching data.
              </li>
              <li>
                4.) In main.js we init all the Vue app and Vue Router. Defining the destination of the server URL. 
                    Also, I use "dayjs" for formating the date and the time.
              </li>
          </ul>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "aboutFront"
  }
  
</script>