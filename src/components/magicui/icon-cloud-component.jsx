import React from "react";
import IconCloud from "@/components/magicui/icon-cloud";

const IconCloudWrapper = ({ slugs }) => {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-20">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};

export default IconCloudWrapper;
