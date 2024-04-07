import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <div className="flex">
        <div className="w-[90%] h-[400px] relative">
          <Image
            src="https://images.pexels.com/photos/3912838/pexels-photo-3912838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <span className="">01.01.2024</span>
      </div>
      <div>
        <h1 className="">Title</h1>
        <p className="">Desc</p>
        <Link href="/blog/post" className="">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
