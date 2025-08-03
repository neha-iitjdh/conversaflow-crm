import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/common/Layout';
import { Overview } from '@/pages/Overview';
import { Performance } from '@/pages/Performance';
import { Activity } from '@/pages/Activity';
import { Product } from '@/pages/Product';
import { Task } from '@/pages/Task';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/product" element={<Product />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </Layout>
  );
}

export default App;