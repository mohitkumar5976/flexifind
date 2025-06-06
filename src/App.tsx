import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieReviewViewPage from "./pages/MovieReview";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/:type/:id/:title" element={<MovieReviewViewPage />} />
      </Route>
    </Routes>
  );
};

export default App;
