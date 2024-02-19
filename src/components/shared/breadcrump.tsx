"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const NextBreadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className="">
      <ul className={`${containerClasses}`}>
        <li className={listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          // Correcting the behavior for the link "/course"
          if (href === "/course") {
            href = "/courses";
            link = "Courses"; // Display "Courses" instead of "Course"
          }
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          // Determine if the current segment is the last one
          const isLastSegment = index === pathNames.length - 1;
          // Render a span instead of a Link if it's the last segment
          const LinkComponent = isLastSegment ? "span" : Link;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                {isLastSegment ? (
                  <span className="text-[#3bc43f]">{itemLink}</span>
                ) : (
                  <LinkComponent href={href}>{itemLink}</LinkComponent>
                )}
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
