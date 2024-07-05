<template>
  <ion-page> </ion-page>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { IonPage } from '@ionic/vue';
const AUTH = useAuthStore();
// redirect to login page using router
function init() {
  AUTH.logout();
  window.location.href = '/login';
}

init();
</script>
