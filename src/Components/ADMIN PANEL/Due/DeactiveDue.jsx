import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../AXIOS/useAxiosSecure";
import moment from "moment";
import { Link } from "react-router";


const DeactiveDue = () => {
  const axiosSec = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["due"],
    queryFn: async () => {
      const res = await axiosSec("/allmembar");
      return res.data;
    },
  });

  const lastFullMonth = moment().subtract(1, "month").startOf("month");

  const getDueMonths = (user) => {
    const admitDate = moment(user.admiteDate, "MMMM Do YYYY, h:mm:ss a").startOf("month");

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

    return expectedMonths.filter((month) => !uniquePaidMonths.has(month));
  };

  const DueUsers = users.filter((user) => getDueMonths(user).length > 0)
  const onlyActive = DueUsers.filter(users => users?.active === "no");
  console.log(onlyActive)

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-white">
            🧾Deactive Members with Due Payments
          </h1>
          <p className="text-white-500 mt-2 text-sm md:text-base">
            Total Deactive Active Members with Dues: <strong>{onlyActive?.length}</strong>
          </p>
        </header>

        {onlyActive?.length === 0 ? (
          <div className="text-center mt-20 text-green-600 text-lg font-semibold">
            ✅ All deactive members are up to date with payments!
          </div>
        ) : (
          <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {onlyActive?.map((user) => {
              const dueMonths = getDueMonths(user);
              return (
                <Link to={`/admin/membar/${user?._id}`} key={user._id}>
                  <div className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                    <div className="p-6">
                      {/* Top */}
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={user.memberPhotoUrl}
                          alt="member"
                          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-400"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://via.placeholder.com/100?text=No+Image";
                          }}
                        />
                        <div>
                          <h2 className="text-xl font-semibold text-gray-900">
                            {user.name}
                          </h2>
                          <p className="text-sm text-gray-500">📞 {user.phone}</p>
                          <p className="text-sm text-gray-500">📍 {user.address}</p>
                        </div>
                      </div>

                      {/* Due Info */}
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">
                          📆 Due Months:
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {dueMonths.map((month) => (
                            <span
                              key={month}
                              className="bg-red-100 text-red-700 text-xs px-3 py-1 rounded-full font-semibold"
                            >
                              {month}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm font-semibold text-gray-800">
                          🧮 Total Due:{" "}
                          <span className="text-red-600 text-base">
                            {dueMonths.length}
                          </span>{" "}
                          month{dueMonths.length > 1 ? "s" : ""}
                        </p>
                        <p className="text-sm font-semibold text-gray-800">
                          🧮 Deactive Date:{" "}
                          <span className="text-red-600 text-base">
                            {user?.deactive}
                          </span>{" "}
                          
                        </p>
                      </div>
                    </div>

                    {/* Bottom hoverable footer */}
                    <div className="bg-gray-100 text-center py-3 rounded-b-xl text-sm text-indigo-600 font-medium hover:bg-indigo-50 transition">
                      View Member Profile →
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
        )}
      </div>
    </div>
  );
};

export default DeactiveDue;
