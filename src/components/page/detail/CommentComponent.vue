<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title
        >Comments <ion-chip>{{ total }}</ion-chip></ion-card-title
      >
    </ion-card-header>

    <ion-card-content>
      <ion-list :inset="true">
        <ion-item
          :button="true"
          v-for="comment in listComments"
          key="comment.id"
        >
          <div class="unread-indicator-wrapper" slot="start">
            <div class="unread-indicator"></div>
          </div>
          <ion-label>
            <strong
              >{{ comment.user.fullName }}
              <ion-chip>{{ comment.user.username }}</ion-chip></strong
            ><br />
            <ion-text color="medium" class="ion-text-wrap">{{
              comment.body
            }}</ion-text>
            <br />
          </ion-label>
          <div class="metadata-end-wrapper" slot="end">
            <ion-note color="medium">Likes : {{ comment.likes }}</ion-note>
          </div>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
const props = defineProps({
  postId: Number,
});

import { Comment } from '@/interface/comment';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonItem,
  IonChip,
  IonLabel,
  IonText,
  IonNote,
} from '@ionic/vue';
import { ref } from 'vue';
const listComments = ref([] as Comment[]);
const total = ref(0);

getComments(props.postId as number);
function getComments(id: number) {
  fetch('https://dummyjson.com/posts/' + id + '/comments')
    .then((res) => res.json())
    .then((res) => {
      listComments.value = res.comments;
      total.value = res.total;
    });
}
</script>
