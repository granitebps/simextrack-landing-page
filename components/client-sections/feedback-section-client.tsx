'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import LoadingFallback from '@/components/loading-fallback';

// Import the component with SSR disabled
const FeedbackSection = dynamic(() => import('@/components/sections/feedback-section'), {
  loading: () => <LoadingFallback height='400px' />,
  ssr: false,
});

export default function FeedbackSectionClient() {
  return (
    <Suspense fallback={<LoadingFallback height='400px' />}>
      <FeedbackSection />
    </Suspense>
  );
}
