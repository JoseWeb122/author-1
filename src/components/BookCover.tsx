import type { Book } from "../data/books";

export default function BookCover({ book, className = "" }: { book: Book; size?: "md" | "lg"; className?: string }) {
  return (
    <div className={`book-cover relative aspect-[1159/1500] overflow-hidden rounded-[6px_18px_18px_6px] bg-sky ${className}`}>
      <img
        src={book.cover}
        alt={`Book cover: ${book.title} by Christian Kueng, illustrated by ${book.illustrator}`}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      {/* spine highlight */}
      <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/30 via-white/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/15" />
    </div>
  );
}
