import React from 'react';
import type { Route } from '../../+types/root';
import { Button } from '@/components/ui/button';



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Workboard" },
    { name: "description", content: "Welcome Workboard!" },
  ];
}


const home = () => {
  return (
    <div>
        <Button>Click me!</Button>
    </div> 
  )
}

export default home