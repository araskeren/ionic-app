<template>
    <ion-page>
      <ion-header :translucent="true">
          <ion-toolbar>
          <ion-buttons slot="start">
              <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>List Post</ion-title>
          </ion-toolbar>
      </ion-header>
      <ion-content color="light">
          <div id="container">
            <ion-list>
              <ion-item>
                <ion-label>
                    <h1>Get Location</h1>
                </ion-label>
                <ion-note slot="end"> <ion-button @click="getCurrentPosition">Get Current Location</ion-button></ion-note>
              </ion-item>
              <ion-item>
                <ion-label>Latitude</ion-label>
                <ion-note slot="end">{{ coordinates.latitude }}</ion-note>
              </ion-item>
              <ion-item>
                <ion-label>Longitude</ion-label>
                <ion-note slot="end">{{ coordinates.longitude }}</ion-note>
              </ion-item>
              <ion-item>
                <ion-label>Altitude</ion-label>
                <ion-note slot="end">{{ coordinates.altitude }}</ion-note>
              </ion-item>
              <ion-item>
                <ion-label>Accuracy</ion-label>
                <ion-note slot="end">{{ coordinates.accuracy }}</ion-note>
              </ion-item>
              <ion-item>
                <ion-label>Altitude Accuracy</ion-label>
                <ion-note slot="end">{{ coordinates.altitudeAccuracy }}</ion-note>
              </ion-item>
              <ion-item>
                <ion-label>Heading</ion-label>
                <ion-note slot="end">{{ coordinates.heading }}</ion-note>
              </ion-item>
              <ion-item>
                <ion-label>Speed</ion-label>
                <ion-note slot="end">{{ coordinates.speed }}</ion-note>
              </ion-item>
            </ion-list>
            <h3>Maps</h3>
            <div
              id="map"
            >
            
            </div>
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
        IonButton
      } from '@ionic/vue';
      import { Geolocation } from '@capacitor/geolocation';
      import { ref, watch } from 'vue';
      import L from 'leaflet'

      const coordinates = ref({} as GeolocationCoordinates);

      const getCurrentPosition = async () => {
        const _coordinates = await Geolocation.getCurrentPosition();
        coordinates.value = _coordinates.coords as GeolocationCoordinates;
        console.log(coordinates);
      }

      watch(coordinates, () => {
        if(coordinates.value.latitude && coordinates.value.longitude) {
          const map = L.map('map').setView([coordinates.value.latitude, coordinates.value.longitude], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
          L.marker([coordinates.value.latitude, coordinates.value.longitude]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
        }
      });

  </script>

  <style scoped>
    #map {
        height: 400px;
        width: 400px;
    }
  </style>