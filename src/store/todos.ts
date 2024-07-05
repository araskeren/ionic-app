import { defineStore } from 'pinia';
import { db } from '@/firebase';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { useAuthStore } from './auth';

const AUTH = useAuthStore();
export const useTodosStore = defineStore('todos', {
  state: () => ({
    todos: [] as any[],
  }),

  actions: {
    async getTodos() {
      try {
        const query = await getDocs(
          collection(db, `todos/${AUTH.user.uid}/data`),
        );
        this.todos = query.docs.map((doc) => {
          return {
            id: doc.id,
            text: doc.data().text,
            completed: doc.data().completed,
            isEditMode: false,
          };
        });
        return this.todos;
      } catch (error) {
        console.log('Gagal mengambil data ', error);
      }
    },

    async addTodo(todo: string) {
      try {
        const docRef = await addDoc(
          collection(db, `todos/${AUTH.user.uid}/data`),
          { text: todo },
        );
        this.todos.push({ id: docRef, text: todo });
      } catch (error) {
        console.log('Gagal menambahkan data ', error);
      }
    },

    async toggleTodo(id: string) {
      try {
        const docRef = doc(db, `todos/${AUTH.user.uid}/data`, id);
        await updateDoc(docRef, {
          completed: !this.todos.find((todo) => todo.id === id).completed,
        });
        this.todos.find((todo) => todo.id === id).completed = !this.todos.find(
          (todo) => todo.id === id,
        ).completed;
      } catch (error) {
        console.log(error);
      }
    },

    async toggleEdit(id: string) {
      try {
        this.todos.find((todo) => todo.id === id).isEditMode = !this.todos.find(
          (todo) => todo.id === id,
        ).isEditMode;
      } catch (error) {
        console.log(error);
      }
    },
    async updateTodo(id: string, text: string) {
      try {
        const docRef = doc(db, `todos/${AUTH.user.uid}/data`, id);
        await updateDoc(docRef, { text });
        this.todos.find((todo) => {
          if (todo.id === id) {
            todo.text = text;
            todo.isEditMode = false;
          }
        });
      } catch (error) {
        console.log('Gagal mengupdate data ', error);
      }
    },
    async deleteTodo(id: string) {
      try {
        await deleteDoc(doc(db, `todos/${AUTH.user.uid}/data`, id));
        this.todos = this.todos.filter((todo) => todo.id !== id);
      } catch (error) {
        console.log('Gagal menghapus data ', error);
      }
    },
  },
});
