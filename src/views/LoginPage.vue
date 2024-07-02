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
                            <ion-label position="floating">Username</ion-label>
                            <ion-input class="ion-margin-top" type="text" required v-model="email"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label position="floating">Password</ion-label>
                            <ion-input class="ion-margin-top" type="password" required v-model="password"></ion-input>
                        </ion-item>
                    </ion-card-content>
                    <ion-button expand="block" @click="doLogin">Login</ion-button>
                    <ion-toast :is-open="isOpen" @didDismiss="setOpen(false)" :message="message" :duration="5000"></ion-toast>
                </ion-card>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
    import { User } from '@/interface/user';
    import { IonPage,IonContent, IonCard, IonCardHeader, IonCardTitle,IonCardContent, IonItem, IonLabel, IonInput,IonButton,IonToast } from '@ionic/vue';
    import {ref} from 'vue'
    const email = ref('emilys')
    const password = ref('emilyspass')
    const user = ref({} as User)
    const isOpen = ref(false);
    const message = ref('Login Success');
    const setOpen = (state: boolean) => {
        isOpen.value = state;
    };

    function doLogin() {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                
                username: 'emilys',
                password: 'emilyspass',
                expiresInMins: 30, // optional, defaults to 60
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.token) {
                user.value = res
                message.value = 'Login Success,Welcome '+user.value.firstName+' '+user.value.lastName
                localStorage.setItem('user',JSON.stringify(user.value))
                setOpen(true)
                window.location.href = '/home'
            }
        });
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