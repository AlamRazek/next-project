import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex">
        <div className="w-[90%] h-96  relative">
          <Image
            src="https://images.pexels.com/photos/3912838/pexels-photo-3912838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <span className="text-sm transform rotate-[270deg] m-auto">
          01/01/2024
        </span>
      </div>
      <div>
        <h1 className="text-xl font-bold mb-5 w-[85%]">{post.title}</h1>
        <p className="mb-5 font-light text-gray-400 w-[85%]">{post.body}</p>
        <Link href={`/blog/${post.id}`} className="underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
