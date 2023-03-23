export default async function handler(req, res) {
  // verify if secret is valid
  if (req.query.secret !== process.env.REVALIDATION_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" should be "/blog/post1"
    await res.revalidate("/news");
    return res.json({ revalidated: tru });
  } catch (err) {
    // if there was an error, nextjs will cont to show the last successful generated page
    return res.status(500).send("Error revalidating");
  }
}
