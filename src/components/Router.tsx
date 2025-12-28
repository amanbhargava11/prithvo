import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import { rootRouteLoader, WixServicesProvider } from '@/wix-verticals/react-pages/react-router/routes/root';
import { ProductDetailsRoute, productRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/product-details';
import { StoreCollectionRoute, storeCollectionRouteLoader } from '@/wix-verticals/react-pages/react-router/routes/store-collection';
import { defaultStoreCollectionRouteRedirectLoader } from '@/wix-verticals/react-pages/react-router/routes/store-redirect';
import { Cart } from '@/wix-verticals/react-pages/react-router/routes/cart';

// Pages
import HomePage from '@/components/pages/HomePage';
import AboutPage from '@/components/pages/AboutPage';
import ArtisansPage from '@/components/pages/ArtisansPage';
import ArtisanDetailPage from '@/components/pages/ArtisanDetailPage';
import SustainabilityPage from '@/components/pages/SustainabilityPage';
import ContactPage from '@/components/pages/ContactPage';

// Layout
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Main Layout component with Header and Footer
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Root Layout with WixServicesProvider
function RootLayout() {
  return (
    <WixServicesProvider>
      <ScrollToTop />
      <MainLayout />
    </WixServicesProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: rootRouteLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "artisans",
        element: <ArtisansPage />,
      },
      {
        path: "artisans/:id",
        element: <ArtisanDetailPage />,
      },
      {
        path: "sustainability",
        element: <SustainabilityPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "store",
        element: <></>,
        loader: defaultStoreCollectionRouteRedirectLoader,
        index: true,
      },
      {
        path: "store/:categorySlug",
        element: <StoreCollectionRoute productPageRoute="/products" />,
        loader: storeCollectionRouteLoader,
      },
      {
        path: "products/:slug",
        element: <ProductDetailsRoute />,
        loader: productRouteLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
