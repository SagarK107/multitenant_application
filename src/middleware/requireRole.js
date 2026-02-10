export default function requireRole(allowedRoles) {
  return function (req, res, next) {
    const roles = req?.context?.roles;

    if (!Array.isArray(roles)) {
      return res.status(500).json({
        error: "Roles missing from request context",
      });
    }

    const isAllowed = allowedRoles.some((role) =>
      roles.includes(role)
    );

    if (!isAllowed) {
      return res.status(403).json({
        error: "Forbidden: insufficient role",
      });
    }

    return next();
  };
}
