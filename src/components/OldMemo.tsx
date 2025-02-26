"use client";

import Carousel from "@/components/ui/Carousel";

export function OldMemo() {
  const slideData = [
    {
      title: "Chúng ta đã có một trải nghiệm tuyệt vời cùng nhau",
      button: "Explore Component",
      src: "/public/memory/group0.jpg",
    },
    {
      title: "Chụp ảnh cái nào",
      button: "Explore Component",
      src: "/public/memory/group1.jpg",
    },
    {
      title: "Tiếp tục chụp tiếp nào",
      button: "Explore Component",
      src: "/public/memory/group2.jpg",
    },
    {
      title: "Chụp nhanh đi chứ thèm quá rồi nè",
      button: "Explore Component",
      src: "/public/memory/ha.jpg",
    },
    {
      title: "Mị đói rồi ăn thôi",
      button: "Explore Component",
      src: "/public/memory/ha2.jpg",
    },
    {
      title: "Em tôi quá vui sau khi được cắt bánh",
      button: "Explore Component",
      src: "/public/memory/thao.jpg",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
