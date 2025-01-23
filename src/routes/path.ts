export const ROUTES = {
  ROOT: '/web-portfolio',
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  CONTACT: '/contact',
  PROJECTS_DETAIL: '/projects/:id'
} as const;

// 타입 안전성을 위한 타입 추출
export type Routes = typeof ROUTES;
export type RoutePath = Routes[keyof Routes];