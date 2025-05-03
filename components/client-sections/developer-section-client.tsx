'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingFallback from '@/components/loading-fallback';

// Import the component with SSR disabled
const DeveloperSection = dynamic(() => import('@/components/sections/developer-section'), {
  loading: () => <LoadingFallback height='400px' />,
  ssr: false,
});

export default function DeveloperSectionClient() {
  return (
    <Suspense fallback={<LoadingFallback height='400px' />}>
      <DeveloperSection />
    </Suspense>
  );
}
