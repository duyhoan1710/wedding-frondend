import User from "@/lib/models/User";

export const getList = async ({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) => {
  const [users, total] = await Promise.all([
    User.find(
      {},
      {
        _id: 1,
        fullName: 1,
        email: 1,
        role: 1,
        status: 1,
        isActive: 1,
        createdAt: 1,
      },
      {
        skip: perPage * (page - 1),
        limit: perPage,
        sort: { createdAt: -1 },
      },
    ),
    User.count(),
  ]);

  return {
    data: users,
    total,
  };
};
