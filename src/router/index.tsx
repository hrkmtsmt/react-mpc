import { createBrowserRouter } from 'react-router-dom';
import { Index } from '@src/pages/Index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  }
]);
