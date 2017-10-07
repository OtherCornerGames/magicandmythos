<template>
  <div>
    <div class="col-xs-2">
      <div class="card card-dark">

        <!--Card image-->
        <div class="view overlay hm-white-slight">
          <img src="https://mdbootstrap.com/img/Photos/Others/food.jpg" class="cool img-fluid" alt="">
          <a>
            <div class="mask"></div>
          </a>
        </div>
        <!--/.Card image-->

        <!--Button-->
        <a class="btn-floating btn-action">
          <i class="fa fa-chevron-right"></i>
        </a>

        <!--Card content-->
        <div class="card-body">
          <!--Title-->
          <h4 class="card-title">{{card.name}}</h4>
          <hr>
          <!--Text-->
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <!--/.Card content-->

        <!-- Card footer -->
        <div class="card-data">
          <ul>
            <li>
              <i class="fa fa-clock-o"></i> date: 05/10/2015</li>
            <li>
              <a href="#">
                <i class="fa fa-comments-o"></i>Com: 12</a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-facebook"> </i>FB: 21</a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"> </i>Tweets: 5</a>
            </li>
          </ul>
        </div>
        <!-- Card footer -->

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'card',
  props: ["card"],
  data() {
    return {}
  },
  computed: {},
  methods: {},
  components: {}
}
</script>


<style scoped>
.img{
  width: 300px;
  height: 200px;
}
.cool{
  width: 90%;
  border: 5px solid red;
}
</style>