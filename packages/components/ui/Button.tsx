export default function Button() {
  return (
    <button>
      {process.env.NEXT_PUBLIC_MODE === '1' ? '1' : '2'}넌 성공했어
    </button>
  );
}
