import { SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';

import VideoList from './screens/videos';
import { StyleSheet } from 'react-native';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <VideoList />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
