import Image from "next/image"

export default function Header() {
    return (
        <header>
            <Image src="/gora-logo.svg" alt="Gora" width={24} height={24} />
        </header>
    )
}