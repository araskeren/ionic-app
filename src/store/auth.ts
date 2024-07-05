import { User } from '@/interface/user';
import { defineStore } from 'pinia';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  UserInfo,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth as authFirebase, db } from '@/firebase';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLoggedIn: localStorage.getItem('user') ? true : false,
    user: JSON.parse(localStorage.getItem('user') || '{}') as UserInfo,
  }),
  actions: {
    async register(name: string, email: string, password: string) {
      try {
        await createUserWithEmailAndPassword(
          authFirebase,
          email,
          password,
        ).then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, { displayName: name });
          this.user = { ...user, displayName: name };
          this.isLoggedIn = true;
          localStorage.setItem('user', JSON.stringify(this.user));
          return user;
        });
      } catch (error: any) {
        throw error;
      }
    },
    async login(email: string, password: string) {
      try {
        await signInWithEmailAndPassword(authFirebase, email, password).then(
          (userCredential) => {
            console.log(userCredential.user);
            const user = userCredential.user;
            // this.user = user
            this.isLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(user));
          },
        );
      } catch (error: any) {
        throw error;
      }
    },
    async loginWithGoogle() {
      try {
        await signInWithPopup(authFirebase, new GoogleAuthProvider()).then(
          (userCredential) => {
            const user = userCredential.user;
            this.user = user;
            this.isLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(this.user));
          },
        );
      } catch (error: any) {
        throw error;
      }
    },
    async logout() {
      await authFirebase.signOut();
      this.isLoggedIn = false;
      this.user = {} as UserInfo;
      localStorage.removeItem('user');
    },
  },
});
