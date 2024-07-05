<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Tambah Post</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light"> </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonPage,
  IonButtons,
  IonMenuButton,
} from '@ionic/vue';
import ListComponent from '@/components/page/ListComponent.vue';
</script>
