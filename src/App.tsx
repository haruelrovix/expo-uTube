import { QueryClient, QueryClientProvider } from 'react-query';
import VideoList from './screens/videos';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <VideoList />
    </QueryClientProvider>
  );
}
