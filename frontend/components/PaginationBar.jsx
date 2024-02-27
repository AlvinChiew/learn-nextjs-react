import Link from 'next/link';

export default function PaginationBar({ href, page, pageCount }) {
  return (
    <div className="flex gap-2 pb-3">
      <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
        &lt;
        <span className="sr-only">Previous Page</span>
      </PaginationLink>
      <span>
        Page {page} of {pageCount}
      </span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        enabled={page < pageCount}
      >
        &gt;
        <span className="sr-only">Next Page</span>
      </PaginationLink>
    </div>
  );
}

function PaginationLink({ children, enabled, href }) {
  if (enabled) {
    return (
      <Link
        href={href}
        className="border flex gap-1 items-center px-2 py-1 rounded 
          text-slate-500 text-sm hover:bg-orange-100 
          hover:text-slate-700"
      >
        {children}
      </Link>
    );
  } else {
    return (
      <span
        href={href}
        className="border cursor-not-allowed flex gap-1 items-center px-2 py-1 rounded 
            text-slate-300 text-sm"
      >
        {children}
      </span>
    );
  }
}
