import BlogDetails from "@/app/Components/BlogDetails/BlogDetails";
import BreadCumb from "@/app/Components/Common/BreadCumb";

export async function generateMetadata({ params }) {
const slug = decodeURIComponent(params.slug);
const OriginalHeading = slug.replace(/-/g, " "); 
const encodedHeading = encodeURIComponent(OriginalHeading);

const url = `${process.env.NEXT_LIVE_URL}/api/blog/${encodedHeading}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch blog');
      const data = await res.json();


  return {
    title:data?.metaTitle,
    description: data?.metaDescription,
    openGraph: {
      title: data?.metaTitle,
      description: data?.metaDescription,
    },
  };
}

const page = ({params}) => {
   const slug = decodeURIComponent(params.slug);
  const OriginalHeading = slug.replace(/-/g, " "); 
  console.log(OriginalHeading,"OriginalHeadingOriginalHeadingOriginalHeading")
    return (
        <div>
            <BreadCumb
                bgImg="/assets/images/resource/inner-bg.webp"
                subTitle="Blog"
                title={OriginalHeading}
                // content={OriginalHeading}
            ></BreadCumb>
            <BlogDetails/>
        </div>
    );
};

export default page;