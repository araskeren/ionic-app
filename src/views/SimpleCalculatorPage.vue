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
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Simple Calculator</ion-title>
                </ion-toolbar>
            </ion-header>
            <div id="container">
                <strong class="capitalize">Simple Calculator</strong>
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
      IonMenuButton
    } from '@ionic/vue';
</script>