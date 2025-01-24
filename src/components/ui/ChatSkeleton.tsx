export const ChatSkeleton = () => {
  return (
    <div
      role="status"
      className="w-[20em] p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded-sm shadow-sm animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
      </div>
      <div className="w-full grid gap-2 grid-cols-[auto,1fr] items-end">
        <div className="w-full flex justify-start">
          <div className="w-7 h-7 mt-3 bg-gray-300 rounded-full dark:bg-gray-700"></div>
        </div>
        <div>
          <div className="w-full h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 mb-2.5"></div>
          <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="w-full grid gap-2 grid-cols-[1fr,auto] items-end">
        <div>
          <div className="w-full h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 mb-2.5"></div>
          <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="w-full flex justify-start">
          <div className="w-7 h-7 mt-3 bg-gray-300 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="w-full grid gap-2 grid-cols-[auto,1fr] items-end">
        <div className="w-full flex justify-start">
          <div className="w-7 h-7 mt-3 bg-gray-300 rounded-full dark:bg-gray-700"></div>
        </div>
        <div>
          <div className="w-full h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 mb-2.5"></div>
          <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="w-full grid gap-2 grid-cols-[1fr,auto] items-end">
        <div>
          <div className="w-full h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 mb-2.5"></div>
          <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div className="w-full flex justify-start">
          <div className="w-7 h-7 mt-3 bg-gray-300 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>{" "}
      <div className="w-full grid gap-2 grid-cols-[auto,1fr] items-end">
        <div className="w-full flex justify-start">
          <div className="w-7 h-7 mt-3 bg-gray-300 rounded-full dark:bg-gray-700"></div>
        </div>
        <div>
          <div className="w-full h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 mb-2.5"></div>
          <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
