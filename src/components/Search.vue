<template>
  <div class="search-container">
    <form>
      <input type="text" v-model="searchTerm" @input="search" placeholder="请输入您要搜索的内容...">
      <button v-if="searchTerm" @click="clearSearch" class="clear-button">✖</button>
      <button type="submit"></button>
    </form>
    <div class="result-container">


      <ul v-if="results.length" class="results-list">
        <div class="result-span">
          <div class="result-span-left"></div>
          <div class="result-span-right"></div>
        </div>
        <li v-for="result in results" :key="result.id" class="result-item">
          <span @click="handleClick(result)">{{ result.name }}</span> 
          <button @click.stop="locate(result)" class="locate-button">📍</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';

interface Result {
  id: number;
  name: string;
}

const searchTerm = ref<string>('');
const results = ref<Result[]>([]);

const mockData: Result[] = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Date' },
  { id: 5, name: 'Elderberry' }
];
const search = () => {
  if (searchTerm.value) {
    results.value = mockData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  } else {
    results.value = [];
  }
};

const clearSearch = () => {
  searchTerm.value = '';
  results.value = [];
};

const handleClick = (result: Result) => {
  alert(`You clicked on ${result.name}`);
};
const locate = (result: Result) => {
  alert(`Locating ${result.name}`);
};
</script>

<style scoped>
@import './style/SearchStyle.css';
</style>
