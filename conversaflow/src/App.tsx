import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/common/Layout';
import { Overview } from '@/pages/Overview';
import { Performance } from '@/pages/Performance';
import { Product } from '@/pages/Product';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/activity" element={<div>Activity Page</div>} />
        <Route path="/product" element={<Product />} />
        <Route path="/task" element={<div>Task Page</div>} />
      </Routes>
    </Layout>
  );
}

export default App;