import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "@/components/layout";
import {
  AboutUs,
  ContactPage,
  HomePage,
  Page404,
  Product,
  ProductsPage,
} from "@/pages";

export const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseLayout>
            <HomePage />
          </BaseLayout>
        }
      />
      <Route
        path="/about-us"
        element={
          <BaseLayout>
            <AboutUs />
          </BaseLayout>
        }
      />
      <Route
        path="/products"
        element={
          <BaseLayout>
            <ProductsPage />
          </BaseLayout>
        }
      />
      <Route
        path="/products/:productId"
        element={
          <BaseLayout>
            <Product />
          </BaseLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <BaseLayout>
            <ContactPage />
          </BaseLayout>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
