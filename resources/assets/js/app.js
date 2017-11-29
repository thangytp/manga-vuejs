/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue';
import ListManga from './components/manga/List';
import CreateManga from './components/manga/Create';
import Example from './components/Example.vue';

import HomePortal from './components/portal/Home';

const routes = [
  	{
      	name: 'CreateManga',
      	path: '/a/create',
      	component: CreateManga
  	},
  	{
      	name: 'ListManga',
      	path: '/',
      	component: ListManga
  	},
  	{
  		name: 'HomePortal',
  		path: 'admin',
  		component: HomePortal
  	}
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');