export class NotificationService {
  constructor() {}

  async sendNotification({
    userId,
    title,
    message,
  }: {
    userId: string;
    title: string;
    message: string;
  }) {
    return {
      userId,
      title,
      message,
      createdAt: new Date(),
    };
  }

  async sendBulkNotifications({
    userIds,
    title,
    message,
  }: {
    userIds: string[];
    title: string;
    message: string;
  }) {
    return Promise.all(
      userIds.map((userId) =>
        this.sendNotification({ userId, title, message }),
      ),
    );
  }
}

export const notificationService = new NotificationService();
