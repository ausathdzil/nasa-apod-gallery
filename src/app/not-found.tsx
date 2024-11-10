'use client';

import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const { back } = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100svh-131px)] gap-4 text-destructive text-lg">
      <Frown size={64} />
      <p>Error - 404 Not Found</p>
      <Button variant="secondary" onClick={back}>
        Go Back
      </Button>
    </div>
  );
}
