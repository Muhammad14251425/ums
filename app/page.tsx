import Image from "next/image"
import Logo from "@/public/login/ksbl-logo.png"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

const page = () => {
  return (
    <div className='bg-ksbl h-screen flex items-center justify-center'>
      <div className='bg-[#05274F]/70 p-16 rounded-xl space-y-4 border-[3px] border-[#FBA733]'>
        <Image src={Logo} alt="Logo" className="object-cover" />
        <h2 className="text-white font-bold md:text-[38px] leading-[57px]">Login</h2>
        <div>
          <Label htmlFor="terms" className="text-white tracking-wider">Email</Label>
          <Input type="email" placeholder="username@outlook.com" className="w-[500px] border-[1px] rounded-[5px]" />
        </div>
        <div>
          <Label htmlFor="terms" className="text-white tracking-wider">Password</Label>
          <Input type="email" placeholder="Password" className="w-[500px] border-[1px] rounded-[5px]" />
          <h3 className="text-[#FBA733] text-xs mt-3" >Forgot Password?</h3>
        </div>

        <div className="space-y-3">
          <Button className="bg-[#FBA733] hover:bg-[#FBA733]/90 text-white">Sign In</Button>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="border-[#FBA733]" />
            <Label htmlFor="terms" className="text-[#FBA733]" >Remember Me On This Device</Label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page