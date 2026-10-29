/** "3 unread", capped at "99+" so a long backlog never widens the badge. */
export function notificationCountLabel(count: number): string {
  return `${count > 99 ? "99+" : count} unread`;
}
