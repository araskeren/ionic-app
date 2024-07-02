<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>{{ post.title }}</ion-title>
          <ion-buttons slot="end">
            <ion-button :router-link="`/post/${post.id}/edit`">Edit</ion-button>
            <ion-button :router-link="`/post`">Kembali</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{{ post.title }}</ion-title>
          </ion-toolbar>
        </ion-header>
        <detail-component :post="post" />
        <comment-component :postId="parseInt(id as string)"/>
      </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
    import { Post } from '@/interface/post';
    import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonButton,IonChip  } from '@ionic/vue';
    import {ref,onMounted} from 'vue';
    import { useRoute } from 'vue-router';
    import DetailComponent from '@/components/page/detail/DetailComponent.vue';
    import CommentComponent from '@/components/page/detail/CommentComponent.vue';
  const route = useRoute();
  const id = ref(route.params.id);
  const post = ref({} as Post);

  onMounted(() => {
    getPost(parseInt(id.value as string));
  });

  function getPost(id:number){
    fetch('https://dummyjson.com/posts/'+id)
    .then(res => res.json())
    .then(res => {
        post.value = res
    });
  }
</script>
  
  <style scoped>
  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  </style>
  