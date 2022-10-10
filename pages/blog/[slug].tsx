import { GetServerSideProps } from "next";

const BlogPage = ({slug}:any) => {
  return (
    <h1>{slug}</h1>
  )
}

// controller
export const getServerSideProps:GetServerSideProps = async(context) => {
  return {
    props: {
      slug: context.params?.slug
    }
  }
}

export default BlogPage;