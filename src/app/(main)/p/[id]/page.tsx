export default function PostPage({ params }: { params: { id: string } }) {
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h1 className="text-xl font-bold">Post {params.id}</h1>

      <div className="mt-4 h-[500px] bg-gray-200 rounded-xl flex items-center justify-center">
        <p>Full page post content</p>
      </div>
    </div>
  );
}
