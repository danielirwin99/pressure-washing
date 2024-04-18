import Landing from "./pages/Landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
  Navigate,
} from "react-router-dom";
import PressureWashing from "./pages/PressureWashing";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import WindowCleaning from "./pages/WindowCleaning";
import GutterCleaning from "./pages/GutterCleaning";
import DrivewaySealing from "./pages/DrivewaySealing";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import ServiceAreas from "./pages/ServiceAreas";
import ScrollToTop from "./components/UI/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import HouseWashing from "./pages/SoftWashing";
// ..

AOS.init();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Landing />,
//   },
//   {
//     path: "/about-us",
//     element: <AboutUs />,
//   },
//   {
//     path: "/pressure-washing",
//     element: <PressureWashing />,
//   },
//   {
//     path: "/gutter-cleaning",
//     element: <GutterCleaning />,
//   },
//   {
//     path: "/areas-of-service",
//     element: <ServiceAreas />,
//   },
//   {
//     path: "/window-cleaning",
//     element: <WindowCleaning />,
//   },
//   {
//     path: "/sealing",
//     element: <DrivewaySealing />,
//   },
//   {
//     path: "/gallery",
//     element: <Gallery />,
//   },
//   {
//     path: "/soft-washing",
//     element: <SoftWashing />,
//   },
//   {
//     path: "/contact-us",
//     element: <Contact />,
//   },
//   {
//     path: "*",
//     element: <Error />,
//   },
// ]);

function App() {
  return (
    <div>
      {/* NEW ROUTER WAY */}
      {/* <RouterProvider router={router} /> */}
      <>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="pressure-washing" element={<PressureWashing />} />
          <Route path="gutter-cleaning" element={<GutterCleaning />} />
          <Route path="areas-of-service" element={<ServiceAreas />} />
          <Route path="window-cleaning" element={<WindowCleaning />} />
          <Route path="sealing" element={<DrivewaySealing />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="house-washing" element={<HouseWashing />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
