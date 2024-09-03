import Button from '@/components/Button';
import SideNav from '@/components/SideNav';

function Index() {
  return (
    <>
      <div className='p-4'>
        <h1 className='text-[2.4rem] font-bold mb-4 text-black'>Button Example</h1>
        <div className='flex gap-4'>
          <Button>더보기</Button>
          <Button width='20rem'>광장으로 돌아가기</Button>
        </div>
      </div>

      <div className='p-4'>
        <h1 className='text-[2.4rem] font-bold mb-4 text-black'>SideNav Example</h1>
        <div className='flex gap-4'>
          <SideNav />
        </div>
      </div>
    </>
  );
}

export default Index;
