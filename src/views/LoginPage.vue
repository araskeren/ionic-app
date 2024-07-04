<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="container">
                <ion-card>
                    <ion-card-header>
                        <ion-card-title>Login</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <ion-item>
                            <ion-label position="floating">Email</ion-label>
                            <ion-input class="ion-margin-top" type="email" required v-model="email"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="floating">Password</ion-label>
                            <ion-input class="ion-margin-top" type="password" required v-model="password"></ion-input>
                        </ion-item>
                    </ion-card-content>
                    <ion-button expand="block" @click="doLogin">Login</ion-button>
                    <ion-button expand="block" :router-link="`/register`">Daftar</ion-button>
                    <ion-toast :is-open="isOpen" @didDismiss="setOpen(false)" :message="message" :duration="5000"></ion-toast>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
    import { User } from '@/interface/user';
import { useAuthStore } from '@/store/auth';
    import { IonPage,IonContent, IonCard, IonCardHeader, IonCardTitle,IonCardContent, IonItem, IonLabel, IonInput,IonButton,IonToast } from '@ionic/vue';
    import {ref} from 'vue'
    import {UserInfo} from 'firebase/auth'
    const email = ref('emilys@mail.com')
    const password = ref('emilyspass')
    const user = ref({} as UserInfo)
    const isOpen = ref(false);
    const message = ref('Login Success');
    const AUTH = useAuthStore()
    const setOpen = (state: boolean) => {
        isOpen.value = state;
    };

    function doLogin() {
        AUTH.login(email.value, password.value)
        .then((res: UserInfo) => {
            message.value = 'Login Success'
            setOpen(true)
            window.location.href = '/home'
        })
        .catch((error) => {
            const errorCode = error?.code
            const errorMessage = error?.message
            message.value = errorMessage
            isOpen.value = true
        })
    }
</script>
<style scoped>
    .container {
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        padding-top: 20%;
        padding-bottom: 20%;
        transform: translateY(-50%);
    }
</style>