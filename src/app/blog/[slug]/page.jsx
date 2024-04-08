import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div>
      <div className="">
        <Image
          src="https://images.pexels.com/photos/3912838/pexels-photo-3912838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className=""
        />
      </div>
      <div className="">
        <h1 className="">Title</h1>
        <div className="">
          <Image
            src="https://images.pexels.com/photos/17894070/pexels-photo-17894070/free-photo-of-ring-tailed-lemur-sitting-on-a-fence.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
          />
          <div>
            <span className="">Author</span>
            <span className="">Date</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
