import Aurora from "@/components/template/Aurora/Aurora";

export default function Home() {
  return (
    <section className='h-screen flex'>
      {/* input (user data) */}
      <section className='w-1/2 h-full'>
        <input
          type='text'
          name=''
          id=''
        />
      </section>
      {/* resume template */}
      <section className='w-1/2 h-full overflow-y-auto p-5'>
        <Aurora />
      </section>
    </section>
  );
}
