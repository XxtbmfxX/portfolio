import React from "react";

import Card from "./Card";

import Landing1 from "../../assets/images/landing_1.png";
import Landing2 from "../../assets/images/landing_2.png";
import Landing3 from "../../assets/images/landing_3.png";
import Landing4 from "../../assets/images/landing_4.png";
import Landing5 from "../../assets/images/landing_5.png";

export default function Container() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card
        imageUrl={Landing1}
        title="Card 1"
        description="This is the first card"
      />
      <Card
        imageUrl={Landing2}
        title="Card 2"
        description="This is the second card"
      />
      <Card
        imageUrl={Landing3}
        title="Card 3"
        description="This is the third card"
      />
      <Card
        imageUrl={Landing4}
        title="Card 4"
        description="This is the third card"
      />
      <Card
        imageUrl={Landing5}
        title="Card 4"
        description="This is the third card"
      />
    </div>
  );
}
