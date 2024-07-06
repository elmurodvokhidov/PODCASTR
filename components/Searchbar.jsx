'use client'

import Image from "next/image"
import { Input } from "./ui/input"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useDebounce } from "@/lib/useDebounce";

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (debouncedValue) {
            router.push(`/discover?search=${debouncedValue}`)
        } else if (!debouncedValue && pathname === '/discover') router.push('/discover')
    }, [router, pathname, debouncedValue])

    const debouncedValue = useDebounce(search, 500);

    return (
        <div className="relative mt-8 block">
            <Input
                className="input-class py-6 pl-12 focus-visible:ring-offset-orange-1"
                placeholder='Search for podcasts'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onLoad={() => setSearch('')}
            />
            <Image
                src="/icons/search.svg"
                alt="search"
                height={20}
                width={20}
                className="absolute left-4 top-3.5"
            />
        </div>
    )
}

export default Searchbar