import { useRouter } from "next/navigation"

export const handlenavigate = (path) =>{
    const router = useRouter();
    router.push(`${path}`)
}