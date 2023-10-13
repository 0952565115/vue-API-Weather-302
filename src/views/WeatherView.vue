<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import { Travel_listStore } from '../stores/counter.js';

const All_travel = Travel_listStore();
const All_travel_list = ref(All_travel.travel_list);

const items = ref([])
const url = ref('{{i.ip}}')

function fetchPosts() {
  axios
    .get(url.value)
    .then((response) => {
      items.value = response.data
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(fetchPosts)
</script>

<template>

  <div class="album py-0">        
    <div class="container" style="padding: 2rem;">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col" style="padding: 1rem;" v-for="(i,index) in All_travel_list" :key="index">
          <div class="card shadow-sm">
            <div class="all-img">
              <img :src="i.img" :alt="name" style="width:100%; height: 200px; border-radius: 5px 5px 0 0;">
            </div>
            <div class="card-body">
              <p class="card-text">{{ i.name }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <router-link :to="`/WeatherCard/${index}`">
                    <button type="button" class="btn btn-m btn-outline-secondary">View</button>
                  </router-link>
                </div>
                <small class="text-body-secondary">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>   
  </div>

</template>
