<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>Todo</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <ion-input label="Todo input" type="text" placeholder="Enter text" v-model="todo"></ion-input>
                    </ion-col>
                    <ion-col>
                        <ion-button @click="addTodo">+</ion-button>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="12">
                        <ion-list>
                            <ion-item v-for="(item, index) in todoPinia.todos" :key="index">
                                <ion-label>{{ item.text }}</ion-label>
                                <ion-button @click="todoPinia.deleteTodo(item.id)" slot="end">X</ion-button>
                            </ion-item>
                        </ion-list>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
    import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonList, IonItem, IonInput, IonButton, IonButtons, IonMenuButton,IonLabel } from '@ionic/vue';
    import { ref,computed } from 'vue';
    import { useTodosStore } from '@/store/todos';

    const todo = ref('');
    const todoPinia = useTodosStore();

    async function addTodo() {
        if(todo.value && todo.value.length > 0) {
            await todoPinia.addTodo(todo.value);
            todo.value = '';
        }
    }
    async function getData() {
        await todoPinia.getTodos();
    }
    getData();
</script>