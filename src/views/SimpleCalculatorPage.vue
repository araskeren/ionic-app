<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Simple Calculator</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-input
          label="Number input"
          type="number"
          placeholder="0"
          v-model="var1"
        ></ion-input>
        <ion-input
          label="Number input"
          type="number"
          placeholder="0"
          v-model="var2"
        ></ion-input>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-button @click="tambah">+</ion-button>
            </ion-col>
            <ion-col>
              <ion-button @click="kurang">-</ion-button>
            </ion-col>
            <ion-col>
              <ion-button @click="kali">*</ion-button>
            </ion-col>
            <ion-col>
              <ion-button @click="bagi">/</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-input
          label="Result"
          type="number"
          placeholder="0"
          v-model="result"
        ></ion-input>
      </div>
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
  IonButtons,
  IonMenuButton,
  IonCol,
  IonGrid,
  IonRow,
  IonInput,
  IonButton,
} from '@ionic/vue';
import { ref } from 'vue';

const var1 = ref(0);
const var2 = ref(0);
const result = ref(0);

function tambah() {
  result.value = var1.value + var2.value;
}

function kurang() {
  result.value = var1.value - var2.value;
}

function kali() {
  result.value = var1.value * var2.value;
}

function bagi() {
  result.value = var1.value / var2.value;
}
</script>
<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  padding: 20%;
  transform: translateY(-50%);
}
</style>
