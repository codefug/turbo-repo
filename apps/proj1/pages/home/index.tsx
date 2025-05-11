import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <button onClick={() => router.push('/')}>Home</button>
    </div>
  );
}
