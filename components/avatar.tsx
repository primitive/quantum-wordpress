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
          fill
          src={author.node.avatar.url}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-full"
          alt={name}
          />
      </div>
      <div className="block text-xl font-bold mr-auto">{name}</div>
    </div>
  );
}
