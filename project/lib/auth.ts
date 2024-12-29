export const MOCK_USERS = [
  { username: 'user', password: '1234', role: 'user', name: 'John Applicant' },
  { username: 'hradmin', password: 'ABC', role: 'hr', name: 'Sarah HR' },
  { username: 'admin', password: 'admin123', role: 'admin', name: 'Mike Admin' },
];

export function authenticateUser(username: string, password: string) {
  const user = MOCK_USERS.find(
    (u) => u.username === username && u.password === password
  );
  return user ? { ...user, password: undefined } : null;
}

export function getInitialRedirectPath(role: string) {
  switch (role) {
    case 'user':
      return '/user-dashboard';  // Changed from /apply to /user-dashboard
    case 'hr':
      return '/hr-dashboard';
    case 'admin':
      return '/admin-dashboard';
    default:
      return '/user-dashboard';
  }
}