import jwt from 'jsonwebtoken'
import 'dotenv/config'

export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header missing" });
  }

  const [scheme, token] = authHeader.split(" ");
  if (scheme !== "Bearer" || !token) {
    return res.status(401).json({ error: "Invalid authorization format" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (!Array.isArray(payload.roles)) {
      return res.status(401).json({
        error: "Invalid token: roles must be an array",
      });
    }

    req.auth = {
      userId: payload.sub,
      orgId: payload.orgId,
      roles: payload.roles,
    };

    return next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}
