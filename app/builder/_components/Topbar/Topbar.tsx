"use client";

import TopbarLeft from "./TopbarLeft";
import TopbarCenter from "./TopbarCenter";
import TopbarRight from "./TopbarRight";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b bg-white shadow-sm">
      <TopbarLeft />
      <TopbarCenter />
      <TopbarRight />
    </div>
  );
}
