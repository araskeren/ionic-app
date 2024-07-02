<template>
    <ion-card>
        <ion-card-header>
            <ion-card-subtitle>
                {{ props?.post?.body }}
            </ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            <ion-chip :outline="true" v-for="tag in props?.post?.tags">{{tag}}</ion-chip> <br/>
            <ion-chip >Views : {{props?.post?.views}}</ion-chip>
            <ion-chip >Likes : {{props?.post?.reactions?.likes}}</ion-chip>
            <ion-chip >Dislikes : {{props?.post?.reactions?.dislikes}}</ion-chip>
        </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">
    import { Post } from '@/interface/post';
    import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonChip } from '@ionic/vue';

    const props = defineProps({
        post: Object as () => Post
    })
</script>