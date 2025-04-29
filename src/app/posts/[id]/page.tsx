export default async function DetailPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <h1>Detalhes post: {id}</h1>
    </div>
  );
}
