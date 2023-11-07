import Image from "next/image";

interface LogoProps {
  priority?: boolean;
}

export function Logo({ priority = false }: LogoProps) {
  return (
    <Image
      alt="BMD Logo"
      src="/bmd.png"
      width={128}
      height={62}
      className="rounded-lg height-auto"
      priority={priority}
    />
  );
}
