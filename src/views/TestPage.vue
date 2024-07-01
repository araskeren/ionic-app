<template>
  <ion-list>
    <ion-item>
      <ion-input label="Text input" placeholder="Enter text" @ionChange="changeName"></ion-input>
    </ion-item>

    <ion-item>
      Hasil : {{ name }}
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { IonInput, IonItem, IonList } from '@ionic/vue';
  import {ref} from 'vue';

  const name = ref('Test');

  function changeName(evt: any) {
    console.log(evt)
    name.value = evt.target.value;
  }
</script>