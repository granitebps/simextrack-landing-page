'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingFallback from '@/components/loading-fallback';

// Import the component with SSR disabled
const PerformanceDashboard = dynamic(() => import('@/components/performance-dashboard'), {
  loading: () => <LoadingFallback height='200px' />,
  ssr: false,
});

export default function PerformanceDashboardClient({ enabled }: { enabled: boolean }) {
  if (!enabled) return null;

  return (
    <Suspense fallback={<LoadingFallback height='200px' />}>
      <PerformanceDashboard enabled={enabled} />
    </Suspense>
  );
}
