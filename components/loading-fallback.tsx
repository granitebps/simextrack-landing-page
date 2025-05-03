import { Skeleton } from "@/components/ui/skeleton"

interface LoadingFallbackProps {
  height?: string
  width?: string
}

export default function LoadingFallback({ height = "200px", width = "100%" }: LoadingFallbackProps) {
  return (
    <div className="w-full flex items-center justify-center p-8" style={{ height }}>
      <Skeleton className="w-full max-w-3xl h-full rounded-lg" style={{ width }} />
    </div>
  )
}
