import Image from "next/image"

export default function Avatar({ author }) {
  const isAuthorHaveFullName = author?.node?.firstName && author?.node?.lastName
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null

  return (
    <div className="flex items-center">
      <div className="w-12 h-12 relative mr-4 ml-auto">
        <Image
          src={author.node.avatar.url}
          className="rounded-full"
          alt={name}
          fill
          sizes="100vw" />
      </div>
      <div className="block text-xl font-bold mr-auto">{name}</div>
    </div>
  );
}
