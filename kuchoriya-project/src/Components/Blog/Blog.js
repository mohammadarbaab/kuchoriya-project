import React from "react";
import blog_1 from "../../assests/Blog1.png";
import blog_2 from "../../assests/blog_2.png";
import blog_3 from "../../assests/blog_3.png";

function Blog() {
  const blogData = [
    {
      id: 1,
      image: blog_1,
      title:
        "New Year, New Solutions: Exclusive Offers on Web & App Development",
      description:
        "As 2025 rolls in, businesses across the globe are gearing up for a new year of growth, tra.....",
      linkText: "Read more...",
    },
    {
      id: 2,
      image: blog_2,
      title: "Celebrate Christmas with Up to 30% Off on Digital Solutions",
      description:
        "The holiday season is here, bringing joy, celebration, and the perfect opportunity to grow.....",
      linkText: "Read more...",
    },
    {
      id: 3,
      image: blog_3,
      title: "Top 10 Pimcore Development Companies Driving Digital Innovation",
      description:
        "Pimcore is an advanced open-source digital experience platform (DXP) designed to help busi.....",
      linkText: "Read more...",
    },
  ];
  return (
    <div className="flex flex-wrap gap-2 justify-center items-center px-4 py-12 mt-8 mb-8">
      <div className=" flex flex-row gap-3 justify-center items-center flex-wrap">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col flex-wrap rounded-2xl shadow-2xl hover:shadow-xl transition-shadow duration-300 md:w-[300px] max-w-[300px] h-[400px]"
          >
            <img
              src={blog.image}
              alt={`Blog ${blog.id}`}
              className="w-[300px] rounded-tl-2xl rounded-tr-2xl"
            />
            <div className="flex flex-col gap-2 p-4">
              <h2 className="text-[18px] font-[500] text-black">
                {blog.title}
              </h2>
              <p className="text-justify font-[400] text-gray-700">
                {blog.description}{" "}
                <span className="text-blue-800 cursor-pointer">
                  {blog.linkText}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
