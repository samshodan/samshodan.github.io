// Netlify Identity Widget initialization
if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

// Redirect to admin after login
window.netlifyIdentity.on("login", () => {
  document.location.href = "/admin/";
});

// Redirect to home after logout
window.netlifyIdentity.on("logout", () => {
  document.location.href = "/";
});