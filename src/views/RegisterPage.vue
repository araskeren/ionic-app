<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="container">
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>Register</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <ion-item>
                            <ion-label position="floating">Name</ion-label>
                            <ion-input class="ion-margin-top" type="text" required v-model="name"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="floating">E-mail</ion-label>
                            <ion-input class="ion-margin-top" type="text" required v-model="email"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="floating">Password</ion-label>
                            <ion-input class="ion-margin-top" type="password" required v-model="password"></ion-input>
                        </ion-item>
                    </ion-card-content>
                    <ion-button expand="block" @click="doRegister">Daftar</ion-button>
                    <ion-button expand="block" :router-link="`/login`">Login</ion-button>
                    <ion-toast :is-open="isOpen" @didDismiss="setOpen(false)" :message="message" :duration="5000"></ion-toast>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>
<script setup lang="ts">
import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton, IonToast } from '@ionic/vue';
import { ref } from 'vue';
import { useAuthStore } from '@/store/auth';

const name = ref('Emilys Wijaya')
const email = ref('emilys@mail.com')
const password = ref('emilyspass')
const message = ref('')
const isOpen = ref(false);
const AUTH = useAuthStore()

async function doRegister() {
    try{
        await AUTH.register(name.value,email.value, password.value)
        message.value = 'Register Success,Please Login Now'
        isOpen.value = true
        window.location.href = '/home'
    }catch(error: any){
        const errorCode = error?.code
        const errorMessage = error?.message
        message.value = errorMessage
        isOpen.value = true
    }
}

</script>