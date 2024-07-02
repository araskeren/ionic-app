import { User } from '@/interface/user';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        isLoggedIn: localStorage.getItem('user') ? true : false,
        user: JSON.parse(localStorage.getItem('user') || '{}') as User
    }),
    actions: {
        login() {
            this.isLoggedIn = true
            this.user = JSON.parse(localStorage.getItem('user') || '{}') as User
        },
        logout() {
            this.isLoggedIn = false
            this.user = {} as User
            localStorage.removeItem('user')
        }
    }
});