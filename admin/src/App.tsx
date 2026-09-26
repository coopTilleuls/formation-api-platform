import { HydraAdmin } from '@api-platform/admin';

// Point d'entrée de l'API (même domaine que l'admin, routes préfixées par /api).
const entrypoint =
  (import.meta.env.VITE_ENTRYPOINT as string | undefined) ??
  `${window.location.origin}/api`;

export const App = () => (
  <HydraAdmin entrypoint={entrypoint} title="API Platform admin" />
);
