import { Button } from "@heroui/react";

const HeroPage = () => {
  return (
    <div>
      <h2>Hero Page</h2>
      <Button>Hero Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
};

export default HeroPage;