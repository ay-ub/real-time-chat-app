function Messages({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex items-start flex-col md:flex-row'>
      <div className='disktop-side-bar w-24 h-screen  hidden md:block'></div>
      <div className='messages flex-1 h-screen bg-green-500 rounded-ss-3xl rounded-es-3xl'>
        {children}
      </div>
      <div className='mobile-side-bar w-screen h-14 bg-red-700 md:hidden fixed bottom-0'></div>
    </div>
  );
}

export default Messages;
