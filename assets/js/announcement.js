document.addEventListener("DOMContentLoaded", function () {
  // Announcement section close button
  var closeBtn = document.querySelector('.announcement-close');

  // Announcement link
  var announcementLink = document.querySelector('.announcement-link');

  // Announcement section
  var announcementSection = document.getElementById('announcement');

  // Check if the announcement is closed in sessionStorage
  if (sessionStorage.getItem('announcementClosed')) {
      announcementSection.style.display = 'none';
  }

  // Close the announcement section when close button is clicked
  closeBtn.addEventListener('click', function () {
      announcementSection.style.display = 'none';
      // Save the closed state in sessionStorage
      sessionStorage.setItem('announcementClosed', 'true');
  });

  // Close the announcement section when link is clicked
  announcementLink.addEventListener('click', function () {
      announcementSection.style.display = 'none';
      // Save the closed state in sessionStorage
      sessionStorage.setItem('announcementClosed', 'true');
  });
});