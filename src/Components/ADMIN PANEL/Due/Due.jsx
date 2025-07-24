import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../AXIOS/useAxiosSecure";
import moment from "moment";

const Due = () => {
  const axiosSec = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["due"],
    queryFn: async () => {
      const res = await axiosSec("/allmembar");
      return res.data;
    },
  });

  // Get the last full month from today
  const lastFullMonth = moment().subtract(1, "month").startOf("month");

  // Calculate due months for each user
  const getDueMonths = (user) => {
    // if (!user.admiteDate) {
    //   console.warn("Missing admitDate for user:", user.name);
    //   return [];
    // }

    // Parse admitDate with proper format including ordinal
    const admitDate = moment(
      user.admiteDate,
      "MMMM Do YYYY, h:mm:ss a"
    ).startOf("month");

    // Parse payments accordingly
    const paidMonths = user.payments.map((date) =>
      moment(date, "MMMM Do YYYY, h:mm:ss a").format("YYYY-MM")
    );
    const uniquePaidMonths = new Set(paidMonths);

    const expectedMonths = [];
    let loopDate = admitDate.clone();

    while (loopDate.isSameOrBefore(lastFullMonth, "month")) {
      expectedMonths.push(loopDate.format("YYYY-MM"));
      loopDate.add(1, "month");
    }

    const dueMonths = expectedMonths.filter(
      (month) => !uniquePaidMonths.has(month)
    );

    return dueMonths;
  };

  const DueUsers = users.filter((user) => getDueMonths(user).length > 0);
  console.log(DueUsers);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
          🧾 User Due Payment List
        </h1>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {DueUsers?.map((user) => {
          const dueMonths = getDueMonths(user);

          return (
            <div
              key={user._id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Member Photo */}
              <img
                src={user.memberPhotoUrl}
                alt={`${user.name} photo`}
                className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500 mb-4 shadow-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/112?text=No+Image";
                }}
              />

              {/* User Info */}
              <h2 className="text-2xl font-semibold text-gray-900">
                {user.name}
              </h2>
              <p className="text-gray-600 mt-1">📞 {user.phone}</p>
              <p className="text-gray-600">{user.address}</p>

              {/* Due Info */}
              <div className="mt-6 w-full">
                {dueMonths.length > 0 ? (
                  <>
                    <p className="text-red-600 font-bold mb-3 text-lg">
                      ❌ Missed Payments
                    </p>
                    <p className="mb-2 font-medium text-gray-700">
                      📆 Due Months:
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {dueMonths.map((month) => (
                        <span
                          key={month}
                          className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full shadow"
                        >
                          {month}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 font-semibold text-gray-800">
                      🧮 Total Due:{" "}
                      <span className="text-red-600">{dueMonths.length}</span>{" "}
                      month
                      {dueMonths.length > 1 ? "s" : ""}
                    </p>
                  </>
                ) : (
                  <p className="text-green-600 font-semibold text-lg">
                    ✅ No Dues
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Due;
