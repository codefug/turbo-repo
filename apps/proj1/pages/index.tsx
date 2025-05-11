import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return <button onClick={() => router.push('/home')}>Home</button>;
}
