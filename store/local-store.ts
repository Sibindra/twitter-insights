"use client";

export class LocalStore {
  static setUsername(username: string) {
    if (typeof window !== "undefined") {
      localStorage.setItem("username", username);
    }
  }

  static getUsername() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("username");
    }
  }
}
