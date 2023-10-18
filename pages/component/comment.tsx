import Image from "next/image";

export default function Data({ data }: any) {
  return (
    <>
      <p>{data._id}</p>
      <p>{data.postId}</p>
      <p>{data.authorId}</p>
      <p>{data.content}</p>
      <p>{data.time}</p>
      <p>{data.visible}</p>
      {/* <p>{data.geo}</p> */}
      <p>{data.likes}</p>
      <p>{data.comments}</p>
      <p>{data.lastActivity}</p>
      <p>{data.sysPostType}</p>
      {/* <Image src={data.pictureUrl} alt=''/> */}
      <p>{data.originalPicUrl}</p>
      <p>{data.lastUpdate}</p>
      <p>{data.props}</p>
      <p>{data.tags}</p>
      <p>{data.authorName}</p>
    </>
  )
}

export async function getServerSideProps() {
  const response = await fetch('https://api_testing.blocal.co/post/limited/31489017901649');
  const data = await response.json();

  return {
    props: { data },
  };
}
