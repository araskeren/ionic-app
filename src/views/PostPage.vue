<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>List All Post</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content color="light">
        <ion-list :inset="true">
            <ion-item :button="true">
                <div class="unread-indicator-wrapper" slot="start">
                <div class="unread-indicator"></div>
                </div>
                <ion-label>
                <strong>Rick Astley</strong>
                <ion-text>Never Gonna Give You Up</ion-text><br />
                <ion-note color="medium" class="ion-text-wrap">
                    Never gonna give you up Never gonna let you down Never gonna run...
                </ion-note>
                </ion-label>
                <div class="metadata-end-wrapper" slot="end">
                <ion-note color="medium">06:11</ion-note>
                <ion-icon color="medium" :icon="chevronForward"></ion-icon>
                </div>
            </ion-item>
        </ion-list>
    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
    import {
      IonContent,
      IonHeader,
      IonIcon,
      IonItem,
      IonLabel,
      IonList,
      IonNote,
      IonText,
      IonTitle,
      IonToolbar,
      IonPage,
    } from '@ionic/vue';
    import { chevronForward } from 'ionicons/icons';
</script>
  
<style scoped>
  .unread-indicator {
    background: var(--ion-color-primary);

    width: 10px;
    height: 10px;

    border-radius: 100%;

    position: absolute;

    inset-inline-start: 12px;
    top: 12px;
  }

  .metadata-end-wrapper {
    position: absolute;

    top: 10px;
    inset-inline-end: 10px;

    font-size: 0.8rem;

    display: flex;
    align-items: center;
  }

  ion-label strong {
    display: block;

    max-width: calc(100% - 60px);

    overflow: hidden;

    text-overflow: ellipsis;
  }

  ion-label ion-note {
    font-size: 0.9rem;
  }
</style>