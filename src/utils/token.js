import jwt from "jsonwebtoken";

export function generateAccessToken({ userId, orgId, role }) {
  return jwt.sign(
    {
      sub: userId,
      orgId,
      role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
      issuer: "multi-tenant-saas",
    }
  );
}
