export default async function  ({ params }) {
  try {
    let res = await fetch(`https://dummyjson.com/posts/${params.id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }
    res = await res.json();
    return (
      <div className="flex min-h-screen justify-center">
        <div className="border w-1/2 rounded flex flex-col gap-4 border-gray-100 p-3 mt-4">
          <h1 className="font-bold text-3xl">{res.title}</h1>
          <h1 className="font-normal text-xl">{res.body}</h1>
          <div className="font-normal flex flex-row gap-3 text-xl">
            {res.tags.map((tag, index) => (
              <div key={index} className="p-2 rounded inline-block bg-blue-50">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="flex min-h-screen justify-center items-center">
        <h1 className="text-xl text-red-500">Failed to load post data.</h1>
      </div>
    );
  }
}
