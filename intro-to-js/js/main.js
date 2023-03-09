const closeNotification = () => {
  const notificationEl = document.getElementById("notification");

  if (notificationEl) {
    notificationEl.style.visibility = "hidden";
  }
};
