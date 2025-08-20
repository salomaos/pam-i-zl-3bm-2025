if ("serviceWorker" in navigator) {
  navigator.serviceWorker
  .register("/pam-i-zl-3bm-2025/sw.js").then(() => {
    console.log("Service Worker registrado");
  });
}
