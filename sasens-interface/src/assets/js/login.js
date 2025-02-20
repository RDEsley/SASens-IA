import { useEffect } from "react";

const useLoginEffects = () => {
  useEffect(() => {
    const container = document.getElementById("container");
    const registerBtn = document.getElementById("register");
    const loginBtn = document.getElementById("login");

    registerBtn?.addEventListener("click", () => {
      container.classList.add("active");
    });

    loginBtn?.addEventListener("click", () => {
      container.classList.remove("active");
    });

    return () => {
      registerBtn?.removeEventListener("click", () => {
        container.classList.add("active");
      });

      loginBtn?.removeEventListener("click", () => {
        container.classList.remove("active");
      });
    };
  }, []);
};

export default useLoginEffects;
