<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Test Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-input label="Text input" placeholder="Enter text" @ionChange="changeName"></ion-input>
        </ion-item>

        <ion-item>
          Hasil : {{ name }}
        </ion-item>
        <ion-item>
          <ion-button @click="addCounter">Add</ion-button> Counter : {{ counter }} <ion-button @click="removeCounter">Remove</ion-button>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonContent,
      IonHeader,
      IonTitle,
      IonToolbar,
      IonPage,IonInput, IonItem,IonButton, IonList } from '@ionic/vue';
  import {ref} from 'vue';

  const name = ref('Test');
  const counter = ref(0);

  function changeName(evt: any) {
    console.log(evt)
    name.value = evt.target.value;
  }

  function addCounter() {
    counter.value++;
  }

  function removeCounter() {
    if(counter.value-1 >= 0){
      counter.value--;
    }
  }
</script>