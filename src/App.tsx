import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Spinner from './components/spinner/Spinner';
import Layout from './container/Layout';
import routes from './routes';

const app = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <Suspense fallback={<Spinner />}>
                <route.component />
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default app;
