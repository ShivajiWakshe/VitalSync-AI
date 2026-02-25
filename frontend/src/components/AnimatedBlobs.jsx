export default function AnimatedBlobs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 
                      bg-pink-400 rounded-full mix-blend-multiply 
                      filter blur-3xl opacity-50 animate-blob"></div>

      <div className="absolute top-[200px] right-[-100px] w-96 h-96 
                      bg-yellow-400 rounded-full mix-blend-multiply 
                      filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="absolute bottom-[-100px] left-[200px] w-96 h-96 
                      bg-blue-400 rounded-full mix-blend-multiply 
                      filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
    </div>
  );
}