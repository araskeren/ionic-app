<template>
    <ion-list :inset="true">
        <ion-item :button="true" v-for="post in listPost" key="post.id">
            <div class="unread-indicator-wrapper" slot="start">
            <div class="unread-indicator"></div>
            </div>
            <ion-label>
                <strong>{{post.title}}</strong>
                <ion-text color="medium" class="ion-text-wrap">{{post.body}}</ion-text> <br />
                <ion-note>
                    <ion-chip :outline="true" v-for="tag in post.tags">{{tag}}</ion-chip>
                </ion-note>
            </ion-label>
            <div class="metadata-end-wrapper" slot="end">
                <ion-note color="medium">Viewer : {{ post.views }}</ion-note>
                <ion-icon color="medium" :icon="chevronForward"></ion-icon>
            </div>
        </ion-item>
    </ion-list>
</template>
<script setup lang="ts">
    import {
      IonIcon,
      IonItem,
      IonLabel,
      IonList,
      IonNote,
      IonText,
    } from '@ionic/vue';
    import { chevronForward } from 'ionicons/icons';
    import {ref} from 'vue';
    interface Post {
        id: number
        title: string
        body: string
        tags: string[]
        reactions: Reactions
        views: number
        userId: number
    }

    interface Reactions {
        likes: number
        dislikes: number
    }

    const listPost = ref([] as Post[]);

    fetch('https://dummyjson.com/posts?limit=10')
    .then((res) => res.json())
    .then((res) => {
        listPost.value = res.posts
    })
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