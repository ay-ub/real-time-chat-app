import NavBar from "@/components/NavBar";
import { useParams } from "react-router-dom";
import AvatarProfile from "@/components/AvatarProfile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Conversation() {
  const { userId } = useParams();
  return (
    <div className='flex items-start flex-col md:flex-row bg-gray-100 dark:bg-slate-900 h-screen w-screen'>
      <div className='disktop-side-bar w-16 hover:w-60 duration-300 h-screen  hidden md:block '></div>
      <div className='messages relative flex-1 w-full h-screen md:rounded-ss-3xl md:rounded-es-3xl p-3 bg-gray-200 dark:bg-slate-950'>
        <div className='flex items-center justify-between p-3 '>
          <p className='text-lg font-bold text-gray-800 dark:text-gray-100 flex gap-2 items-center'>
            <AvatarProfile />
            Ayyoub hadj youcef
          </p>
          <NavBar />
        </div>
        <div className='h-[calc(100vh-152px)] overflow-y-auto px-3 text-justify'>
          {userId}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
          quisquam quia, exercitationem molestiae recusandae obcaecati quidem,
          nostrum ullam quo hic ab iste similique labore rem corporis error eius
          id.
        </div>
        <div
          className='absolute bottom-0 left-0 w-full flex items-center justify-between gap-3 p-3 rounded-tl-3xl rounded-tr-3xl md:rounded-none
        '
        >
          <Input
            placeholder='Type a message'
            className='flex-1 bg-gray-100 dark:bg-slate-900
          '
          />
          <Button>Send</Button>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
