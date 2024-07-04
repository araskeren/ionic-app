import { defineStore } from "pinia";
import { db } from "@/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

export const useTodosStore = defineStore("todos", {
  state: () => ({
    todos: ([] = []),
  }),

  actions: {
    async getTodos() {
      try {
        const query = await getDocs(collection(db, "todos"));
        this.todos = query.docs.map((doc) => {
          return { id: doc.id, text: doc.data().text };
        });
        console.log(this.todos, "todos");
        return this.todos;
      } catch (error) {
        console.log("Gagal mengambil data ", error);
      }
    },

    async addTodo(todo: string) {
      try {
        const docRef = await addDoc(collection(db, "todos"), { text: todo });
        this.todos.push({ id: docRef, text: todo });
      } catch (error) {
        console.log("Gagal menambahkan data ", error);
      }
    },

    async deleteTodo(id: string) {
      try {
        await deleteDoc(doc(db, "todos", id));
        this.todos = this.todos.filter((todo) => todo.id !== id);
      } catch (error) {
        console.log("Gagal menghapus data ", error);
      }
    },
  },
});
