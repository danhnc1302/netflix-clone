import { useCallback, useState } from 'react';
import Input from '@/components/Input';

const Auth = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [variant, setVariant] = useState("login")

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])

    console.log(name)
    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign in' : 'Register'}
                        </h2>
                        <div className='flex flex-col gap-4'>
                            {variant === 'register' && (
                                <Input id="name"
                                    type="text"
                                    label="Username"
                                    value={name}
                                    onChange={(e: any) => setName(e.target.value)} />
                            )}

                            <Input id="email"
                                type="text"
                                label="Email"
                                value={email}
                                onChange={(e: any) => setEmail(e.target.value)} />

                            <Input id="password"
                                type="text"
                                label="Password"
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)} />
                        </div>
                        <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                            {variant === 'login' ? 'Login' : 'Sign Up'}
                        </button>
                        <p className='text-neutral-500 mt-8'>
                            {variant === 'login' ? 'First time using Netfix?' : 'Already have an account?'}
                            
                            <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                            {variant === 'login' ? 'Create an account' : 'Sign in'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;