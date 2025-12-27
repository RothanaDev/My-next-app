import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function TaskCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
         <h1 className="font-bold">Kimsan</h1>
      </CardHeader>
      <CardContent>
        <Image
        src="https://avatars.githubusercontent.com/u/245508347?v=4" // fixed URL
        alt="Profile"
        width={100}  // or any size you want
        height={100} // required
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
          molestias harum ad atque illo necessitatibus accusantium incidunt
          blanditiis? Reiciendis aliquam odit aliquid repellendus expedita animi
          fugiat nemo nostrum laudantium modi!
        </p>
      </CardContent>
      <CardFooter className="flex-row gap-2 flex justify-between">
        <p>27/12/2026</p>

        <div className="flex flex-row flex-wrap items-center gap-12">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
