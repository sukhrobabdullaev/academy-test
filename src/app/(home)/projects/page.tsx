import { currentUser, useClerk } from "@clerk/nextjs";

export const metadata = {
  title: "Academy | Loyihalar",
};

export default async function Page() {
  const user = await currentUser();
  // console.log(user);
  // createdAt, public metadata

  // if (!user) return <div className="ml-64">Not logged in</div>;

  return <div className="md:ml-64">Hello {user?.firstName}</div>;
}
