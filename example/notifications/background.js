/*
  Displays a notification with the current time. Requires "notifications"
  permission in the manifest file (or calling
  "webkitNotifications.requestPermission" beforehand).
*/
/**
 * 显示一个时间 notification 
 */
function show() {
  var time = /(..)(:..)/.exec(new Date());     // The prettyprinted time.
  var hour = time[1] % 12 || 12;               // The prettyprinted hour.
  var period = time[1] < 12 ? 'a.m.' : 'p.m.'; // The period of the day.
  // 创建一个notification
  // http://www.cnblogs.com/hupeng/archive/2012/10/05/2712326.html
  var notification = window.webkitNotifications.createNotification(
    '48.png',                      // The image.
    hour + time[2] + ' ' + period, // The title.
    'Time to make the toast.'      // The body.
  );
  // 显示notification
  notification.show();
}

// Conditionally initialize the options.
if (!localStorage.isInitialized) {
  localStorage.isActivated = true;   // The display activation.
  localStorage.frequency = 1;        // The display frequency, in minutes.
  localStorage.isInitialized = true; // The option initialization.
}

// Test for notification support.
if (window.webkitNotifications) {
  // While activated, show notifications at the display frequency.
  if (JSON.parse(localStorage.isActivated)) { show(); }

  var interval = 0; // The display interval, in minutes.

  setInterval(function() {
    interval++;

    if (
      JSON.parse(localStorage.isActivated) &&
        localStorage.frequency <= interval
    ) {
      show();
      interval = 0;
    }
  }, 60000);
}