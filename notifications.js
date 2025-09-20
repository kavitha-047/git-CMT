// Notification Module - September
class NotificationService {
  constructor() {
    this.notifications = [];
  }

  sendEmail(to, subject, body) {
    const notification = {
      type: 'email',
      to, subject, body,
      sentAt: new Date(),
      status: 'sent'
    };
    this.notifications.push(notification);
    return notification;
  }

  sendSMS(phone, message) {
    const notification = {
      type: 'sms',
      phone, message,
      sentAt: new Date(),
      status: 'sent'
    };
    this.notifications.push(notification);
    return notification;
  }

  getNotifications() { return this.notifications; }
}

module.exports = NotificationService;
