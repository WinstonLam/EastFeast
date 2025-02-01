// utils/withBasePath.ts
export function withBasePath(path: string): string {
  const basePath = process.env.NODE_ENV === "production" ? "/EastFeast" : "";
  return `${basePath}${path}`;
}
