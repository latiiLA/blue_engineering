import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import OrganizationPage from "@/pages/OrganizationPage";
import TeamPage from "@/pages/TeamPage";
import ServicesPage from "@/pages/ServicesPage";
import ServiceCategoriesPage from "@/pages/ServiceCategoriesPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="about/organization" element={<OrganizationPage />} />
        <Route path="about/team" element={<TeamPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/categories" element={<ServiceCategoriesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
