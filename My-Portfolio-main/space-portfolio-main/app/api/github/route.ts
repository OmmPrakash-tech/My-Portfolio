export async function GET() {
  const username = "OmmPrakash-tech";

  const userRes = await fetch(`https://api.github.com/users/${username}`);
  const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
  const eventsRes = await fetch(`https://api.github.com/users/${username}/events`);

  const user = await userRes.json();
  const repos = await reposRes.json();
  const events = await eventsRes.json();

  return Response.json({
    followers: user.followers,
    following: user.following,
    publicRepos: user.public_repos,
    contributions: events.length,
  });
}