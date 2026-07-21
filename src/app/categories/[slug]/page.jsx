export default async function Page({ params }) {
  const slug = params.slug;
  console.log(slug);

  // const category = await getCategoryBySlug(slug);

  return <div>{slug}</div>;
}