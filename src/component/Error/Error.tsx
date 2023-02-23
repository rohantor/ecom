export default function Error(data: { message: string }) {
  return <div>{String(data?.message)}</div>
}
