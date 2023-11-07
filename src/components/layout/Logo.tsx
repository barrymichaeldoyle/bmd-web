import Image from "next/image";

export function Logo() {
  return (
    <Image
      alt="BMD Logo"
      src="/bmd.png"
      width={128}
      height={62}
      className="rounded-lg height-auto"
      priority
    />
  );
}
