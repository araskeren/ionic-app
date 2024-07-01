<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>List All Post</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light">
        <list-component/>
    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
    import {
      IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      IonPage,
    } from '@ionic/vue';
    import ListComponent from '../components/page/ListComponent.vue';
</script>