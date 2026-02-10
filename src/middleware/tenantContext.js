

export default function tenantContext(req, res, next) {
  if (!req.auth) {
    return res.status(500).json({ error: "Auth context missing" });
  }

  req.context = {
    userId: req.auth.userId,
    orgId: req.auth.orgId,
    roles: req.auth.roles,
  };

  return next();
}
