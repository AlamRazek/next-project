import Image from "next/image";

const SinglePostPage = () => {
  return (
    <div className="flex gap-24">
      <div className="flex-1 relative w-[calc(100vh-200px)]">
        <Image
          src="https://images.pexels.com/photos/3912838/pexels-photo-3912838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-[2] flex-col gap-12 ">
        <h1 className="text-6xl">Title</h1>
        <div className="flex flex-col gap-2">
          <Image
            src="https://images.pexels.com/photos/17894070/pexels-photo-17894070/free-photo-of-ring-tailed-lemur-sitting-on-a-fence.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            height={50}
            width={50}
            className="object-cover rounded-[50%] "
          />
          <div className="">
            <span className="">Author</span>
            <span className="">Terry Jefferson</span>
          </div>
          <div className="">
            <span className="">Published</span>
            <span className="">01.01.2024</span>
          </div>
        </div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          reprehenderit ratione fuga alias ab placeat nihil illo quia adipisci,
          voluptatibus laborum! Quisquam obcaecati nemo saepe consequuntur unde
          cumque totam quae, excepturi, optio, incidunt rem perspiciatis
          assumenda veritatis hic minus! At?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
