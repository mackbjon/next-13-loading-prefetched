import React from 'react';

async function DynamicElement() {
  const res = await fetch('http://localhost:3000/api/hello', {
    cache: 'no-store',
  });

  return <h1>Suspense</h1>;
}

export default async function DynamicPage() {
  return (
    <React.Suspense fallback={<>Waiting to resolve...</>}>
      {/* @ts-ignore */}
      <DynamicElement />
    </React.Suspense>
  );
}
