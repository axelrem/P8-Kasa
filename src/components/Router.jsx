import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from '../pages/Home/App.jsx';
import Apropos from '../pages/Apropos.jsx';
import Fiche from '../pages/Fiche.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/a-propos',
    element: <Apropos />,
  },
  {
    path: '/fiche-logement',
    element: <Fiche />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
